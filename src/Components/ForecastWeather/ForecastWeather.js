import React from 'react';
import { connect } from 'react-redux';

const ForecastWeather = (props) =>{

    return(
        <>
            {props.response &&
                <div>
                    <h1>{props.response.location.name}</h1>
                    {props.response.forecast.forecastday.map((item, index) => (
                        <div key={index}>
                            <p>{item.date}</p>
                            <p>max temp {item.day.maxtemp_c}</p>
                            <p>min temp {item.day.mintemp_c}</p>
                            <p>avg temp {item.day.avgtemp_c}</p>
                            <img src={item.day.condition.icon} alt={item.day.condition.text}/>
                            {item.hour.map((item, index)=>(
                                <div key={index}>
                                    <img src={item.condition.icon} alt={item.condition.text}/>
                                    <p>{item.time.split(' ')[1]}</p>
                                    <p>{item.temp_c}</p>
                                </div>    
                            ))}
                        </div>

                    ))}
                </div>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    const { response } = state;
    return { response };
}

export default connect(mapStateToProps)(ForecastWeather);