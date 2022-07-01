import { Component } from "react";
import Weather from "./Weather";


class City extends Component {
    FetchCity = async () => {
        try {
            const resolve = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + this.props.city + '&limit=5&appid=6d9fe25d65ac8205827fa1806cbe61d9')
            const city = await resolve.json()
            console.log(city)
            return city
        }
        catch (error) {
            console.log(error)
        }
    }
    componentDidMount = () => {
        this.City = this.FetchCity()
    }

    render() {
        return (
            <Weather name={this.City} />
        )
    }
}
export default City