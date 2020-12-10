import {Definitions} from "./Definitions";

export const updateWeatherData = ({newWeatherData}) => ({type:Definitions.UpdateWeatherData, data: {newWeatherData}})
export const setZipCode = ({newZipCode}) => ({type:Definitions.SetZipCode, data: {newZipCode}})
export const setForecastedDays = ({newForecastedDays}) => ({type:Definitions.SetForecastedDays, data: {newForecastedDays}})
export const setForecastGraphCriteria = ({newForecastGraphCriteria}) => ({type:Definitions.SetForecastGraphCriteria, data: {newForecastGraphCriteria}})
export const setMetricUnits = ({metric}) => ({type:Definitions.SetMetricUnits, data: {metric}})
export const setZipCodeValid = ({zipCodeValid}) => ({type:Definitions.SetZipCodeValid, data: {zipCodeValid}})
export const setZipCodeHelperText = ({zipCodeHelperText}) => ({type:Definitions.SetZipCodeHelperText, data: {zipCodeHelperText}})
export const setFetchTime = ({fetchTime}) => ({type:Definitions.SetFetchTime, data: {fetchTime}})