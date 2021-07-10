import React from 'react';
import { connect } from 'react-redux';

const CurrentWeather = (props) => {

    return(
        <div>
            {props.response && 
            <div>
                <h1>{props.response.location.name}</h1>
                <p>{props.response.current.temp_c}</p>
                <img src={props.response.current.condition.icon} alt={props.response.current.condition.text}/>
            </div>}

        </div>
    )
}

const mapStateToProps = (state) => {
    const { response } = state;
    return { response };
}

export default connect(mapStateToProps)(CurrentWeather);