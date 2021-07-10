import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { addResponse } from '../Actions/index';

class Form extends React.Component {
  state = {
    city: "",
  };

  
  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value,
        });
    };
 
  searchWeather = () =>{
    axios.request({
        method: 'GET',
        url: 'http://api.weatherapi.com/v1/forecast.json',
        params: {
            key: 'a2b3e66aad24455e826231810210707',
            q: `${this.state.city}`,
        }
    }).then((res) => {
        console.log(res.data)
        this.props.addResponse(res.data)
    }).catch((error)=>{
        console.log(error)
    })
  }



  render() {



    return( 
    <div>
        <input name='city' onChange={this.handleChange}/>
        <button onClick={this.searchWeather}>Search</button>
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
