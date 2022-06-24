import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CContainer, CImage, CCol } from '@coreui/react';
import { Container, Figure, Row } from 'react-bootstrap';
import '../assets/Home/index.scss';

export const FourthContainer = () => {
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef();
    const q = gsap.utils.selector(el);
    const t1 = useRef();
    // useEffect(() => {

       
    //     t1.current = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '#image-section',
    //             start: 'top center'
    //         }
    //     })

    //         .fromTo(".image1", { x: '-3rem', opacity: 0 },
    //             { x: 0, opacity: 1,duration:0.5})
                
    //             .fromTo(".image2", { x: '3rem', opacity: 0 },
    //             { x: 0, opacity: 1,duration:0.5 })

    // }, []);

    return (
        <CContainer className='img-container' id="image-section">
            <CImage rounded thumbnail id='image1'
            className='image1'
                src="https://images.unsplash.com/photo-1605023188394-5e17accad140?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                width={542} height={700} />
            <CImage rounded thumbnail id='image2'
            className='image2'
                src="https://images.unsplash.com/photo-1632944968588-3ec2870641ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                width={542} height={700} />

        </CContainer>
    )
}