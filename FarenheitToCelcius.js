function farToCel(tempF) {
    let celcius = (5 / 9 * (tempF - 32))
    console.log(`${tempF}°F is ${celcius.toFixed(2)}°C`)
}
farToCel(100)