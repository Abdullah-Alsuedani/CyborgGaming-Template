import './GamingLibraryCard.css'

import { SecondaryBtn } from '../../Buttons/Buttons'

const GamingLibraryCard = (props) => {
    return(
        <div className='gaming-library-card'>
            <ul>
                <li><img src={props.img} alt=''/></li>
                <li><h4>{props.title}</h4><p>{props.category}</p></li>
                <li><h4>Date Added</h4><p>{props.date}</p></li>
                <li><h4>Hours Played</h4><p>{props.hours}</p></li>
                <li><h4>Currently</h4><p>{props.download}</p></li>
                <li><SecondaryBtn to='/#' className={props.download}>{props.download}</SecondaryBtn></li>
            </ul>
        </div>
    )
}

export default GamingLibraryCard