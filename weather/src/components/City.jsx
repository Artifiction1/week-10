import { Component } from "react";
import Weather from "./Weather";


class City extends Component {
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
        return (
            <Weather name={this.City} />
        )
    }
}
export default City