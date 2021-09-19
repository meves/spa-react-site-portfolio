import React from 'react';
import style from './Shop.module.scss';

const Shop = (props) => {
    return (
        <section className={style.sectionShop}>
            {props.message}
        </section>
    );
};

export default Shop;