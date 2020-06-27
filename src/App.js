import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Header from './component/navbar'
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
  }
  
  render() {
    return (
      <Router>
        <main>
          <Header></Header>
          
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contactus" exact component={Home} />
            <Route path="/menu" exact component={Home} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
