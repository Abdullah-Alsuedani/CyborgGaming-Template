import './RelatedGames.css'

import { SectionWrapper, SectionHeader, RelatedGamesCard  } from '../../components'

import RelatedGamesData from '../../Data/RelatedGamesData'


const RelatedGames = () => {
    const card = RelatedGamesData.map(card=>
            <RelatedGamesCard
            key={card.id}
             img={card.img}
             title={card.title}
             category={card.category}
             rate={card.rate}
             download={card.download}
             />
        )
    return(
        <div className='related-games'>
            <SectionWrapper>
                <SectionHeader title='Other Related' sectionName='Games'/>
                <div className='cards-container'>
                    {card}
                </div>
            </SectionWrapper>
        </div>
    )
}

export default RelatedGames