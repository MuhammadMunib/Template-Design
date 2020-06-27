import React, { Component } from 'react';
import first from '../img/hotel.png';
import second from '../img/food.png';
import third from '../img/spa.png';
import four from '../img/car.png';
import '../css/service.css';


export default class Serve extends Component {
    render() {
        return (
            <div className="container">
    
                <div class="row">
                <div data-aos="fade-up"  data-aos-duration="1500" class="col-md-3">
                    <div className="ico-list">
                        <div className="bg-clr align-items-center justify-content-center">
                            <img src={first} alt="" />
                        </div>
                        <h1>25/7 Front Desk</h1>
                        <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                    
                </div>
                <div data-aos="fade-up" data-aos-duration="1800" class="col-md-3">
                    <div className="ico-list">
                        <div className="bg-clr align-items-center justify-content-center">
                            <img src={second} alt="" />
                        </div>
                        <h1>Restaurant Bar</h1>
                        <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                    
                </div>
                <div data-aos="fade-up"  data-aos-duration="2100" class="col-md-3">
                    <div className="ico-list">
                        <div className="bg-clr align-items-center justify-content-center">
                            <img src={four} alt="" />
                        </div>
                        <h1>Transfer Services</h1>
                        <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                    
                </div>
                <div data-aos="fade-up"  data-aos-duration="2500" class="col-md-3">
                    <div className="ico-list">
                        <div className="bg-clr align-items-center justify-content-center">
                            <img src={third} alt="" />
                        </div>
                        <h1>Spa Suites</h1>
                        <p>A small river named Duden flows by their place and supplies.</p>
                    </div>
                    
                </div>
            </div>
        </div>
                
        
        )
    }
}
