import React, { Component } from 'react';
import CountUp from 'react-countup';
import '../css/counter.css';
export default class Counter extends Component {
    render() {
        return (
           <div className="container-fluid count-pos">
               <div className="container">
                   <div className="row">
                       <div className="col-12 col-md-3">
                           <div className="">
                               <h3><CountUp end={5000} duration={20} /></h3><br/>
                               <h4>Happy Guest</h4>
                           </div>
                       </div>
                       <div className="col-12 col-md-3">
                           <div className="">
                               <h3><CountUp end={3000} duration={15} /></h3><br/>
                               <h4>Rooms</h4>
                           </div>
                       </div>
                       <div className="col-12 col-md-3">
                           <div className="">
                               <h3><CountUp end={1000} duration={10} /></h3><br/>
                               <h4>Staffs</h4>
                           </div>
                       </div>
                       <div className="col-12 col-md-3">
                           <div className="">
                               <h3><CountUp end={100} duration={5} /></h3><br/>
                               <h4>Destination</h4>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}