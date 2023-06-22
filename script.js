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
document.write(`<center>${day}d ${hours}h ${minutes}m ${seconds}s</center>`)
}, 1000)
if (day === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    alert("Wake UP!")
} else (
    alert("sleep on")
)