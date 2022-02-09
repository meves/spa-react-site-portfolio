import React, { FC } from 'react';
import styles from './NotFound.module.scss';

const NotFound: FC = (props): JSX.Element => {
    return (
        <div className={styles.notFound}>
            <h3>404 Not Found</h3>
            <p>The Page you requested was not found</p>
        </div>
    )
}

export default NotFound;
