import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {labelTime} from "../../../util/labelTime";
import {WeatherContext} from "../../../Context/Context";
import React, {useContext} from "react";

export const ForecastChart = ({day}) => {
    const {state:{metric, forecastGraphCriteria = "feelslike_f"}} = useContext(WeatherContext)
    return (
        <ResponsiveContainer width={"99%"} height={160} >
            <LineChart
                data={day.hour.map(hour => ({time:labelTime(hour.time_epoch, false), data:hour[forecastGraphCriteria]}))}
                margin={{ top: 0, left: -20, right: 0, bottom: 0 }}
            >
                <Tooltip />
                <XAxis dataKey={"time"} axisLine={false}/>
                <YAxis domain={['dataMin' + metric ? " - 3" : " - 10", 'dataMax' + metric ? " + 3" : " + 10"]} />
                <Line type="monotone" dataKey="data" stroke="#8884d8" dot={false} activeDot={false} />
            </LineChart>
        </ResponsiveContainer>
    )
}