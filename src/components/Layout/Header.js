import React, { Fragment } from "react";

import mealsImage from '../../assets/meals.jpg';
import classes from '/Header.module.css';

const Header = () => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of deliciuos food!' />
        </div>
    </Fragment>
};

export default Header;