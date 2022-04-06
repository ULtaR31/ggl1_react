import React from 'react'
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

let Nav = ()=> {
    return (
        <div className={classes.nav}>

            <NavLink exact to=''>Библиотека информирует</NavLink>

            <NavLink exact to=''>Первичная профсоюзная</NavLink>

            <NavLink exact to=''>Фотогалерея</NavLink>

            <NavLink exact to=''>Календарь</NavLink>

            <NavLink exact to=''>Карта сайта</NavLink>

        </div>
    )
}

export default Nav;