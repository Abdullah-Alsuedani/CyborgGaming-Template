import './FeaturedGamesCard.css'

import {FaStar} from 'react-icons/fa'
import {FaDownload} from 'react-icons/fa'

const FeaturedGamesCard = (props) => {
    return(
        <div className='featured-card'>
            <div className='card-head'>
                <img src={props.img} alt='pictures' />
                <p>{props.streaming}</p>
            </div>
            <div className='card-body'>
                <div className='card-desc'>
                    <div className='card-title'>{props.title}</div>
                    <div className='download-number'>{props.downloadText}</div>
                </div>
                <div className='card-info'>
                    <p><FaStar style={{color: "yellow"}}/> {props.rate}</p>
                    <p><FaDownload style={{color: "var(--primary-color)"}}/> {props.downloadNumber}</p>
                </div>
            </div>
        </div>
    )
}


export default FeaturedGamesCard