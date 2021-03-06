import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { CImage, CContainer } from '@coreui/react'
import "../assets/Home/SixthContainer.scss";
export const SixthConatiner = () => {
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    // useEffect(() => {
    //     t1.current = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.sixth',
    //             start: 'center bottom'}
    //         })
    //         .fromTo('.image-para',
    //         { y: '100',opacity: 0 },
    //         {  y: 10, opacity: 1, ease: 'back.out(1.7)',delay:1.2, duration: 1.5},"-=0.1")
    //         .fromTo("#img", { opacity: 0,x:1},
    //         { opacity: 1,x:0, autoAlpha:1, duration:0.2, ease: 'Power2.in'}, )

    // })
    return (
        <CContainer className=' sixth mb-5' ref={eleRef} id="lastContainer" >
            <div className="div1">
                
                <h1>Lorem Ipsum Init
                    Dolor Ip</h1>
                <p className='image-para'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                
                <button  >
                    READ MORE <span> &gt;</span>
                </button>
            </div>
            <div className='div2'>
                <CImage
                    rounded thumbnail id='img'
                    src="https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                />
                <CImage
                    rounded thumbnail id='img2'
                    src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                />
            </div>


        </CContainer>
    )
}