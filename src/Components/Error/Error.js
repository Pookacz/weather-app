import React from "react";
import styles from "./Error.module.scss";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { addError, addResponse, addResponseStatus } from "../../Actions/index";

class Error extends React.Component {
  tryAgain = () => {
    this.props.addResponse("");
    window.scroll(0, 0);

    setTimeout(() => {
      this.props.addError(false);
      this.props.addResponseStatus(false);
    }, 400);
  };

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <h1>City not found!</h1>
          <Button
            className={styles.button}
            title="Try again"
            onClick={this.tryAgain}
          />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Error);
