import React, {useContext} from "react";
import {WeatherContext} from "../../Context/Context";
import {ConditionStyle} from "./ConditionStyle";
import {Highlight} from "../../common/Highlight";
import {WeatherIcon} from "../../common/WeatherIcon";

export const Condition = (props) => {
    const {state:{weatherData = {}} = {}} = useContext(WeatherContext)
    const {
        current: {
            condition:{
                icon = "//cdn.weatherapi.com/weather/64x64/night/113.png",
                text = "Clear",
            } = {},
        } = {}
    } = weatherData
    return (
        <ConditionStyle>
            <WeatherIcon margin={60} size={200} src={icon}/>
            <Highlight size={40}>{text}</Highlight>
        </ConditionStyle>
    )
}