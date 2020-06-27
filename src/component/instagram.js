import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/instagram.css';
import FsLightbox from 'fslightbox-react';
import in7 from '../img/insta-7.jpg';
import in2 from '../img/insta-2.jpg';
import in3 from '../img/insta-3.jpg';
import in4 from '../img/insta-4.jpg';
import in5 from '../img/insta-5.jpg';
import in6 from '../img/insta-6.jpg';


export default function Instagram() {

    
    const [toggler, setToggler] = useState(false);
    
        
        return (
            <div>
                <div className="container-fluid">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <h1 className="text-center">Instagram</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5"></div>
                <div className="borde"></div>
            </div>
            <div className="row">
                <div className="col-md-5"></div>
                <div className=" borde2"></div>
            </div>
            </div>
            <div className="container-fluid">
                <div className="row img-pos">
                    <div data-aos="fade-up"  className=" col-12 col-md-2 im" >
                        <img className="insta-img" src={in7} alt=""/>
                        <div className="overlay2" onClick={() => setToggler(!toggler)}>
                                <Link to="#" className="icon2" >
                                <i className="fa fa-instagram"></i>
                                </Link>
                            </div>
                    </div>
                    <div data-aos="fade-up"  className="col-12 col-md-2 im">
                        <img className="insta-img" src={in2} alt="" />
                        <div className="overlay2" onClick={() => setToggler(!toggler)}>
                                <Link to="#" className="icon2" >
                                <i className="fa fa-instagram"></i>
                                </Link>
                            </div>
                    </div>
                    <div data-aos="fade-up" className="col-12 col-md-2 im">
                        <img className="insta-img" src={in3} alt=""/>
                        <div className="overlay2" onClick={() => setToggler(!toggler)}>
                                <Link to="#" className="icon2" >
                                <i className="fa fa-instagram"></i>
                                </Link>
                            </div>
                    </div>
                    <div data-aos="fade-up"  className="col-12 col-md-2 im">
                        <img className="insta-img" src={in4} alt="" />
                        <div className="overlay2" onClick={() => setToggler(!toggler)}>
                                <Link to="#" className="icon2" >
                                <i className="fa fa-instagram"></i>
                                </Link>
                            </div>
                    </div>
                    <div data-aos="fade-up"  className="col-12 col-md-2 im">
                        <img className="insta-img" src={in5} alt="" />
                        <div className="overlay2" onClick={() => setToggler(!toggler)}>
                                <Link to="#" className="icon2" >
                                <i className="fa fa-instagram"></i>
                                </Link>
                            </div>
                    </div>
                    <div data-aos="fade-up"   className="col-12 col-md-2 im">
                        <img className="insta-img" src={in6} alt="" />
                        <div className="overlay2" onClick={() => setToggler(!toggler)}>
                                <Link to="#" className="icon2" >
                                <i className="fa fa-instagram"></i>
                                </Link>
                            </div>
                    </div>
                    
                
            </div>
            <FsLightbox
            toggler={toggler}
            sources={
                [
            'img/insta-1.jpg',
            'img/insta-2.jpg',
            'img/insta-3.jpg',
            'img/insta-4.jpg',
            'img/insta-5.jpg',
            ]
        }
            />
            </div>
            </div>
        )
    }
