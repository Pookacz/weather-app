import React from "react";
import { Provider } from "react-redux";
import Store from "../Store/index";
import Form from "../Components/Form/Form";
import SubPages from "../Components/SubPages/SubPages";

class Root extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Form />
          <SubPages />
        </div>
      </Provider>
    );
  }
}
export default Root;
