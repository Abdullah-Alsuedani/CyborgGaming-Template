import './TopStreamers.css'

import { SectionWrapper, SectionHeader, TopStreamersCard } from '../../components'

import TopStreamersData from '../../Data/TopStreamersData'

const TopStreamers = () => {
    const card = TopStreamersData.map(card => 
            <TopStreamersCard key={card.id} img={card.img} name={card.name} />
        )
    return (
        <div className='top-streamers-section'>
            <SectionWrapper>
                <SectionHeader title="Top" sectionName='Streamers'/>
                {card}
            </SectionWrapper>
        </div>
    )
}

export default TopStreamers