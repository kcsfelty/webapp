import {setMetricUnits} from "../../../Context/Actions";
import {WeatherContext} from "../../../Context/Context";
import React, {useContext} from "react";

export const UnitsSelector = (props) => {

    const {state:{metric} = {}, dispatch} = useContext(WeatherContext)

    return (
        <input checked={metric} onChange={(e) => dispatch(setMetricUnits({metric:!metric}))} type={"checkbox"}/>
    )
}