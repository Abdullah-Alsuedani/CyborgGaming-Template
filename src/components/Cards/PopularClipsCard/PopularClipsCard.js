import './PopularClipsCard.css'

import { FaEye } from 'react-icons/fa'

const PopularClipsCard = (props) => {
    return(
        <div className='popular-clips-card'>
            <div className='item'>
                <img src={props.img} alt='popular'></img>
                <div className='popular-clips-card-content'>
                        <p>{props.title}</p>
                        <span><FaEye style={{color:"var(--primary-color)", fontSize:'16px'}}/> {props.view}</span>
                </div>
            </div>
        </div>
    )
}

export default PopularClipsCard