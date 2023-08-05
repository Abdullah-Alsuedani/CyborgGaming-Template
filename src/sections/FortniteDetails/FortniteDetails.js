import './FortniteDetails.css'

import { SectionWrapper, SecondaryBtn } from '../../components'
import HeadImage from '../../assets/images/details-03.jpg'
import HeadVideo from '../../assets/images/feature-right.jpg'
import Image01 from '../../assets/images/details-03.jpg'

import { FaPlay, FaStar, FaDownload, FaGamepad, FaServer } from 'react-icons/fa'

const FortniteDetails = () => {
    return(
        <div className='fortnite-details'>
            <div className='section-head'>
                <div className='image'>
                    <img src={HeadImage} alt='HeadPicture'/>
                </div>
                <div className='video'>
                    <img src={HeadVideo} alt='HeadVideoPicture'/>
                    <a href='/#'>
                        <FaPlay/>
                    </a>
                </div>
            </div>

            <h1>fortnite Details</h1>

            <SectionWrapper>
                <div className='info'>
                    <ul className='main-info'>
                        <li>
                            <h6>Fortnite</h6>
                            <p>Sandbox</p>
                        </li>
                        <li>
                            <div><FaStar style={{color: "yellow"}}/> <span>4.3</span></div>
                            <div><FaDownload style={{color: "var(--primary-color)"}}/> <span>2.1M</span></div>
                        </li>
                    </ul>
                    <ul className='sec-info'>
                        <li><FaStar style={{color: "yellow"}}/> <span>4.8</span></li>
                        <li><FaDownload style={{color: "var(--primary-color)"}}/> <span>2.3M</span></li>
                        <li><FaServer style={{color: "var(--primary-color)"}}/> <span>36GB</span></li>
                        <li><FaGamepad style={{color: "var(--primary-color)"}}/> <span>Action</span></li>
                    </ul>
                </div>
                <div className='images'>
                    <img src={Image01} alt='Images1'/>
                    <img src={Image01} alt='Images2'/>
                    <img src={Image01} alt='Images3'/>
                </div>
                <p className='desc'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <a href='/#'>small contribution via PayPal</a> to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
                <SecondaryBtn to="/#">Download Fortnite Now!</SecondaryBtn>
            
            </SectionWrapper>

        </div>
    )
}

export default FortniteDetails