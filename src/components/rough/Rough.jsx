import { React, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import "./rough.css"
import { Container, Row, Col } from 'react-bootstrap';
export const Rough = () => {
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
            .fromTo('.hpara',
                { y: '90', opacity: 0 },
                { stagger: .8, y: 10, opacity: 1, ease: 'back.out(1.7)', delay: 1, duration: 1.5 }, "-=1");

    })
    useEffect(() => {
        const para = document.querySelectorAll('.hpara');
        const items = document.querySelectorAll('.container1')
        const image = document.querySelector('.swipeimage')         

        items.forEach((el) => {

            el.addEventListener('mouseenter', (e) => {
                gsap.to(image, { autoAlpha: 1 })
                e.target.style.zIndex = 99
                gsap.to(para, { color: "rgb(22,79,156)" })
            })
            
            el.addEventListener('mouseenter', (e) => {
                
                const te = e.target.querySelector('.hpara')
                
                gsap.to(para, { filter:"blur(50%)"})
            })
            el.addEventListener('mouseleave', (e) => {
                const te = e.target.querySelector('.hpara')
                gsap.to(te, { color: "#000" })
            })
            el.addEventListener('mouseleave', (e) => {
                gsap.to(image, { autoAlpha: 0 })
            })

            el.addEventListener('mousemove', (e) => {
                el.addEventListener('mousemove', (e) => {
                    image.style.top = e.clientY + 'px'
                    image.style.left = e.clientX + 'px'
                  })
                
            })
        })

        
        // items.forEach((el) => {
        //   el.addEventListener('mouseover', (e) => {
        //     var imageData = e.target.getAttribute('data-image')
        //     console.log(imageData)
        //     e.target.style.zIndex = 99
        //     image.setAttribute('src', imageData)
        //   })
        //   el.addEventListener('mousemove', (e) => {
        //     image.style.top = e.clientY + 'px'
        //     image.style.left = e.clientX + 'px'
        //   })
        //   el.addEventListener('mouseleave', (e) => {
        //     e.target.style.zIndex = 1
        //     image.setAttribute('src', '')
        //   })
        // })

    }, []);
    return (
        <>

            <Container ref={eleRef} className="fifth" id="hover-container">

                <Row>
                    <Col>

                        <h1 className='hover-text' style={{ textAlign: "center", fontSize: "18rem" }}>
                            <div className="container1">
                                <img className="swipeimage" src="https://images.unsplash.com/photo-1654248568701-6b1398cd72c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />

                                <div className="text">
                                    <p className='hpara hpara1'>Lorem ipsum </p>
                                </div>

                            </div>
                            <div className="container1">
                                <img className="swipeimage" src="https://images.unsplash.com/photo-1653633157961-c89109a527f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />

                                <div className="text">
                                    <p className='hpara hpara1'>dolor sit amet</p>  </div>

                            </div>
                            <div className="container1">
                                <img className="swipeimage" src="https://images.unsplash.com/photo-1651346753690-8a9215338c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />

                                <div className="text">
                                    <p className='hpara hpara1'>Iure vitae reprehenderit</p> </div>

                            </div>
                            <div className="container1">
                                <img className="swipeimage" src="https://images.unsplash.com/photo-1654193855102-99f3fb9a31de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />

                                <div className="text">
                                    <p className='hpara hpara1'>nihil iusto sit, culpa</p></div>

                            </div>







                        </h1>

                    </Col>
                </Row>
            </Container></>

    )
}