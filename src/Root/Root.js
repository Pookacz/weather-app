import React from 'react';
import { Provider } from "react-redux";
import CurrentWeather from '../Components/CurrentWeather/CurrentWeather';
import ForecastWeather from '../Components/ForecastWeather/ForecastWeather';
import Store from "../Store/index";
import Form from '../Components/Form/Form';
import Button from '../Components/Button/Button';


class Root extends React.Component{
    state = {
        current: true,
        forecast: false,
    }

    openCurrent = () =>{
        this.setState({
            current: true,
            forecast: false,
        });
    };

    openForecast = () =>{
        this.setState({
            current: false,
            forecast: true,
        });
    };

    render(){

        return(
            <Provider store={Store}>
                <div>
                    <Form />
                    <Button title='Current' onClick={this.openCurrent}/>
                    <Button title='Forecast' onClick={this.openForecast}/>
                    {this.state.current && <CurrentWeather />}
                    {this.state.forecast && <ForecastWeather />}
                </div>
            </Provider>
        )
    }
}
export default Root;