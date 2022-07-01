import { Component } from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";


class Weather extends Component {
    state = {
        CityWeather: null
    }
    FetchWeather = async () => {
        try {
            const resolve = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.props.city+'&appid=5d4ae5620571d18b7b72cb9df96681ee')
            const weather = await resolve.json()
            console.log(weather)
            console.log(resolve)
            await this.setState({CityWeather: weather})
            console.log(this.state.CityWeather)
        }
        catch (error) {
            console.log(error)
        }
    }
    componentDidMount() {
        this.FetchWeather()
    }
    render() {
        if(this.state.CityWeather !== null){
        return (
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.state.CityWeather.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> temp: {Math.floor(this.state.CityWeather.main.temp - 272.15)} C</Card.Subtitle>
                        <Link to={"/Dayly"+"?lat="+this.state.CityWeather.coord.lat + "&long="+this.state.CityWeather.coord.lon}>more details</Link>
                    </Card.Body>
                </Card>
                </Col>
        )

    }}}

export default Weather