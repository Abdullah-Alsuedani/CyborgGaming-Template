import './LiveStreams.css'
import {SectionWrapper, SectionHeader, Carousel, FeaturedGamesCard} from '../../components/index'

import LiveStreamsData from '../../Data/LiveStreamsData'

const LiveStreams = () => {

    const Card = LiveStreamsData.map(CardInfo => {
       return <FeaturedGamesCard
        key={CardInfo.id}
        img={CardInfo.img}
        streaming={CardInfo.streaming}
        title={CardInfo.title}
        downloadText={CardInfo.downloadText}
        rate={CardInfo.rate}
        downloadNumber={CardInfo.downloadNumber}
        />
    })

    return(
        <div className='live-streams-section'>
            <SectionWrapper>
                <SectionHeader title='Live' sectionName='Streams'/>
                <Carousel>
                    {Card}
                </Carousel>
            </SectionWrapper>
        </div>
    )
}

export default LiveStreams