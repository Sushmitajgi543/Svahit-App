import React from 'react';
import { Figure, Container } from 'react-bootstrap'

export const SecondContainer=()=>{
    return(
//         <Carousel>
//   <Carousel.Item interval={1000}>
//     <img
//       className="d-block w-100"
//       src="http://svahit.in/includes/data1/images/homepage_banner_3min.jpg"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>Shop Of Your Choice</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item interval={500}>
//     <img
//       className="d-block w-100"
//       src="http://svahit.in/includes/data1/images/home_page_quote_2.jpg"
//       alt="Second slide"
//     />
//     <Carousel.Caption>
//       <h3>Dream ,Like And Shop</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
  
// </Carousel>
<Container>
<Figure>
                        <Figure.Image
                            // width={471}
                            // height={380}
                            // alt="171x180"
                            src="http://svahit.in/includes/data1/images/home_page_quote_2.jpg"
                        />

                    </Figure>
</Container>
    )
}