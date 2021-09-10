const Works = (props) => {
    return (
        <section className="sectionWorks">
            <h3>{props.data.heading}</h3>
            <img src={props.data.preview} alt="Preview" />
            <p>{props.data.desc}</p>
            <a href="/">{props.data.ref}</a>
        </section>
    );
};

export default Works;