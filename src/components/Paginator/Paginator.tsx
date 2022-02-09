import React, { FC } from "react";
import styles from './Paginator.module.scss'; 
import { useState } from 'react';
import classNames from "classnames";

type PropsType = {
    count: number
    totalCount: number
    currentPage: number
    handlePageNumberClick: (currentPage: number) => void
}

const Paginator: FC<PropsType> = (props): JSX.Element => {
    const [currentBlock, setCurrentBlock] = useState(1);
    const left: number = (currentBlock - 1) * 10 + 1;
    const right: number = currentBlock * 10;
    const blockSize: number = 10;

    let numberOfPages: number = Math.ceil(props.totalCount / props.count);
    let numberOfBlocks: number = Math.ceil(numberOfPages / blockSize);
    
    const blocks: Array<JSX.Element> = [];
    for (let i: number = left; i <= right && i <= numberOfPages; i++) {
        const classes: string = classNames(styles.paginationNumber, {
                                  [styles.currentNumber]: i === props.currentPage
                        });            
        blocks.push(<div className={classes} key={i}
                         onClick={() => {props.handlePageNumberClick(i);}}>{i}
                    </div>
        );
    }
    return (
        <div className={styles.paginationWrapper}>
            {currentBlock > 1 ? <button onClick={() => setCurrentBlock(1)}>First</button> : null}
            {currentBlock > 1 ? <button onClick={() => setCurrentBlock(currentBlock-1)}>{`Prev <<`}</button> : null}            
            <div className={styles.pagesWrapper}>
                { blocks }
            </div>
            {currentBlock < numberOfBlocks ? <button onClick={() => setCurrentBlock(currentBlock+1)}>{`>> Next`}</button> : null}
            {currentBlock < numberOfBlocks ? <button onClick={() => setCurrentBlock(numberOfBlocks)}>Last</button> : null}
        </div>
    );          
}

export default Paginator;
