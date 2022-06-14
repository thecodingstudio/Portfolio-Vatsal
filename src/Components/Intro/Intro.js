import React from "react";

import "./intro.css";

// import Vector1 from '../../img/Vector1.png';


// import Vector2 from "../../img/Vector2.png";

import V2 from "../../img/V2.jpg";

// import glassesimoji from "../../img/glassesimoji.png";

import thumbup from "../../img/thumbup.png";

import crown from "../../img/crown.png";

import FloatinDiv from "../FloatingDiv/FloatingDiv";

import Github from "../../img/github.png";

import LinkedIn from "../../img/linkedin.png";

import Instagram from "../../img/instagram.png";

import { motion } from "framer-motion";

import { Link } from "react-scroll";

import Aos from 'aos';

import "aos/dist/aos.css";

import { useEffect } from 'react';



const Intro = () => {
    // Transition
    const transition = { duration: 2, type: "spring" };

    useEffect(() => {
        Aos.init({
            duration: 3000
        });
    }, []);

  
    
    return (
        <div className="Intro" id="Intro">

            <div className="i-left">
                <div data-aos="fade-up" className="i-name">

                    <span>Hello..! I Am</span>
                    <span>Vatsal Patel</span>
                    <span>
                    Backend Developer at The Coding Studio with expertise in Web development, producing the Quality work to entice and engage your users!
                    </span>
                </div>
                <div data-aos="fade-up">
                    <Link to="contact" smooth={true} spy={true}>
                        <button className="button i-button">Hire me</button>
                    </Link>
                </div>

                <div className="i-icons">
                    <a href="https://github.com/vats199" target="_blank" rel="noreferrer">
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/company/thecodingstudio/" target="_blank" rel="noreferrer">
                    <img src={LinkedIn} alt="" />
                    </a>
                    <a href="https://instagram.com/vatsalpatel__?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                    <img src={Instagram} alt="" />
                    </a>
                </div>
            </div>

            <div data-aos="fade-left" className="i-right">
               
             
                <img src={V2} alt="" className="avinm"/>
             

                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "58%" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatinDiv img={crown} text1="Backend" text2="Developer" />
                </motion.div>
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-div"

                >
                    <FloatinDiv img={thumbup} text1="Great" text2="Learner" />
                </motion.div>
            </div>
        </div>
    );
};

export default Intro;
