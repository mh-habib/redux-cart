import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    const { cart, removeFromCart } = props;
    return (
        <div style={{ border: '1px solid goldenrod', margin: '10px', padding: '10px', borderRadius: '5px' }}>
            <h1 style={{ color: 'blue', textAlign: 'center' }}>This is cart</h1>
            <ul>
                {
                    cart.map(pd => <li key={pd.cartId}> 
                        <button onClick={() => removeFromCart(pd.cartId)}> X </button> 
                        {pd.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);