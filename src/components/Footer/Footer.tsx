import style from './Footer.module.scss';

interface IFooter {
    message: string;
}

const Footer = (props: IFooter) => {
    return (
        <footer className={style.footer}>
            {props.message}
        </footer>
    );
};

export default Footer;
