import './PopularStreamCard.css'

import {FaCheck, FaEye, FaGamepad} from 'react-icons/fa'


const PopularStreamCard = (props) => {
    return(
        <div className='popular-stream-card'>
            <div className='card-head'>
                <div className='card-buttons'>
                    <div className='top'>
                        <a href='/#'>Live</a>
                    </div>
                    <div className='bottom'>
                    <a href='/#'><FaEye/> {props.watches}</a>
                    <a href='/#'><FaGamepad/> {props.gameName}</a>
                    </div>
                </div>
                <img src={props.img} alt='PopularStreamCardImage' />
            </div>
            <div className='card-body'>
                <div className='profile-img'>
                    <img src={props.profile} alt='PopularStreamProfileImage' />
                </div>
                <div className='card-info'>
                    <div className='card-subheading'>
                        <FaCheck/> <span>{props.subHeading}</span>
                    </div>
                    <h6 className='card-title'>{props.title}</h6>
                </div>
            </div>
        </div>
    )
}


export default PopularStreamCard