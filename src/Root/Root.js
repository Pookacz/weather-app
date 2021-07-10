import React from 'react';
import { Provider } from "react-redux";
import Store from "../Store/index";
import Form from '../Form/Form'

class Root extends React.Component{

    render(){

        return(
            <Provider store={Store}>
                <div>
                    <Form />
                </div>
            </Provider>
        )
    }
}
export default Root;