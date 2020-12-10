export const InitialState = {
    weatherAPI: {
        key: "e69abe10a39944c19e820458200912",
        url: "http://api.weatherapi.com/v1/",
        forecast: "forecast.json"
    },
    metric: true,
    forecastedDays: 3,
    zipCode: "55409",
    forecastGraphCriteria: "feelslike_c",
    weatherData: {},
    zipCodeValid: true,
    zipCodeHelperText: "",
    fetchTime: new Date(),
}