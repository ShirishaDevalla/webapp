import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';


const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setData(data);
                setFilter(data);
            } catch (error) {
                console.error('Error Fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    const Loading = () => {
        return <div>Loading....</div>;
    };

    const ShowProducts = () => {
        return (
            <div>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>

                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>
                        All
                    </button>
                    <button
                        className='btn btn-outline-dark me-2'
                        onClick={() => setFilter(data.filter(product => product.category === "men's clothing"))}
                    >
                        Men's Clothing
                    </button>
                    <button
                        className='btn btn-outline-dark me-2'
                        onClick={() => setFilter(data.filter(product => product.category === "women's clothing"))}
                    >
                        Women's Clothing
                    </button>
                    <button
                        className='btn btn-outline-dark me-2'
                        onClick={() => setFilter(data.filter(product => product.category === "jewelery"))}
                    >
                        Jewelery
                    </button>
                    <button
                        className='btn btn-outline-dark me-2'
                        onClick={() => setFilter(data.filter(product => product.category === "electronics"))}
                    >
                        Electronics
                    </button>
                </div>
                <div className='row'>

                    {filter.map((product) => {
                        return (
                            <div key={product.id} className='col-md-3 mb-4 '>
                                <div className="card h-100 text-center p-4" style={{ width: "16rem" }}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height={200} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                        <p className="card-text" style={{ fontWeight: "bold" }}>{`$${product.price}`}</p>

                                        <NavLink to={`/Product/${product.id}`} className='btn btn-outline-dark'>
                                            Buy Now
                                        </NavLink>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className='container my-5 py-5'>
                    <div className='row'>
                        <div className='col-md-12 mb-5 justify-content-center align-items-center'>
                            <h1 className='text-center'>Latest Products</h1>
                            <hr />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Products