import React from 'react';

import './Services.css';

import Aos from 'aos';

import "aos/dist/aos.css";

import { useEffect } from 'react';

const Services = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <div className='services-main'>
            <div className='services'>
                <div data-aos="fade-right" className='ser-title'>
                    <div className='ser-inner'>
                        <span className='text'>
                            WHAT I DO
                        </span>
                        <span className='line'>
                        </span>
                    </div>
                    <h2 className='services-name'>
                        My Services
                    </h2>
                </div>
                <div className='services-body'>
                    <div data-aos="fade-up" className="one">
                        <div className="menu-icon">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1654753574/node-js_1_vtgxg2.png" className="image-explore" alt="icon" />
                        </div>
                        <div className="menu-title">
                            Project Design
                        </div>
                        <div className="menu-desc">
                            I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth.
                        </div>
                        <div className='bottem-line'>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className="one">
                        <div className="menu-iconn">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655189267/f9ebf16d-72c7-4711-841a-e8cc4f01a1b4_adr7xk.jpg" className="image-explore" alt="icon" />
                        </div>
                        <div className="menu-title">
                        Develop and Design Rest APIs
                        </div>
                        <div className="menu-desc">
                        I use various technologies to develop backend like JavaScript, TypeScript and Nodejs for website, mobile application and desktop software.
                        </div>
                        <div className='bottem-linee'>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className="one">
                        <div className="menu-icono">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655188718/Database_1_ivbjzb.png" className="image-explore" alt="icon" />
                        </div>
                        <div className="menu-title">
                            Database
                        </div>
                        <div className="menu-desc">
                        I’m familiar with SQL and NoSQL database, I used MySQL, MongoDB and DynamoDB as database to develop backend.
                        </div>
                        <div className='bottem-linen'>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Services;
