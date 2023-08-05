import './Hero.css'

import {MainBtn} from '../../components/index'

const Hero = () => {
    return(
        <div className='hero'>
            <div className='hero-text'>
                <p>Welcome To Cyborg</p>
                <h1><span>Browse</span> Our Popular Games Here</h1>
                <MainBtn to="/Browse">Browse Now</MainBtn>
            </div>
        </div>
    )
}

export default Hero