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
            <div>{labelTime((new Date())/ 1000)} {readableDate(localtime.substring(0,10))}</div>
            <div>{`Latitude: ${lat}°, Longitude: ${lon}°`}</div>
            <div>{`Timezone ${tz_id.replace("_", " ")}`}</div>
            <div>{`Last updated ${timestampAgeMinutes(last_updated)} minute${timestampAgeMinutes(last_updated) === 1 ? "" : "s"} ago`}</div>
            <div>{`Data is ${timestampAgeMinutes(fetchTime)} minute${timestampAgeMinutes(fetchTime) === 1 ? "" : "s"} old`}</div>
        </LocationStyle>
    )
}

const timestampAgeMinutes = (then) => {
    const iosFriendly = isNaN(Date.parse(then)) ? Date.parse(then.replace(" ", "T")) : Date.parse(then)

    return Math.floor((Date.parse(new Date()) - iosFriendly)/60/1000)
}