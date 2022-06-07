import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CContainer, CButton } from '@coreui/react'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import "./assets/ThirdContainer.css"
export const ThirdContainer = () => {
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef();
    const q = gsap.utils.selector(el);
    const t1 = useRef();
    useEffect(() => {

       
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.mb-5',
                start: 'center bottom'
            }
        })
            .fromTo(".para", { y: '20rem', opacity: 0 },
                { stagger:.3,y: 10, opacity: 1, delay: 0.2,duration:1 },"+=2")
                .fromTo(".btn", {
                    y: 20,
                    opacity:0
                },{
                    opacity:1,
                    delay:0.3,
                    y: 0,
                    duration: 0.4,
                })
    

    }, []);

    return (
        <CContainer ref={t1} className='bhg'>

            <CContainer md id="para-container">

                <h2 className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </h2>


            </CContainer>
            <CContainer id='para-button'>
               
                    <span id='para2' className='para'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  </span>
                    <span id='para3' className='para'>Duis aute irure dolor in reprehen
                        derit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.</span>
                    
                

            </CContainer>
            <CContainer id='para-button1'>
                <Button className='btn' id='button' >
                    View More
                </Button>
            </CContainer>

        </CContainer>
    )
}