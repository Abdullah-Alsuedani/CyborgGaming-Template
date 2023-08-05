import './RelatedGamesCard.css'

import { FaStar } from 'react-icons/fa'
import { FaDownload } from 'react-icons/fa'

const RelatedGamesCard = (props) => {
    return(
        <div className='related-games-card'>
            <img src={props.img} alt="CardsPicture"/>
            <div className='card-info'>
                <div>
                    <h4 className='card-title'>{props.title}</h4>
                    <p className='card-category'>{props.category}</p>
                </div>
                <div className='card-icons'>
                    <span><FaStar style={{color:"yellow"}}/> {props.rate}</span>
                    <span><FaDownload style={{color:"var(--primary-color)"}}/> {props.download}</span>
                </div>
            </div>
        </div>
    )
}

export default RelatedGamesCard