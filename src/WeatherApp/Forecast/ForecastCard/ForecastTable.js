import {ForecastTableStyle} from "./ForecastTableStyle";
import {WeatherContext} from "../../../Context/Context";
import React, {useContext} from "react";
import {WeatherIcon} from "../../../common/WeatherIcon";

export const ForecastTable = ({day}) => {
    const {state:{metric}} = useContext(WeatherContext)
    return (
        <ForecastTableStyle>
            <WeatherIcon src={day.day.condition.icon}/>
            <table>
                <tr>
                    <td>Max</td>
                    <td>{metric ? day.day.maxtemp_c + "°C" : day.day.maxtemp_f + "°F"}</td>
                </tr>
                <tr>
                    <td>Min</td>
                    <td>{metric ? day.day.mintemp_c + "°C" : day.day.mintemp_f + "°F"}</td>
                </tr>
                <tr>
                    <td>Avg</td>
                    <td>{metric ? day.day.avgtemp_c + "°C" : day.day.avgtemp_f + "°F"}</td>
                </tr>
            </table>
        </ForecastTableStyle>
    )
}