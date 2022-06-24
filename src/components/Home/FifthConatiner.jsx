import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import "../assets/Home/index.scss"
import { Container, Row, Col } from 'react-bootstrap';
export const FifthContainer = () => {
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.fifth',
                start: 'center bottom'
            }
        })
            // .fromTo('.hpara',
            //     { y: '90', opacity: 0 },
            //     { stagger: .8, y: 10, opacity: 1, ease: 'back.out(1.7)', delay: 1, duration: 1.5 }, "-=1");

    })
    useEffect(() => {
        const para = document.querySelectorAll('.hpara');
        const items = document.querySelectorAll('.container1')

        items.forEach((el) => {
            const image = el.querySelector('.swipeimage')
            const text = el.querySelector(".hpara")


            el.addEventListener('mouseenter', (e) => {
                e.target.style.zIndex = 99
                const te = e.target.querySelector('.hpara')
                gsap.to(para, { color: "#D3D3D3" })
                gsap.to(te, { color: "#000" })
                gsap.to(image, { autoAlpha: 1 })
            })


            el.addEventListener('mouseleave', (e) => {
                gsap.to(para, { color: "#000" })
                gsap.to(text, { color: "#000" })
            })
            el.addEventListener('mouseleave', (e) => {
                gsap.to(image, { autoAlpha: 0 })
            })

            el.addEventListener('mousemove', (e) => {
                gsap.set(image, {
                    force3D: true,
                    x: e.offsetX - 100, y: e.offsetY - 100
                })
            })
        })



    }, []);
    return (
        <>

            <Container ref={eleRef} className="fifth" id="hover-container">

                <Row>
                    <Col>

                        <h3 className='hover-text' style={{ textAlign: "center" }}>
                            <ol type='1'>
                               
                                    <div className="container1">
                                        <img className="swipeimage" src="https://images.unsplash.com/photo-1654248568701-6b1398cd72c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />

                                        <div className="text">
                                        <li></li>
                                            <p className='hpara'>Lorem ipsum </p>
                                        </div>

                                    </div>
                                
                              
                                    <div className="container1">
                                        <img className="swipeimage" src="https://images.unsplash.com/photo-1653633157961-c89109a527f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />

                                        <div className="text">
                                        <li></li>
                                            <p className='hpara'>dolor sit amet</p>  </div>

                                    </div>
                             
                          
                                    <div className="container1">
                                        <img className="swipeimage" src="https://images.unsplash.com/photo-1651346753690-8a9215338c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />

                                        <div className="text">
                                        <li></li>
                                            <p className='hpara'>Iure vitae </p> </div>

                                    </div>
                                
                                    <div className="container1">
                                        <img className="swipeimage" src="https://images.unsplash.com/photo-1654193855102-99f3fb9a31de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />

                                        <div className="text">
                                        <li></li>
                                            <p className='hpara'>nihil iusto sit</p></div>

                                    </div>
                                    <div className="container1">
                                        <img className="swipeimage" src="https://images.unsplash.com/photo-1653633157961-c89109a527f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />

                                        <div className="text">
                                        <li></li>
                                            <p className='hpara'>dolor sit amet</p>  </div>

                                    </div>
                                
                            </ol>












                        </h3>

                    </Col>
                </Row>
            </Container></>

    )
}