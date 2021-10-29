import React from "react";
import style from './Paginator.module.scss'; 
import { useState } from 'react';

const Paginator = (props) => {
    const [currentBlock, setCurrentBlock] = useState(1);
    const left = (currentBlock - 1) * 10 + 1;
    const right = currentBlock * 10;
    const blockSize = 10;

    let numberOfPages = Math.ceil(props.totalCount / props.count);
    let numberOfBlocks = Math.ceil(numberOfPages / blockSize);
    
    const blocks = [];
    for (let i = left; i <= right && i <= numberOfPages; i++) {
        const classes = `${style.paginationNumber} ` + 
            `${i === props.currentPage && style.currentNumber}`;
            blocks.push(<div className={classes} key={i}
                        onClick={() => {
                            props.handlePageNumberClick(i);
                        }}
                    >{i}</div>);
    }
    return (
        <div className={style.paginationWrapper}>
            {currentBlock > 1 ? <button onClick={() => setCurrentBlock(1)}>First</button> : null}
            {currentBlock > 1 ? <button onClick={() => setCurrentBlock(currentBlock-1)}>{`Prev <<`}</button> : null}            
            <div className={style.pagesWrapper}>
                { blocks }
            </div>
            {currentBlock < numberOfBlocks ? <button onClick={() => setCurrentBlock(currentBlock+1)}>{`>> Next`}</button> : null}
            {currentBlock < numberOfBlocks ? <button onClick={() => setCurrentBlock(numberOfBlocks)}>Last</button> : null}
        </div>
    );          
}

export default Paginator;
