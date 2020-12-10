import React, {useContext, useEffect} from "react";
import {WeatherContext} from "../../Context/Context";
import {
    setFetchTime,
    setZipCodeHelperText,
    setZipCodeValid,
    updateWeatherData,
} from "../../Context/Actions";
import {SettingsStyle} from "./SettingsStyle";
import {Highlight} from "../../common/Highlight";
import {formFields} from "./SettingsForm/formFields";

const zipCodeRegex = /(^\d{5}(?:[\s]?[-\s][\s]?\d{4})?$)/

export const Settings = (props) => {
    const {state = {}, dispatch} = useContext(WeatherContext)
    const {zipCode, forecastedDays} = state

    useEffect(() => {
        if (zipCode.match(zipCodeRegex)) {
            fetchData(zipCode, forecastedDays)
        } else {
            dispatch(setZipCodeValid({zipCodeValid: false}))
            dispatch(setZipCodeHelperText({zipCodeHelperText: "Must contain five digits"}))
        }
    },[zipCode, forecastedDays])

    const fetchData = async (zip, days) => {
        console.log("fetching data")
        const weatherURL = `${state.weatherAPI.url}${state.weatherAPI.forecast}?key=${state.weatherAPI.key}&q=${zip}&days=${days}`
        const weatherResponse = await fetch(weatherURL)
        const newWeatherData = await weatherResponse.json()
        dispatch(setZipCodeValid({zipCodeValid: weatherResponse.status === 200}))
        weatherResponse.status === 200 && dispatch(updateWeatherData({newWeatherData}))
        weatherResponse.status === 200 && dispatch(setFetchTime({fetchTime: new Date()}))
        dispatch(setZipCodeHelperText({zipCodeHelperText: weatherResponse.status === 200 || "Not a valid zip code"}))
    }

    return (
        <SettingsStyle>
            <Highlight>Settings</Highlight>
            <table>
                {formFields.map(({label, component}, index) => (
                    <tr key={index}>
                        <td>
                            {label}
                        </td>
                        <td>
                            {component}
                        </td>
                    </tr>
                ))}
            </table>
        </SettingsStyle>
    )
}