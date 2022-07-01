import { Component } from "react";
import Weather from "./Weather";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const City = () =>{
const params = useParams()
let City = params.city
let [CityWeather,setCityWeather] = useState(null)

    const FetchWeather = async (city) => {
        try {
            const resolve = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=5d4ae5620571d18b7b72cb9df96681ee')
            const weather = await resolve.json()
           setCityWeather(weather)
            
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
    FetchWeather(City)
},[City])
useEffect (() =>{
    console.log(CityWeather)
})
    if(CityWeather !== null){
        return (
            <div>
            <h2>{CityWeather.name}</h2>
            <div style={{fontSize:'20pt'}}>{Math.floor(CityWeather.main.temp - 272.15)}</div>
            <div>Wind speed: {CityWeather.wind.speed}</div>
            <div>humidity: {CityWeather.main.humidity}</div>
            <div>cloudiness: {CityWeather.clouds.all}%</div>
            <div>Current sky: {CityWeather.weather[0].main}</div>
            </div>
        )}
    
}
export default City