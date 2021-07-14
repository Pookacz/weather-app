import React, { useState, useEffect } from "react";
import SubPageMenu from "../SubPageMenu/SubPageMenu";
import Error from "../Error/Error";
import { connect } from "react-redux";
import { addError, addResponse, addResponseStatus } from "../../Actions/index";

const SubPages = (props) => {
  const [scroll, setScroll] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setScroll(window.scroll(0, window.innerHeight));
    }, 150);
  });

  return (
    <>
      {scroll}
      {props.responseStatus && !props.error && <SubPageMenu />}
      {props.error && <Error />}
    </>
  );
};

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
