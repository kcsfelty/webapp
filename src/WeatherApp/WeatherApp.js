import {WeatherAppStyle} from "../common/WeatherAppStyle";
import React from "react";
import {Location} from "./Location/Location";
import {Settings} from "./Settings/Settings";
import {Condition} from "./Condition/Condition";
import {Current} from "./Current/Current";
import {Forecast} from "./Forecast/Forecast";
import {Temps} from "./Temps/Temps";

export const WeatherApp = (props) => {
    return (
        <WeatherAppStyle>
            <Condition />
            <Current />
            <Forecast />
            <Location />
            <Settings />
            <Temps />
        </WeatherAppStyle>
    )
}