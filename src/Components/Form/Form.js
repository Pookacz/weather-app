import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addResponse } from "../../Actions/index";
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
        window.scroll(0, window.innerHeight)
      })
      .catch((error) => {
        console.log(error);
      });
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
  };
};

export default connect(null, mapDispatchToProps)(Form);
