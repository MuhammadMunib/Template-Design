import React, { Component } from 'react';
import '../css/datetime.css';
import DatePick from '../component/datepicker.js';

export default class DateTime extends Component {
    render() {
        return (

                <div className="container">
                    <div class="row pos-top">
                        <div className="col-md-3 col-md-offset-1 bg-da">
                            <label className=" label-text" for="#">Check-in Date</label> 
                            <DatePick className="date-pic"></DatePick>
                        </div>
                        <div className="col-md-3 bg-da sm-desi" style={{marginLeft:'20px'}}>
                            <label className=" col-12  label-text" for="#">Check-out Date</label> 
                            <DatePick className="date-pic"></DatePick>
                        </div>
                        <div className="col-md  bg-da sm-desi" style={{marginLeft:'20px'}}>
                            <label for="#" className="col-12 label-text">Room</label>
                            <select className="optn-size">
                                <option value="">Suite</option>
                                <option value="">Family</option>
                                <option value="">Deluxe</option>
                                <option value="">Classic</option>
                                <option value="">Superior</option>
                                <option value="">Luxury</option>
                            </select>
                        </div>
                        <div className="col-md bg-da sm-desi"style={{marginLeft:'20px'}}>
                            <label for="#" className="col-12 label-text">Customer</label>
                            <select className="optn-size">
                                <option value="" >1 Adult</option>
                                <option value="" >1 Adult</option>
                                <option value="" >1 Adult</option>
                                <option value="" >1 Adult</option>
                            </select>
                        </div>
                        <div className="col-md bg-btn" style={{marginLeft:'20px'}}>
                            <button className="btn-back">Check Availability</button>
                        </div>
                    </div>
                </div>

        )
    }
}
