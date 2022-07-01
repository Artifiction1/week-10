import { Component } from "react";
import Weather from "./Weather";
import { useParams, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Dayly = () =>{
const [params] = useSearchParams()
const lat = params.get("lat")
const lon = params.get("long")
console.log(params)
let [CityWeather,setCityWeather] = useState([])

    const FetchWeather = async (lat,lon) => {
        try {
            const resolve = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid=5d4ae5620571d18b7b72cb9df96681ee')
            const weather = await resolve.json()
           setCityWeather(weather)
            
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
    FetchWeather(lat,lon)
},[lat,lon])

        return (
            
            <div>
            <h2>{CityWeather.name}</h2>
            {CityWeather.list&& CityWeather.list.length > 0 &&CityWeather.list.map(day =>{return (<div>
            <div style={{fontSize:'20pt'}}>{Math.floor(day.main.temp - 272.15)}</div>
            <div>Wind speed: {day.wind.speed}</div>
            <div>humidity: {day.main.humidity}</div>
            <div>cloudiness: {day.clouds.all}%</div>
            <div>Current sky: {day.weather[0].main}</div></div>)})}
            </div>
        )}
    
export default Dayly

