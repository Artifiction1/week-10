import { Component } from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


class Weather extends Component {

    FetchWeather = async () => {
        try {
            const resolve = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + this.props.name.lat + '&lon=' + this.props.name.lat + '&appid=6d9fe25d65ac8205827fa1806cbe61d9')
            const weather = await resolve.json()
            console.log(weather)
            console.log(resolve)
            return weather
        }
        catch (error) {
            console.log(error)
        }
    }
    componentDidMount() {
        this.CityWeather = this.FetchWeather()
    }
    render() {
        return (
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.CityWeather.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.CityWeather.main.temp}</Card.Subtitle>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card></Col>
        )

    }
}
export default Weather