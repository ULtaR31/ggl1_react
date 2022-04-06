import React from 'react'
import classes from './Promise.module.css'
import {NavLink} from "react-router-dom";

let Promises = ()=> {
    return (
        <div className={classes.promises}>
            <div className={classes.promText}>
                <p>Информационные ресурсы</p>
            </div>
            <div className={classes.promContent}>

            </div>
        </div>
    )
}

export default Promises;