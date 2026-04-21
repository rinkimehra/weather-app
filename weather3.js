async function getWeather(params) {
    const city = document.getElementById("city").value;
    if (city === "") {
        document.getElementById("weatherResult").innerHTML = "Please enter a city name"
        return
    }
    const apiKey = "3a96c4e2c9996af74841c6d49ceec795";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    document.getElementById("weatherResult").innerHTML = "Loading....."

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod == "404") {
            document.getElementById("weatherResult").innerHTML = "City not found";
            return;
        }

        const temp = data.main.temp;
        const weather = data.weather[0].main;

        document.getElementById("weatherResult").innerHTML  = `
        <p>Temperature: ${temp}°C</p>
        <p>Condition: ${weather}</p>
    `;
    }catch (error) {
        document.getElementById("weatherResult").innerHTML = "Something went wrong";
        console.log(error)
    } 
    
}