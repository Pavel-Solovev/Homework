import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ThemesAC, ThemesStateType, ThemesType} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import s from './HW12.module.css';


const themes = ['default', 'dark', 'red', 'some'];

function HW12() {
    const { theme } = useSelector<AppStoreType, ThemesStateType>(
        (state) => state.themes
    );
    const dispatch = useDispatch();

    const onChangeOptionHandler = (option: ThemesType) => {
        dispatch(ThemesAC(option));
    };

    return (
        <div className={s[theme]}>
            <hr />
            <div>
                <span className={s[theme + '-text']}>homeworks 12</span>

                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}

                <span>
          <SuperRadio
              value={theme}
              options={themes}
              onChangeOption={onChangeOptionHandler}
          />
        </span>
            </div>

            <hr />
        </div>
    );
}

export default HW12;
