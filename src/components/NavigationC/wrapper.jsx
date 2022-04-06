import React from 'react'
import classes from './wrapper.module.css'
import Nav from "../Nav/Nav";
import Promises from "../PromiseC/Promise";

let Wrapper = ()=> {
    return (
        <div className={classes.wrapper}>
            <div className={classes.leftBlock}>
                <Nav />
                <Promises />
            </div>
            <div className={classes.content}>
123
            </div>
            <div className={classes.rightBlock}>
123
            </div>
        </div>
    )
}

export default Wrapper;