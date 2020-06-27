import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/blog.css';
import b1 from '../img/image_1.jpg';
import b2 from '../img/image_2.jpg';
import b3 from '../img/image_3.jpg';
import b4 from '../img/image_4.jpg';


export default class Blog extends Component {
    render() {
        return (
            <div className="container-fluid blog-pos">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1 className="text-center">Recent Blog</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5"></div>
                    <div className=" borde"></div>
                </div>
                <div className="row">
                    <div className="col-md-5"></div>
                    <div className=" borde2"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div data-aos="fade-up"  className="col-12 col-md-3">
                            <div className="card card-wid" style={{width: '16rem'}}>
                            <img className="card-img-top" src={b1} alt="Card image cap" />
                            <div className="card-body">
                            <Link to="#" className="link-dec">
                            <h3 className="card-title c-head">Even the all-powerful Pointing has no control about the blind texts</h3>
                            <span className= "link2-text " to="#">Dec 26, 2018 Admin <i className="fa fa-comment"></i> 3</span>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"  className="col-md-3">
                        <div className="card card-wid" style={{width: '16rem'}}>
                        <img className="card-img-top" src={b2} alt="Card image cap" />
                        <div className="card-body">
                            <Link to="#" className="link-dec">
                            <h3 className="card-title c-head">Even the all-powerful Pointing has no control about the blind texts</h3>
                            <span className= "link2-text " to="#">Dec 26, 2018 Admin <i className="fa fa-comment"></i> 3</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"  className="col-md-3">
                    <div className="card card-wid" style={{width: '16rem'}}>
                    <img className="card-img-top" src={b3} alt="Card image cap" />
                    <div className="card-body">
                        <Link to="#" className="link-dec">
                        <h3 className="card-title c-head">Even the all-powerful Pointing has no control about the blind texts</h3>
                        <span className= "link2-text " to="#">Dec 26, 2018 Admin <i className="fa fa-comment"></i> 3</span>
                        </Link>
                    </div>
                </div>
                </div>
                <div data-aos="fade-up" className="col-md-3">
                 <div className="card card-wid" style={{width: '16rem'}}>
                    <img className="card-img-top" src={b4} alt="Card image cap" />
                    <div className="card-body">
                        <Link to="#" className="link-dec">
                        <h3 className="card-title c-head">Even the all-powerful Pointing has no control about the blind texts</h3>
                        <span className= "link2-text " to="#">Dec 26, 2018 Admin <i className="fa fa-comment"></i> 3</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
               
        )
    }
}
