import './Carousel.css'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const Carousel = (props) => {
    let options = {
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            992:{
                items:3
            }
        },
        loop: true,
        autoplay: true,
        nav: true
    };

    return(
        <div className='container-fluid'>
            <OwlCarousel
                className='Carousel'
                {...options}
                >
                    {props.children}
            </OwlCarousel>
        </div>
    )
}

export default Carousel