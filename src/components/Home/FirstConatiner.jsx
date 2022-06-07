import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import "./assets/FirstContainer.css"
import { Container, Row, Col } from 'react-bootstrap';
export const FirstConatiner = () => {
    const eleRef = useRef();
    
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        gsap.fromTo(q('.heading p'),
            { y: '50',opacity: 0 },
            {stagger:.3,  y: 10, opacity: 1, ease: 'back.out(1.7)',delay:1, duration: 1.5});
        gsap.fromTo("#color1", {backgroundPosition: '11px 32px', opacity: 0},{
            backgroundPosition: '0rem 0rem',opacity: 1, duration: 1.5, ease: 'power1.inOut',delay:0.3
        })
        gsap.fromTo("#color2", {backgroundPosition: '20px 49px', opacity: 0},{
            backgroundPosition: '0rem 0rem',opacity: 1, duration: 1.5, ease: 'power1.inOut',delay:0.6
        })
    })
    return (
        <>
            
            <Container ref={eleRef} className='mb-4' id='heading-container'>
                <div id='color1'></div>
                <div id='color2'></div>
                <Row >
                    <Col>
                    <h1 className='heading'>
                        <p> Lorem ipsum  </p>
                  <p>sit am et consect </p> 
                        
                          
                    </h1>
                        
                    </Col>
                </Row>
            </Container></>

    )
}