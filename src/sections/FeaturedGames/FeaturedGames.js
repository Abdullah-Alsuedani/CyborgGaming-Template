import './FeaturedGames.css'
import {SectionWrapper, SectionHeader, Carousel, FeaturedGamesCard} from '../../components/index'

import FeaturedData from '../../Data/FeaturedData'

const FeaturedGames = () => {

    const Card = FeaturedData.map(CardInfo => {
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
        <div className='featured-section'>
            <SectionWrapper>
                <SectionHeader title='Featured' sectionName='Games'/>
                <Carousel>
                    {Card}
                </Carousel>
            </SectionWrapper>
        </div>
    )
}

export default FeaturedGames