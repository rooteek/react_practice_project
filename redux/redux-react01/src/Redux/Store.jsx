import { createStore } from 'redux'

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            return state
    }
}

export const Store = createStore(reducer);