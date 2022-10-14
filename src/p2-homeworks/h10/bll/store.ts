import { createStore } from 'redux'
import { combineReducers } from 'redux'
import {loadingReducer} from './loadingReducer'
import {themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    themes: themeReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
