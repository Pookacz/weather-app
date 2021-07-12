import React from "react";
import { connect } from "react-redux";
import styles from './CurrentWeather.module.scss';

const CurrentWeather = (props) => {
  return (
    <>
      {props.response && (
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{props.response.location.name}</h1>
          <img
            className={styles.image}
            src={props.response.current.condition.icon}
            alt={props.response.current.condition.text}
          />
          <p className={styles.temp}>{props.response.current.temp_c} °C</p>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { response } = state;
  return { response };
};

export default connect(mapStateToProps)(CurrentWeather);
