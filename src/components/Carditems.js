import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delItem } from './redux/Action';

const Carditems = () => {
 
  const cart = useSelector((initialstate) => initialstate.cart);
  const dispatch = useDispatch();


  const handleDELITEM = (product) => {
    dispatch(delItem(product)); 
  };

  return (
    <div>
      <div className="container my-5">
        <h1>Your Cart</h1>
        <div className="row">
          {cart.length === 0 ? (
            <div className="col-12">Your cart is empty!</div>
          ) : (
            cart.map((product) => {
              if (!product || !product.id) {
                return null;
              }

            
              console.log('Product Image:', product.image);

              return (
                <div key={product.id} className="col-md-3 mb-4">
                  <div className="card h-100 text-center p-4">
     
                    <img
                      src={product.image ? product.image : '/placeholder-image.jpg'}
                      className="card-img-top"
                      alt={product.title || 'Product Image'}
                      height={200}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title || 'Untitled Product'}</h5>
                      <p className="card-text">{`$${product.price || 'N/A'}`}</p>
                      <button className="btn btn-danger" onClick={() => handleDELITEM(product)}>
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Carditems;
