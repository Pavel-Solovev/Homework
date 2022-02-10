import React, {ChangeEvent, KeyboardEvent} from 'react'
import style from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, onKeyPress, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? style.errorInput : style.input // need to fix with (?:)

    return (
        <div className={style.greeting}>
            <div>
                <input
                    className={inputClass}
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={onKeyPress}
                    onBlur={setNameCallback}
                />
                <div className={style.error}>{error}</div>
            </div>

            <button className={style.button} onClick={addUser}>add</button>
            <div className={style.count}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
