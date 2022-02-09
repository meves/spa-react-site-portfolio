import React, { FC } from 'react';
import style from './Preloader.module.scss';
import preloader from '../../../assets/images/preloader.gif';

type PropsType = {
    isFetching: boolean
}

const Preloader: FC<PropsType> = (props): JSX.Element => {
    return (
        <div className={style.preloader}>
            {props.isFetching && <img src={preloader} alt="Scroll" />}            
        </div>
    );
}

export default Preloader;
