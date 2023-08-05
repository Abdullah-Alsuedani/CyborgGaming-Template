import './StartStreamCard.css'

const StartStreamCard = (props) => {
    return(
        <div className='start-stream-card'>
            <img src={props.img} alt=''/>
            <h6>{props.title}</h6>
            {props.children}
        </div>
    )
}


export default StartStreamCard