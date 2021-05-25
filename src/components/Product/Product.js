import React from 'react';

const Product = (props) => {
    const {product, addToCart} = props;
    const {name, id} =props.product;
    return (
        <div style={{border: '1px solid goldenrod', margin:'10px', padding: '10px', borderRadius: '5px'}}>
            <h5>{product.name}</h5>
            <button onClick={()=>addToCart(product.id, product.name)}>Add To Cart</button>
        </div>
    );
};

export default Product;