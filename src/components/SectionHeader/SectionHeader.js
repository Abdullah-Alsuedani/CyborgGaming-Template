import './SectionHeader.css'

const SectionHeader = (props) => {
    return(
        <div className='section-title'>
            <h4><span>{props.title}</span> {props.sectionName}</h4>
        </div>
    )
}

export default SectionHeader