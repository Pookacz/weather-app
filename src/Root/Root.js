import React from 'react';
import { Provider } from "react-redux";
import CurrentWeather from '../Components/CurrentWeather/CurrentWeather';
import Store from "../Store/index";
import Form from '../Components/Form/Form'

class Root extends React.Component{

    render(){

        return(
            <Provider store={Store}>
                <div>
                    <Form />
                    <CurrentWeather />
                </div>
            </Provider>
        )
    }
}
export default Root;