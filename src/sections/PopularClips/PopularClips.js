import './PopularClips.css'

import {MainBtn, PopularClipsCard, SectionHeader} from '../../components/index'
import PopularClipsData from '../../Data/PopularClipsData'

const PopularClips = () => {

    const cards = PopularClipsData.map(card =>{
        return <PopularClipsCard 
        key={card.id}
        img={card.img}
        title={card.title}
        view={card.view}
        />
    })

    return(
            <div className='popular-clips'>
                <SectionHeader title="Most Popluar" sectionName="Right Now"/>
                <div className='popular-clips-cards'>
                    {cards}
                </div>
                <MainBtn to="/#">Load More Clips</MainBtn>
            </div>
    )
}

export default PopularClips