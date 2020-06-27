import React, { Component } from 'react';
import '../css/video.css';
import poster from '../img/video.jpg'
import { Link } from 'react-router-dom';

export default class video extends Component {

    constructor(props) {
        super(props);
        
      }
      
    render() {
        return (
            <div className="container pos-video ">
                <div className="row ">
                    <div className=" col-12 col-md-5 poster">
                    <Link to="https://youtube.com"><i className="fa fa-play play-icon"></i></Link>        
                    </div>

                    <div className="col-md-1"></div>
                    <div className=" col-12 col-md-6 text-pos">
                        <h3 className="h-1">Welcome to Deluxe Hotel</h3>
                        <h1 data-aos="fade" className="h-2">Welcome To Our Hotel</h1>
                        <p className="p-text">On her way she met a copy. The copy warned the Little Blind Text, that where it came 
                            from it would have been rewritten a thousand times and everything that was left from its origin would be the word 
                            "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy
                             said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, 
                            made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                            <br/><br/>
                            When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown 
                            Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful 
                            a rethoric question ran over her cheek, then she continued her way.</p>
                            <Link  to="#"><span data-aos="fade-up" className="s-icon-f"><i class="fa fa-facebook-f"></i></span></Link>
                            <Link to="#"><span  data-aos="fade-up" className="s-icon-t"><i class="fa fa-twitter"></i></span></Link>
                            <span  data-aos="fade-up"className="s-icon-g"><i class="fa fa-google-plus"></i></span>
                            <span data-aos="fade-up" className="s-icon-i"><i class="fa fa-instagram"></i></span>
                    </div>
                </div>   
            </div>
        )
    }
}
