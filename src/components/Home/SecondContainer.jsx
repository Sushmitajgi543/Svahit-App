import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Figure } from 'react-bootstrap'
import { CContainer } from '@coreui/react'

export const SecondContainer=()=>{
    gsap.registerPlugin(ScrollTrigger);
    const el = useRef();
    const q = gsap.utils.selector(el);
    const t1 = useRef();
    useEffect(() => {

       
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.mb-5',
                start: 'top center'
            }
        })
            // .fromTo(".img1", { y: '20rem', opacity: 0 },
            //     { y: 10, opacity: 1, delay: 0.,duration:1 })
            
    

    }, []);
    return(
<CContainer  style={{height:"100vh"
,display:"flex", justifyContent:"center",padding:"10rem 8rem" }}ref={el} md className='mb-5'>
<Figure>
                        <Figure.Image
                            width={"100%"}
                            height={"700"}
                            className='img1'
                            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        />

                    </Figure>
</CContainer>
    )
}