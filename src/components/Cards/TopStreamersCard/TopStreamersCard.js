import './TopStreamersCard.css'

import {FaCheck} from 'react-icons/fa'
import MainBtn from '../../Buttons/Buttons'

const TopStreamersCard = (props) => {
    return(
        <div className='streamers-card'>
            <img src={props.img} alt='CardImage'/>
            <div className='info'>
                <FaCheck/>
                <span>{props.name}</span>
            </div>
            <MainBtn>Follow</MainBtn>
        </div>
    )
}

export default TopStreamersCard