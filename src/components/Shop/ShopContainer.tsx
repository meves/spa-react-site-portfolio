import React, { FC } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAithRedirect';
import { receiveMessage } from "../../redux/selectors/shop-selectors";
import styles from './Shop.module.scss';
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
    message: string
}

const Shop: FC<PropsType> = (props): JSX.Element => {    
    return (
        <section className={styles.sectionShop}>
            {props.message}
        </section>
    );
};

type MapStatePropsType = {
    message: string
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        message: receiveMessage(state)
    };
}

export default compose( 
    connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, {}), 
    withAuthRedirect )(Shop);
