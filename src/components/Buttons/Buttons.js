import './Buttons.css'

import { Link } from 'react-router-dom'

const MainBtn = (props) =>{
    return(
        <Link to={props.to} className='btn'>{props.children}</Link>
    )
}

const SecondaryBtn = (props) => {
    return(
        <Link to={props.to} className={'secondary-btn ' + props.className}>{props.children}</Link>
    )
}

export default MainBtn
export {SecondaryBtn}