import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props)
    const { img, name, price, seller, quantity, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;



    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p className='price'>Price: ${price}</p>
            <p className='seller'>Manufacturer: {seller}</p>
            <p className='rating'>Rating : {ratings} star</p>

            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} /></button>

        </div>
    );
};
import './Product.css'

export default Product;