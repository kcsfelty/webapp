import {Definitions} from "./Definitions";

export const Reducer = (state, action) => {
    switch (action.type) {
        case Definitions.UpdateWeatherData:
            console.log(action.type)
            return { ...state, weatherData: action.data.newWeatherData }

        case Definitions.SetZipCode:
            console.log(action.type)
            return { ...state, zipCode:action.data.newZipCode}

        case Definitions.SetForecastedDays:
            console.log(action.type)
            return { ...state, forecastedDays:action.data.newForecastedDays}

        case Definitions.SetForecastGraphCriteria:
            console.log(action.type, action.data)
            return { ...state, forecastGraphCriteria:action.data.newForecastGraphCriteria}

        case Definitions.SetMetricUnits:
            console.log(action.type, action.data)
            return { ...state, metric:action.data.metric}

        case Definitions.SetZipCodeValid:
            console.log(action.type, action.data)
            return { ...state, zipCodeValid:action.data.zipCodeValid}

        case Definitions.SetZipCodeHelperText:
            console.log(action.type, action.data)
            return { ...state, zipCodeHelperText:action.data.zipCodeHelperText}

        case Definitions.SetFetchTime:
            console.log(action.type, action.data)
            return { ...state, fetchTime:action.data.fetchTime}

        default:
            return { ...state }
    }
}