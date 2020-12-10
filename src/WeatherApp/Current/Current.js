import React, {useContext} from "react";
import {WeatherContext} from "../../Context/Context";
import {CurrentStyle} from "./CurrentStyle";
import {Highlight} from "../../common/Highlight";

export const Current = (props) => {
    const {state:{weatherData = {}, metric = false} = {}} = useContext(WeatherContext)
    const {
        current: {
            gust_kph = 16.2,
            gust_mph = 10.1,
            humidity = 78,
            precip_in = 0,
            precip_mm = 0,
            pressure_in = 30.3,
            pressure_mb = 1010,
            uv = 1,
            vis_km = 16,
            vis_miles = 9,
            wind_dir = "WSW",
            wind_kph = 6.1,
            wind_mph = 3.8,
        } = {}
    } = weatherData
    return (
        <CurrentStyle>
            <Highlight>Current Weather Conditions</Highlight>
            <table>
                <tr>
                    <td>
                        Wind Speed
                    </td>
                    <td>
                        {metric ? `${wind_kph} kph` : `${wind_mph} mph`}
                    </td>
                </tr>
                <tr>
                    <td>
                        Gusts
                    </td>
                    <td>
                        {metric ? `${gust_kph} kph` : `${gust_mph} mph`}
                    </td>
                </tr>
                <tr>
                    <td>
                        Wind Direction
                    </td>
                    <td>
                        {wind_dir}
                    </td>
                </tr>
                <tr>
                    <td>
                        Humidity
                    </td>
                    <td>
                        {humidity}%
                    </td>
                </tr>
                <tr>
                    <td>
                        Precipitation
                    </td>
                    <td>
                        {metric ? `${precip_mm} mm` : `${precip_in} in.`}
                    </td>
                </tr>
                <tr>
                    <td>
                        Pressure
                    </td>
                    <td>
                        {metric ? `${pressure_mb} mb` : `${pressure_in} in.`}
                    </td>
                </tr>
                <tr>
                    <td>
                        UV Index
                    </td>
                    <td>
                        {uv}
                    </td>
                </tr>
                <tr>
                    <td>
                        Visibility
                    </td>
                    <td>
                        {metric ? `${vis_km} km` : `${vis_miles} mi`}
                    </td>
                </tr>
            </table>
        </CurrentStyle>
    )
}