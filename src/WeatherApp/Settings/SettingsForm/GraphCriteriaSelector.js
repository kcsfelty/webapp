import {setForecastGraphCriteria} from "../../../Context/Actions";
import {WeatherContext} from "../../../Context/Context";
import React, {useContext} from "react";

export const GraphCriteriaSelector = (props) => {

    const {state:{metric} = {}, dispatch} = useContext(WeatherContext)

    return (
        <select onChange={(e) => dispatch(setForecastGraphCriteria({newForecastGraphCriteria:e.target.value}))}>
            <option value={metric ? "wind_kph" : "wind_mph"}>Wind Speed</option>
            <option value={metric ? "pressure_mb" : "pressure_in"}>Pressure</option>
            <option value={metric ? "precip_mm" : "precip_in"}>Precipitation</option>
            <option value={"humidity"}>Humidity</option>
            <option value={"cloud"}>Cloud Coverage</option>
            <option selected={true} value={metric ? "feelslike_c" : "feelslike_f"}>Feels Like</option>
            <option value={metric ? "windchill_c" : "windchill_f"}>Wind Chill</option>
            <option value={metric ? "heatindex_c" : "heatindex_f"}>Heat Index</option>
            <option value={metric ? "dewpoint_c" : "dewpoint_f"}>Dew Point</option>
            <option value={"chance_of_rain"}>Chance Of Rain</option>
            <option value={"chance_of_snow"}>Chance Of Snow</option>
            <option value={metric ? "vis_km" : "vis_miles"}>Visibility</option>
            <option value={metric ? "gust_kph" : "gust_mph"}>Gust Speed</option>
        </select>
    )
}