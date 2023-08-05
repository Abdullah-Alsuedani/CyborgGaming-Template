import './MostPopularCard.css'

import {FaStar} from 'react-icons/fa'
import {FaDownload} from 'react-icons/fa'

const MostPopularCard = (props) => {
    return(
        <div className='most-popular-card'>
            <div className='item'>
                <img src={props.img} alt='popular'></img>
                <div className='most-popular-card-content'>
                    <div>
                        <p>{props.title}</p>
                        <span>{props.category}</span>
                    </div>
                    <ul>
                        <li><FaStar style={{color:"yellow"}}/> {props.rate}</li>
                        <li><FaDownload style={{color:"var(--primary-color)"}}/> {props.download}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MostPopularCard