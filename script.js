/* let time = ((new Date() / 1000) / 60 / 60 /24).toFixed(0)
console.log(
    time
); */
let future = "2023-06-23 18:10"
let time = Date.parse(future) - new Date().getTime()
let day = Math.floor(time / (1000 * 60 * 60 * 24))
let hours = Math.floor((time / (1000 * 60 * 60)) % 24)
let minutes = Math.floor((time / (1000 * 60)) % 60)
let seconds = Math.floor((time / (1000)) % 60)
setInterval(() => {
let time = Date.parse(future) - new Date().getTime()
let day = Math.floor(time / (1000 * 60 * 60 * 24))
let hours = Math.floor((time / (1000 * 60 * 60)) % 24)
let minutes = Math.floor((time / (1000 * 60)) % 60)
let seconds = Math.floor((time / (1000)) % 60)
if (day <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    alert("Wake UP!")
} else (
    alert("sleep on")
)}, 1000)
let dayPart = new Date().getHours()
if (dayPart >=0 && dayPart <= 6) {
    alert("good morning!")
} else if (dayPart >= 7 && dayPart <=12) {
    alert("Good day!")
} else if (dayPart >= 13 && dayPart <= 18) {
    alert("Good evening!")
} else if (dayPart >= 19 && dayPart <=24) {
    alert("Good night!")
}
