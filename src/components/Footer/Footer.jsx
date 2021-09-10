import style from './Footer.module.scss';

const Footer = (props) => {
    return (
        <footer className={style.footer}>
            <span>Author: {props.footer.author}</span>
            <span>Data: {props.footer.data}</span>
            <span>email: {props.footer.email}</span>
            <span>tel: {props.footer.tel}</span>
        </footer>
    );
};

export default Footer;