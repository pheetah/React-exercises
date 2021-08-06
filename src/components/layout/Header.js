import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import { Fragment } from 'react';
import HeaderCart from './HeaderCart';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCart />
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="Foods"/>
        </div>
    </Fragment>
};

export default Header;