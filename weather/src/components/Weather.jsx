import { Component } from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Weather = () => {
    const params = useParams()
    let City = params.city
    let [CityWeather,setCityWeather] = useState(null)
    const FetchWeather = async (City) => {
        try {
            const resolve = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+City+'&appid=5d4ae5620571d18b7b72cb9df96681ee')
            const weather = await resolve.json()
            setCityWeather(weather)
            console.log(this.state.CityWeather)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        FetchWeather(City)
    },[City])
    
        if(CityWeather !== null){
        return (
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{CityWeather.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> temp: {Math.floor(CityWeather.main.temp - 272.15)} C</Card.Subtitle>
                        <Link to={"/City"+CityWeather.name}>more details</Link>
                    </Card.Body>
                </Card>
                </Col>
        )

    }}

export default Weather