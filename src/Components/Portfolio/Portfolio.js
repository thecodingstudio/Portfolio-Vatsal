import React from "react";

import './Portfolio.css';

import Aos from 'aos';

import "aos/dist/aos.css";

import { useEffect } from 'react';

const Portfolio = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <div className="portfolio">
            <div className="portfolio-main">
                <div data-aos="fade-right" className="port-title">
                    <div className="port-inner">
                        <span className="text">
                            My Project
                        </span>
                        <span className="line">
                        </span>
                    </div>
                    <h2 className="sevices-name">
                        My Portfolio
                    </h2>
                </div>
                <div className="portfolio-body">
                    <div data-aos="fade-left" className="project">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1654768131/1_1_ejzhv6.png" alt="icon" />
                        </div>
                        <div className="project-part">
                            <div className="project-title">
                                VSNODE
                            </div>
                            <div className="descrption">
                                VSNODE is an E-Commerce Website where people can <br />
                                purchase a product and Admin can add or edit products <br />
                            </div>
                            <a href="https://github.com/vats199/E-Commerce_App_Using_MongoDB.git" target="_blank" rel="noreferrer">
                                View GitHub
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="project1">
                        <div className="project-partt">
                            <div className="project-titlee">
                            Insta-Cart
                            </div>
                            <div className="descrption">
                            It is an E-Commerce Food and Vegetable Application where <br />
                            people can purchase items using coupon code. <br />
                            </div>
                            <a href="https://github.com/vats199/insta-cart-ts.git" target="_blank" rel="noreferrer">
                                View GitHub
                            </a>
                        </div>
                        <div className="imagee">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655093934/3_1_cu357h.png" alt="icon" />
                        </div>
                    </div>
                    <div data-aos="fade-left" className="project2">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655204898/V6_emlz2v.jpg" alt="icon" />
                        </div>
                        <div className="project-part">
                            <div className="project-title">
                            CERV App
                            </div>
                            <div className="descrption">
                            CERV APP is an online catering service app where <br />
                            people can order their selected dishes and caterer. <br />
                            </div>
                            <a href="https://github.com/vats199/cerv-backend.git" target="_blank" rel="noreferrer">
                                View GitHub
                            </a>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
    )
}

export default Portfolio;

