import React, {useContext} from "react";
import {WeatherContext} from "../../Context/Context";
import {readableDate} from "../../util/readableDate";
import {labelTime} from "../../util/labelTime";
import {LocationStyle} from "./LocationStyle";
import {Highlight} from "../../common/Highlight";

export const Location = (props) => {
    const {state:{weatherData = {}, fetchTime} = {}} = useContext(WeatherContext)
    const {
        location: {
            lat = 45.12,
            localtime = "2020-12-08 21:03",
            lon = -93.38,
            name = "Minneapolis",
            region = "Minnesota",
            tz_id = "America/Chicago",
        } = {},
        current: {
            last_updated = "2020-12-08 20:45",
        } = {}
    } = weatherData
    return (
        <LocationStyle>
            <Highlight size={25}>{`${name}, ${region}`}</Highlight>
            <div>{labelTime((new Date(last_updated.replace(" ", "T")))/ 1000)} {readableDate(last_updated.substring(0,10))}</div>
            <div>{`Latitude: ${lat}°, Longitude: ${lon}°`}</div>
            <div>{`Timezone ${tz_id.replace("_", " ")}`}</div>
            <div>{`Last updated ${Math.floor((Date.parse(localtime.replace(" ", "T")) - Date.parse(last_updated.replace(" ", "T")))/1000/60)} minutes ago`}</div>
            <div>{`Last fetched ${Math.floor((Date.parse(fetchTime) - Date.parse(fetchTime))/1000/60)} minutes ago`}</div>
        </LocationStyle>
    )
}