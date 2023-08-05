import './MostPopular.css'

import {MainBtn, MostPopularCard, SectionHeader} from '../../components/index'
import PopularItemsData from '../../Data/PopularItemsData'

const MostPopular = () => {

    const cards = PopularItemsData.map(card =>{
        return <MostPopularCard 
        key={card.id}
        img={card.img}
        title={card.title}
        category={card.category}
        rate={card.rate}
        download={card.download} />
    })

    return(
        <div className='section-wrapper'>
            <SectionHeader title="Most Popluar" sectionName="Right Now"/>
            <div className='most-popular-cards'>
                {cards}
            </div>
            <MainBtn to="/Browse">Discover Popular</MainBtn>
        </div>
    )
}

export default MostPopular