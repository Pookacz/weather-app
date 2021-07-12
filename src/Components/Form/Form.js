import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addResponse, addError } from "../../Actions/index";
import Button from "../Button/Button";
import styles from "./Form.module.scss";

class Form extends React.Component {
  state = {
    city: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  searchWeather = () => {
    axios
      .request({
        method: "GET",
        url: "http://api.weatherapi.com/v1/forecast.json",
        params: {
          key: "a2b3e66aad24455e826231810210707",
          q: `${this.state.city}`,
        },
      })
      .then((res) => {
        this.props.addResponse(res.data);
      })
      .catch((error) => {
        console.log(error);
        this.props.addError(true);
      });
      window.scroll(0, window.innerHeight)
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          name="city"
          onChange={this.handleChange}
          autoComplete='off'
        />
        <Button
          className={styles.button}
          onClick={this.searchWeather}
          title="Search"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addResponse: (response) => dispatch(addResponse(response)),
    addError: (error) => dispatch(addError(error)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
