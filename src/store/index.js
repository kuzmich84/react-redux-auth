import {createStore} from "redux"
import {create} from "@reduxjs/toolkit"

export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const INCREASE = 'increase'
export const TOGGLE = 'toggle'

const initialState = {
    counter: 0,
    showCounter: true
}

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1,
                showCounter: state.showCounter
            }
        case DECREMENT:
            return {
                counter: state.counter - 1,
                showCounter: state.showCounter
            }
        case INCREASE:
            return {
                counter: state.counter + action.amount,
                showCounter: state.showCounter
            }
        case TOGGLE:
            return {
                showCounter: !state.showCounter,
                counter: state.counter
            }
        default:
            return state
    }

}

const store = createStore(counterReducer)

export default store