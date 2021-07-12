import React from 'react';
import { connect } from 'react-redux';
import styles from './ForecastWeather.module.scss'

const ForecastWeather = (props) =>{

    return(
        <>
            {props.response &&
                <div className={styles.wrapper}>
                    <h1>{props.response.location.name}</h1>
                    {props.response.forecast.forecastday.map((item, index) => (
                        <div key={index}>
                            <p>{item.date}</p>
                            <p>max temp {item.day.maxtemp_c} °C</p>
                            <p>min temp {item.day.mintemp_c} °C</p>
                            <p>avg temp {item.day.avgtemp_c} °C</p>
                            <img src={item.day.condition.icon} alt={item.day.condition.text}/>
                            {item.hour.map((item, index)=>(
                                <div key={index} className={styles.hours}>
                                    <p>{item.time.split(' ')[1]}</p>
                                    <img src={item.condition.icon} alt={item.condition.text}/>
                                    <p>{item.temp_c} °C</p>
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