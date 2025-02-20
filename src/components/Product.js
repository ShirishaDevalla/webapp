import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './redux/Action';

const Product = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const state=useSelector((initialstate)=>initialstate)
  const dispatch= useDispatch()
  console.log(state, "state")
  

  const getProduct = async () => {
    try {
      setLoading(true); 
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`); 
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); 
    }
  };

  
  useEffect(() => {
    getProduct();
  }, [id]); 

  
  const Loading = () => {
    return <div className="text-center">Loading...</div>;
  };
  const handleADDITEM=()=>{
    if(product){
      dispatch(addItem(product))
    }
  }


  const ShowProduct = () => {
    if (!product) return null; 

    return (
      <div className="container my-5">
        <div className="row">
   
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded" height={300} width={400}
            />
          </div>

         
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1>{product.title}</h1>
            <p>Rating: {product.rating && product.rating.rate}</p>
            <h3>${product.price}</h3>

         
            <p className="text-muted" style={{ maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {product.description}
            </p>

           
            <div className="d-flex gap-3">
              <NavLink to='/Carditems' className="btn btn-primary btn-lg" onClick={handleADDITEM}>Add to Cart</NavLink>
             
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <Navbar />
      <div className="row">
        {loading ? <Loading /> : <ShowProduct />} 
      </div>
    </div>
  );
};

export default Product;
