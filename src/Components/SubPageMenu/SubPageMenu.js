import React from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import ForecastWeather from "../ForecastWeather/ForecastWeather";
import Button from "../Button/Button";
import styles from "./SubPageMenu.module.scss";

class SubPageMenu extends React.Component {
  state = {
    current: true,
    forecast: false,
  };

  openCurrent = () => {
    this.setState({
      current: true,
      forecast: false,
    });
  };

  openForecast = () => {
    this.setState({
      current: false,
      forecast: true,
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.buttonWrapper}>
          <div className={styles.side}></div>
          <Button
            className={this.state.current ? styles.pageOn : styles.pageOff}
            title="Current"
            onClick={this.openCurrent}
          />
          <Button
            className={this.state.forecast ? styles.pageOn : styles.pageOff}
            title="Forecast"
            onClick={this.openForecast}
          />
          <div className={styles.side}></div>
        </div>

        <div>
          {this.state.current && <CurrentWeather />}
          {this.state.forecast && <ForecastWeather />}
        </div>
      </div>
    );
  }
}

export default SubPageMenu;
