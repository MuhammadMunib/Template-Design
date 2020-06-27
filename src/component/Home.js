import React, { Component } from 'react';
import Slider from '../component/slider';
import DateTime from '../component/datetime';
import Video from '../component/video';
import Serve from '../component/services';
import Rooms from '../component/rooms.js';
import Counter from '../component/counter.js';
import Testimonial from '../component/testimonial.js';
import Blog from '../component/blog.js';
import Instagram from '../component/instagram.js';
import Footer from '../component/footer.js';
import Instaslider from '../component/intstaslider.js'
 

export default class Home extends Component {
    constructor(props) {
        super(props);
       
       
          }
            
        
    render() {
      
        return (
            <div>
            <Slider></Slider>
            <DateTime></DateTime>
            <Video></Video>   
            <Serve></Serve>    
            <Rooms></Rooms>
            <Counter></Counter>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Instagram></Instagram>
           <Footer></Footer>
            </div>
        )
    }
}
