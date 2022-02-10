import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id:number) => void
    filter:FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    // const setAll = () => {
    //     props.setFilter("all")
    // } // need to fix
    // const setHigh = () => {
    //     props.setFilter("high")
    // }
    // const setMiddle = () => {
    //     return props.setFilter("middle")
    // }
    // const setLow = () => {
    //     return props.setFilter("low")
    // }

    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType) // воспринимает строку как типизацию
    }

    const Classes = (filter:FilterType) => {
        return style.button + (props.filter === filter ? ' ' + style.active : ' ')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={set} className={Classes('all')} value={'all'}>All</button>
            <button onClick={set} className={Classes('high')} value={'high'}>High</button>
            <button onClick={set} className={Classes('middle')} value={'middle'}>Middle</button>
            <button onClick={set} className={Classes('low')} value={'low'}>Low</button>
        </div>
    )
}

export default Affairs
