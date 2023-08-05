import './StartStream.css'

import {SectionWrapper, SectionHeader, StartStreamCard, MainBtn} from '../../components/'

import StartStreamData from '../../Data/StartStreamData'


const StartStream = () =>{

    const StreamCard = StartStreamData.map(card => {
        return <StartStreamCard key={card.id} img={card.img} title={card.title}>
            {card.content}
        </StartStreamCard>
    })

    return(
        <div className='start-stream-section'>
            <SectionWrapper>
                <SectionHeader title="How To Start Your" sectionName="Live Stream"/>
                <div className='cards-container'>
                    {StreamCard}
                </div>
                <MainBtn to="/Profile">Go To Profile</MainBtn>
            </SectionWrapper>
        </div>

    )
}

export default StartStream