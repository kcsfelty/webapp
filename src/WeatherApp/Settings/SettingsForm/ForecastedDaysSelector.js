import {setForecastedDays} from "../../../Context/Actions";
import {WeatherContext} from "../../../Context/Context";
import React, {useContext} from "react";

export const ForecastedDaysSelector = (props) => {

    const {state = {}, dispatch} = useContext(WeatherContext)

    return (
        <select onChange={(e) => dispatch(setForecastedDays({newForecastedDays:e.target.value}))}>
            <option>1</option>
            <option>2</option>
            <option selected>3</option>
        </select>
    )
}