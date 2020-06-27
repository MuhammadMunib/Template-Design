import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-black">
            <div className="container pos-tp">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <h1 className="f-head">Deluxe Hotel</h1>
                        <p className="f-text">Far far away, behind the word mountains, 
                            far from the countries Vokalia and Consonantia, 
                            there live the blind texts.</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <h1 className="f-head">Useful Links</h1>
                        <ul className="list-items">
                            <li>Blog</li>
                            <li>Rooms</li>
                            <li>Amenties</li>
                            <li>Gift Card</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3">
                        <h1 className="f-head">Privacy</h1>
                        <ul className="list-items">
                            <li>Career</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3">
                        <h1 className="f-head">Have a Questions?</h1>
                        <ul className="list-items">
                            <li><i className="fa fa-map-marker icon-font"></i>203 Fake St. Mountain View, San &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Francisco, California, USA</li>
                            <li className="item-clr"><i className="fa fa-phone icon-font"></i>+2 392 3929 210</li>
                            <li className="item-clr"><i className="fa fa-envelope icon-font"></i>info@yourdomain.com</li>
                        </ul>
                    </div>
                    </div> 
                    <div className="row">
                        <div className="col-12 col-md-3">
                        <Link data-aos="fade-up" to="#" className="back-icon" ><span ><i className="fa fa-facebook "></i></span></Link>
                        <Link data-aos="fade-up" to="#" className="back-icon"><span ><i className="fa fa-twitter "></i></span></Link>
                        <Link data-aos="fade-up" to="#" className="back-icon"><span><i className="fa fa-instagram "></i></span></Link>

                        </div>
                    </div>

                
              </div>
            </div>
        )
    }
}
