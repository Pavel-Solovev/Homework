import React from 'react'
import {AffairType} from './HW2'
import style from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const filterClass = style.item + ' ' + style[props.affair.priority]

    return (
        <div className={style.affair}>

            <div className={style.item}>{props.affair.name}</div>
            <div className={filterClass}>--{props.affair.priority}--</div>

            <button className={style.item + ' ' + style.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
