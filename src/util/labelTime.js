export const labelTime = (time, showMinutes = true) => {
    const timestamp = (new Date(time * 1000))
    const hours = timestamp.getHours()
    const minutes = showMinutes ? `:${((timestamp.getMinutes()).toString()).padStart(2, "0")}` : ""
    const test = Date.UTC(2001, 0, 1)
    return timestamp.getHours() < 12 ? `${hours}${minutes} AM` : timestamp.getHours() === 12 ? `${hours}${minutes} PM` : `${hours - 12}${minutes} PM`
}