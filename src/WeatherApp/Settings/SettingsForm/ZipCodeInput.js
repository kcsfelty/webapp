import {setZipCode} from "../../../Context/Actions";
import {WeatherContext} from "../../../Context/Context";
import React, {useContext} from "react";
import {InputHelperText} from "./InputHelperText";

export const ZipCodeInput = (props) => {

    const {state = {}, dispatch} = useContext(WeatherContext)
    const {zipCode, zipCodeValid, zipCodeHelperText} = state

    return (
        <div style={{position: "relative"}}>
            {!zipCodeValid && <InputHelperText>{zipCodeHelperText}</InputHelperText>}
            <input defaultValue={zipCode} className={"zipCodeInput"} valid={!zipCodeValid && "invalid"} onChange={(e) => dispatch(setZipCode({newZipCode:e.target.value}))} />
        </div>
    )
}