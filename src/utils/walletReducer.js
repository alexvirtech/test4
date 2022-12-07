export const initState = {
    page: 'home'
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "PAGE":
            return {
                ...state,
                page: action.param
            }
        default:
            return state
    }
}