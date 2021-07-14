import React from "react";
import { connect } from "react-redux";
import styles from "./ForecastWeather.module.scss";

const ForecastWeather = (props) => {
  return (
    <>
      {props.response && (
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{props.response.location.name}</h1>
          {props.response.forecast.forecastday.map((item, index) => (
            <div key={index}>
              <div className={styles.secondWrapper}>
                <div className={styles.thirdWrapper}>
                  <p className={styles.thirdWrapper_p}>{item.date}</p>
                  <img
                    className={styles.thirdWrapper_img}
                    src={item.day.condition.icon}
                    alt={item.day.condition.text}
                  />
                </div>
                <div className={styles.fourthWrapper}>
                  <p>Max temperature: {item.day.maxtemp_c} °C</p>
                  <p>Min temperature: {item.day.mintemp_c} °C</p>
                  <p>Avg temperature: {item.day.avgtemp_c} °C</p>
                </div>
              </div>
              <div className={styles.fifthWrapper}>
                {item.hour.map((item, index) => (
                  <div key={index} className={styles.sixthWrapper}>
                    <img src={item.condition.icon} alt={item.condition.text} />
                    <p>{item.time.split(" ")[1]}</p>
                    <p>{item.temp_c} °C</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { response } = state;
  return { response };
};

export default connect(mapStateToProps)(ForecastWeather);
