import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

export function Header() {
    const setActive = ({isActive}: any) => isActive ? s.active : ''
    return (
        <nav>
            <NavLink to={'/pre-junior'} className={setActive}>pre-junior</NavLink>
            <NavLink to={'/junior'} className={setActive}>junior</NavLink>
            <NavLink to={'/junior-plus'} className={setActive}>junior-plus</NavLink>

        </nav>
    )
}

