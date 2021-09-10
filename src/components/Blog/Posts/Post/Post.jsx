import style from './Post.module.scss';

const Post = (props) => {
    return (    
        <section className={style.post}>
            <img src={props.post.avatar} alt="" />
            <div className={style.text}>
                <h4>{props.post.theme}</h4>
                <p>{props.post.text}</p>
                <p>{props.post.date}</p>
            </div>                    
        </section>
    );
};

export default Post;