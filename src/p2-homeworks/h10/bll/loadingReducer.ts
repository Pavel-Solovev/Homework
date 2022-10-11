export type loadingStateType = {
    loading: boolean
}

const initState: loadingStateType = {loading: false}

export const loadingReducer = (state = initState, action: loadingACType): loadingStateType => { //
    switch (action.type) {
        case 'START-LOADING': {
            return {...state, loading: action.payload.loading}
        }
        default:
            return state
    }
}

type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (loading: boolean) => {
    return {
        type: 'START-LOADING',
        payload: {
            loading
        } as const
    }
} // fix any
