import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/insta.css';
import FsLightbox from 'fslightbox-react';
import in1 from '../img/insta-1.jpg';
import in2 from '../img/insta-2.jpg';
import in3 from '../img/insta-3.jpg';
import in4 from '../img/insta-4.jpg';
import in5 from '../img/insta-5.jpg';

function Instaslider() {
// if toggler is updated when lightbox is closed it will open it
// if toggler is updated when lightbox is opened it will close it
const [toggler, setToggler] = useState(false);

return (
            <>
            <div className="container-fluid">
                <div className="row">
                <div id="images">
    <img src={in1} className="col-xs-12" alt="image1" />
    <img src={in1} className="col-xs-12" alt="image1" />
    <img src={in1} className="col-xs-12" alt="image1" />
    <img src={in1} className="col-xs-12" alt="image1" />
    <img src={in1} className="col-xs-12" alt="image1" />


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
            </>
            );
            }

export default Instaslider;