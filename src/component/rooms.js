import React, { Component } from 'react';

import r1 from '../img/room-1.jpg';
import r2 from '../img/room-2.jpg';
import r3 from '../img/room-3.jpg';
import r4 from '../img/room-4.jpg';
import r5 from '../img/room-5.jpg';
import r6 from '../img/room-6.jpg';
import { Link } from 'react-router-dom';
import '../css/rooms.css';


export default class Rooms extends Component {


   


    render() {
        return (
            
            <div className="container-fluid bg-ful">
                <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h1  className="text-center">Our Rooms</h1>
                </div>
                </div>
                <div className="row">
                <div className=" col-12 col-md-5"></div>
                <div className=" borde"></div>
                </div>
                <div className="row">
                <div className="col-12 col-md-5"></div>
                <div  className=" borde2"></div>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div data-aos="fade-up" className="card" style={{width: '22rem'}}>
                        <img className="card-img-top" src={r1} alt="Card image cap" />
                        <div class="overlay">
                            <Link to="#" class="icon" title="Search">
                            <i class="fa fa-search"></i>
                            </Link>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Suite Room</h3>
                            <h4><span className="border-text">$120.00</span> <span className="s-text">per night</span></h4>
                            <hr/>
                            <Link className= "link-text " to="#">
                            View Room Details <i className="fa fa-arrow-right"></i> </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div data-aos="fade-up" className="card" style={{width: '22rem'}}>
                    <img className="card-img-top" src={r2} alt="Card image cap" />
                    <div class="overlay">
                        <Link to="#" class="icon" title="Search">
                        <i class="fa fa-search"></i>
                        </Link>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Family Room</h3>
                        <h4><span className="border-text">$120.00</span> <span className="s-text">per night</span></h4>
                        <hr/>
                        <Link className= "link-text " to="#">
                        View Room Details <i className="fa fa-arrow-right"></i> </Link>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div data-aos="fade-up" className="card" style={{width: '22rem'}}>
                <img className="card-img-top" src={r3} alt="Card image cap" />
                <div class="overlay">
                    <Link to="#" class="icon" title="Search">
                    <i class="fa fa-search"></i>
                    </Link>
                </div>
                <div className="card-body">
                    <h3 className="card-title">Deluxe Room</h3>
                    <h4><span className="border-text">$120.00</span> <span className="s-text">per night</span></h4>
                    <hr/>
                    <Link className= "link-text " to="#">
                    View Room Details <i className="fa fa-arrow-right"></i> </Link>
                </div>
                </div>
            </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                <div data-aos="fade-up" className="card" style={{width: '22rem'}}>
                <img className="card-img-top" src={r4} alt="Card image cap" />
                <div class="overlay">
                    <Link to="#" class="icon" title="Search">
                    <i class="fa fa-search"></i>
                    </Link>
                </div>
                <div className="card-body">
                    <h3 className="card-title">Classic Room</h3>
                    <h4><span className="border-text">$120.00</span> <span className="s-text">per night</span></h4>
                    <hr/>
                    <Link className= "link-text " to="#">
                    View Room Details <i className="fa fa-arrow-right"></i> </Link>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div data-aos="fade-up" className="card" style={{width: '22rem'}}>
                <img className="card-img-top" src={r5} alt="Card image cap" />
                <div class="overlay">
                <Link to="#" class="icon" title="Search">
                <i class="fa fa-search"></i>
                </Link>
                </div>
                <div className="card-body">
                <h3 className="card-title">Superior Room</h3>
                <h4><span className="border-text">$120.00</span> <span className="s-text">per night</span></h4>
                <hr/>
                <Link className= "link-text " to="#">
                View Room Details <i className="fa fa-arrow-right"></i> </Link>
                </div>
            </div>
            </div>
            <div className="col-md-4">
                <div data-aos="fade-up" className="card" style={{width: '22rem'}}>
                <img className="card-img-top" src={r6} alt="Card image cap" />
                <div class="overlay">
                <Link to="#" class="icon" title="Search">
                <i class="fa fa-search"></i>
                </Link>
                </div>
                <div className="card-body">
                <h3 className="card-title">Luxury Room</h3>
                <h4><span className="border-text">$120.00</span> <span className="s-text">per night</span></h4>
                <hr/>
                <Link className= "link-text " to="#">
                View Room Details <i className="fa fa-arrow-right"></i> </Link>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>
        )
    }
}
