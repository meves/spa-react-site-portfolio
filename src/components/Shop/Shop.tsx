import style from './Shop.module.scss';

interface IShop {
    message: string;
}

const Shop = (props: IShop) => {
    return (
        <section className={style.sectionShop}>
            {props.message}
            Shop
        </section>
    );
};

export default Shop;