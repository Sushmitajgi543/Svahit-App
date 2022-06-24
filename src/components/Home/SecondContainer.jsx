import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Figure } from 'react-bootstrap'
import { CContainer } from '@coreui/react'
import poster from '../assets/Image/poster.png'
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
    var x = window.matchMedia("(max-width:439px)")

    return(
<CContainer  ref={el} md className='second-section mb-5'>
<Figure>
    {x.matches ? (<Figure.Image
                            
                            className='img1'
                            src="https://images.unsplash.com/photo-1589895869111-cab6bf8354c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80"
                        />):(
                        <Figure.Image
                            
                            className='img1'
                            src={poster}
                        />)}
                        

                    </Figure>
</CContainer>
    )
}