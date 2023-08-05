import './PopularStream.css'

import { SectionWrapper, SectionHeader, MainBtn, PopularStreamCard } from '../../components'

const PopularStream = (props) => {

    const card = props.data.map(card=>
        <PopularStreamCard
         key={card.id}
         img={card.img}
         profile={card.profile}
         watches={card.watches}
         gameName={card.gameName}
         subHeading={card.subHeading}
         title={card.title}
         />
    ) 

    return(
        <div className='popular-stream'>
            <SectionWrapper>
                <SectionHeader title="Most Popular" sectionName="Live Stream"/>
                <div className='cards-container'>
                    {card}
                </div>
                <MainBtn to={props.to}>{props.btn}</MainBtn>
            </SectionWrapper>
        </div>
    )
}

export default PopularStream