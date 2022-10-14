export type ThemesType = 'default' | 'dark' | 'red' | 'green'
export type ThemesStateType = {
    theme: ThemesType
}

export type ThemesACType = ReturnType<typeof ThemesAC>

const initState: ThemesStateType = {theme: 'default'};

export const themeReducer = (state = initState, action: ThemesACType): ThemesStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.payload.theme};
        }
        default:
            return state;
    }
};

export const ThemesAC = (theme: ThemesType) => {
    return {
        type: "CHANGE-THEME",
        payload: {
            theme
        } as const
    }

}; // fix any
