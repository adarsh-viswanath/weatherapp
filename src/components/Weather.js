import axios from 'axios';
import { useState } from 'react';

const Weather = () => {
    const [weather, setWeather] = useState("")
    
    const apiCall = async (e) => {
        e.preventDefault();
        console.log(e);
        const city = e.target.elements.location.value;
        const icon = "aaa";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=997ea79e1c9575bd4f087cf90e68205d&units=metric`
        const iconurl = `http://openweathermap.org/img/wn/${icon}@2x.png`
        const request = axios.get(url);
        const response = await request;
        console.log(response.data.name);
        console.log(response.data.main.temp);
        setWeather({
            icon: response.data.weather[0].icon,
            city: response.data.name,
            temp: response.data.main.temp,
            hum: response.data.main.humidity,
            lati: response.data.coord.lon,
            longi: response.data.coord.lat
        })
    }

    const Weatherdetails = () => {
        const imgurl = `http://openweathermap.org/img/wn/${weather.icon}.png`
        return(
            <div>
                <div><h1>Weather:  <img src={imgurl} /></h1></div>
                <h1>City: {weather.city}</h1>
                <h1>Temperature: {weather.temp} &#8451;</h1>
                <h1>Latitude: {weather.lati}</h1>
                <h1>Longitude: {weather.longi}</h1>
                <h1>Humidity: {weather.hum} &#37;</h1>
            </div>
        )
    }

        return(
            <div>
                <form onSubmit={apiCall}>
                    <input type="text" placeholder="Enter a city name" name="location"></input>
                    <button>Search</button>
                </form>
                <Weatherdetails/>
            </div>
        )
}
export default Weather;
