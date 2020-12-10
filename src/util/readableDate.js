const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

export const readableDate = (day) => {
    const weekday = weekdays[(new Date(Date.parse(day))).getDay()]
    const month = months[(new Date(Date.parse(day))).getMonth()]
    const dateString = ((new Date(Date.parse(day))).getDate() + 1).toString()
    const date = (dateString) => {
        switch (dateString[dateString.length - 1]) {
            case "1": return `${dateString}${dateString === "11" ? "th" : "st"}`
            case "2": return `${dateString}${dateString === "11" ? "th" : "nd"}`
            case "3": return `${dateString}${dateString === "11" ? "th" : "th"}`
            default: return `${dateString}th`
        }
    }
    return `${weekday}, ${month} ${date(dateString)}`
}