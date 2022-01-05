import React from 'react'
import style from './Message.module.css'
type PropsType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: PropsType) {
    return (
        <div>
            <div className={style.message}>
                <img src={props.avatar} alt="user" width="50"
                     className={style.rounded_circle}></img>

                <div className={style.message_gray}>
                    <div className={style.bubble_bottom_left}></div>
                    <p className={style.message_name}>{props.name}</p>
                    <p className={style.message_content}>{props.message}</p>
                    <div className={style.bubble_bottom_left}></div>
                    <div className={style.message_timestamp_left}>{props.time}</div>
                </div>
            </div>
    </div>
)
}

export default Message
