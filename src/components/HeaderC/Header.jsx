import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

let Header = ()=> {
    return (
        <div className={classes.header}>
            <div className={classes.header__nav}>
                <ul>
                    <NavLink exact to='/news'>Новости</NavLink>
                    <NavLink exact to='/our-lycium'>Наш лицей</NavLink>
                    <NavLink exact to='/education'>Образовательное пространство</NavLink>
                    <NavLink exact to='/virtual-cabinet'>Виртуальный методический кабинет</NavLink>
                    <NavLink exact to='/students'>Учащимся</NavLink>
                    <NavLink exact to='/prodki'>Родителям</NavLink>
                    <NavLink exact to='/get-work'>Воспитательная работа</NavLink>
                    <NavLink exact to='/going-to-lycium'>Поступающим в Лицей</NavLink>
                    <NavLink rxact to='/one-window'>Одно окно</NavLink>
                    <NavLink exact to='/bying-servise'>Платные Услуги</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Header;