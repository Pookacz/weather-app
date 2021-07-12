import React from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import ForecastWeather from "../ForecastWeather/ForecastWeather";
import Button from "../Button/Button";
import styles from "./SubPages.module.scss";
import { connect } from "react-redux";
import { addError, addResponse, addResponseStatus } from "../../Actions/index";

class SubPages extends React.Component {
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

  tryAgain = () => {
    this.props.addResponse('');
    window.scroll(0, 0);

    setTimeout(()=>{  
      this.props.addError(false);
      this.props.addResponseStatus(false);
    }, 400)
  };

  render() {
    return (
      <>
        {this.props.responseStatus && !this.props.error && (
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
        )}
        {this.props.error && (
          <div className={styles.wrapperError}>
            <h1>City not found!</h1>
            <Button
              className={styles.errorButton}
              title="Try again"
              onClick={this.tryAgain}
            />
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { error, responseStatus } = state;
  return { error, responseStatus };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addError: (error) => dispatch(addError(error)),
    addResponse: (response) => dispatch(addResponse(response)),
    addResponseStatus: (status) => dispatch(addResponseStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubPages);
