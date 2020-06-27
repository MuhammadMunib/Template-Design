import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import p1 from '../img/person_1.jpg';
import p2 from '../img/person_2.jpg';
import '../css/testimonial.css';

export default function ControlledCarousel() {
    
  
    return (
        <div className="container-fluid testi-bg">
        <div className="container testi-pos">
            <div className="row">
                <Carousel>
                    <Carousel.Item>
                        <div className="col-md-12">
                            <img className="test-img" src={p1} alt=""/>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className=" col-md-8 text text-center">
                                <p className="mb-4 testi-text">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    <p className="name">Nathan Smith</p>
                                    <span className="position">Guests</span>
                          </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="col-md-12">
                            <img className="test-img" src={p2} alt=""/>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className=" col-md-8 text text-center">
                                <p className="mb-4 testi-text">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    <p className="name">Nathan Smith</p>
                                    <span className="position">Guests</span>
                           </div>
                        </div>
                    </Carousel.Item>
                   </Carousel> 
            </div>
        </div>
    </div>
    );
  }
  
