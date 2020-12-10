import React, {useContext} from "react";
import {WeatherContext} from "../../Context/Context";
import {TempsStyle} from "./TempsStyle";
import {TempItemStyle} from "./TempItemStyle";

export const Temps = (props) => {
    const {state:{weatherData = {}, metric} = {}} = useContext(WeatherContext)
    const {
        current: {
            feelslike_c = -3.1,
            feelslike_f = 26.3,
            temp_c = 0,
            temp_f = 32,
        } = {}
    } = weatherData
    return (
        <TempsStyle>
            <table>
                <tr>
                    <td>
                        <TempItemStyle label={"Feels like"} units={metric ? "°C" : "°F"}>
                            {metric ? parseInt(feelslike_c) : parseInt(feelslike_f)}
                        </TempItemStyle>
                    </td>
                    <td>
                        <TempItemStyle label={"Currently"} units={metric ? "°C" : "°F"}>
                            {metric ? parseInt(temp_c) : parseInt(temp_f)}
                        </TempItemStyle>
                    </td>
                </tr>
            </table>
        </TempsStyle>
    )
}