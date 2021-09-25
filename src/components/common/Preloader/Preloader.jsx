import React from 'react';
import style from './Preloader.module.scss';
import preloader from '../../../assets/images/preloader.gif';

const Preloader = (props) => {
    return (
        <div className={style.preloader}>
            {props.isFetching && <img src={preloader} alt="Scroll" />}            
        </div>
    );
}

export default Preloader;
