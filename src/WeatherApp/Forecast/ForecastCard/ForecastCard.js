import React from "react";
import {readableDate} from "../../../util/readableDate";
import {Highlight} from "../../../common/Highlight";
import {ForecastBodyStyle} from "./ForecastBodyStyle";
import {ForecastChart} from "./ForecastChart";
import {ForecastTable} from "./ForecastTable";

export const ForecastCard = ({day}) => {
    return (
        <>
            <Highlight size={16}><b>{`${readableDate(day.date)}`}</b></Highlight>
            <ForecastBodyStyle day={day}>
                <ForecastTable day={day} />
                <div style={{flex: "1 0 auto"}}>
                    <ForecastChart day={day} />
                </div>
            </ForecastBodyStyle>
        </>
    )
}