import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() =>{
        const storedCart = getShoppingCart();
        const savedCart  = [];
        // Step 1 : Get id
        for(const id in storedCart){
            // Step 2: Get the product by using id 
            const addedProduct = products.find(product => product.id === id);
            // Step 3: Add QUantity
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // Step 4: Add the added product to the saves cart
            savedCart.push(addedProduct)
        }            
        }
        // Step 5: Set The cart
        setCart(savedCart);
    },[products])

    const handleAddToCart = (product) =>{

        let newCart = [];

        // const newCart = [...cart, product];

        const exist = cart.find(pd => pd.id === product.id);
        if(!exist){
            product.quantity = 1;
            newCart = [ ...cart, product ]
        }
        else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exist];
        }

        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product} key={product.id}
                        handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart handleClearCart={handleClearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;