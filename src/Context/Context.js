import React, {useReducer} from "react";
import {Reducer} from "./Reducer";
import {InitialState} from "./InitialState";

export const WeatherContext = React.createContext({})

export const WeatherProvider = ({children, mockDispatch, mockInitialState}) => {
    const [state, dispatch] = useReducer(Reducer, InitialState, (initialState) => initialState)

    return (
        <WeatherContext.Provider value={{
            state: mockInitialState ? mockInitialState : state,
            dispatch: mockDispatch ? mockDispatch : dispatch}}
        >
            {children}
        </WeatherContext.Provider>
    )
}