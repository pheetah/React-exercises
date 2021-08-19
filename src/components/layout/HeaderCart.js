import CartIcon from '../cart/Cart';
import classes from './HeaderCart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCart = props => {

    const cartContext = useContext(CartContext); 

    const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCart;