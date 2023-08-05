import './TopDownloadedCard.css'

import { FaStar } from 'react-icons/fa'
import { FaDownload } from 'react-icons/fa'

const TopDownloadedCard = (props) => {
    return(
        <div className='top-downloaded'>
            <img src={props.img} alt="CardsPicture"/>
            <div className='card-info'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-category'>{props.category}</p>
                <div className='card-icons'>
                    <span><FaStar style={{color:"yellow"}}/> {props.rate}</span>
                    <span><FaDownload style={{color:"var(--primary-color)"}}/> {props.download}</span>
                </div>
            </div>
            <a href='/#' className='download-btn'><FaDownload style={{color:"var(--primary-color)"}}/></a>
        </div>
    )
}

export default TopDownloadedCard