import React, {ChangeEvent, useState} from 'react';
import Button from './../h4/common/c2-SuperButton/SuperButton';
import CheckBox from './../h4/common/c3-SuperCheckbox/SuperCheckbox'
import {API} from "./RequestAPI";



const Request = () => {
    const [success, setSuccess] = useState<boolean>(true)
    const [response, setResponse] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSuccess(e.currentTarget.checked)
    }

    const onClickHandler = () => {
        API.post(success)
            .then((res) => {
                setResponse(res.data.errorText)
            })
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                setResponse(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div>
            <CheckBox onChange={onChangeHandler} checked={success}/>
            <Button onClick={onClickHandler}>Push</Button>
            <div>{response}</div>
        </div>
    );
};

export default Request;
