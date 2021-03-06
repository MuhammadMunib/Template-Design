import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
export default class DatePick extends React.Component {
  state = {
    startDate: new Date(),
    value : "Check-out date"
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  onFocucInput () {

    this.setState({
        value: this.state.startDate
    })




  }


 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        value={this.state.value}
        onFocus={this.onFocucInput.bind(this)}
      />
    );
  }
}