import React from 'react';
import "./assets/FirstContainer.css"
import { CContainer, CImage, CCol } from '@coreui/react';
import { Container, Row, Col } from 'react-bootstrap';
export const FirstConatiner = () => {
    return (
        <>
            
            {/* <Container className='contactus-Container'>
                <Row>
                    <Col >
                    <h1 style={{fontSize:"6rem"}}>
                   Contact Us
                        
                          
                    </h1>
                        
                    </Col>
                </Row>
            </Container> */}
             <Container id='contactus-Container'>
             <div id='color'></div>
                <div id='color2'></div>
                <Row>
                    <Col>
                    <h1 >
                   Contact Us 
                    </h1>  
                    </Col>
                </Row>
                <h2 id='contacth1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis debitis ipsam, dolores odio modi omnis sunt a</h2>
            </Container>
            <Container id='catimg'>
                <CImage
                
                height={740}
                width={1160}
                 src='https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                ></CImage>
                </Container>
            </>

    )
}