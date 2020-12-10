import React, {useContext} from "react";
import {WeatherContext} from "../../Context/Context";
import {ForecastCard} from "./ForecastCard/ForecastCard";
import {ForecastStyle} from "./ForecastStyle";
import {Highlight} from "../../common/Highlight";

export const Forecast = (props) => {
    const {state:{weatherData:{forecast:{forecastday = []} ={}} = {}} = {}} = useContext(WeatherContext)

    return (
        <ForecastStyle>
            <Highlight>Forecast</Highlight>
            <ul>
                {forecastday.map((day, index) => (
                    <li>
                        <ForecastCard day={day} key={index} />
                    </li>
                ))}
            </ul>
        </ForecastStyle>
    )
}