import style from './Shop.module.scss';

const Shop = (props) => {
    return (
        <section className={style.sectionShop}>
            {props.data.message}
        </section>
    );
};

export default Shop;