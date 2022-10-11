import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {loadingAC} from './bll/loadingReducer';
import {AppStoreType} from "./bll/store";

function HW10() {

    // useSelector, useDispatch

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)

    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>{
            dispatch(loadingAC(false))
        }, 2000)
        console.log(loading)
        // setTimeout
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
