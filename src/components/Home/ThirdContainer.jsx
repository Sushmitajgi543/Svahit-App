import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CContainer } from '@coreui/react'
import pattern from '../assets/Image/Pattern.png'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';

import "../assets/Home/ThirdContainer.scss";

export const ThirdContainer = () => {
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef();
    const q = gsap.utils.selector(el);
    const t1 = useRef();
    var x = window.matchMedia("(max-width:439px)")

    // useEffect(() => {


    //     t1.current = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.mb-5',
    //             start: 'center bottom'
    //         }
    //     })
    //         .fromTo(".para", { y: '20rem', opacity: 0 },
    //             { stagger:.3,y: 10, opacity: 1, delay: 0.2,duration:1 },"+=2")
    //             .fromTo(".btn", {
    //                 y: 20,
    //                 opacity:0
    //             },{
    //                 opacity:1,
    //                 delay:0.3,
    //                 y: 0,
    //                 duration: 0.4,
    //             })


    // }, []);

    return (
        <div ref={t1} className='third-section'>
            <div className='pattern'>

                <img src={pattern} alt="pattern" />
            </div>
            {x.matches ? (<>
                <CContainer md id="third-section-container">

                    <h2 className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </h2>


                </CContainer>
                <CContainer id='para-button'>

                    <span className='para'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        Duis aute irure dolor in reprehen
                        derit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariaturs.</span>



                </CContainer></>) : (<>


                    <CContainer md id="third-section-container">

                        <h2 className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </h2>


                    </CContainer>
                    <CContainer id='para-button'>

                        <span className='para'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  </span>
                        <span className='para'>Duis aute irure dolor in reprehen
                            derit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur.</span>



                    </CContainer></>)}



            <CContainer id='para-button1'>
                <Button className='btn' id='button' >
                    READ MORE <span> &gt;</span>
                </Button>
            </CContainer>

        </div>
    )
}