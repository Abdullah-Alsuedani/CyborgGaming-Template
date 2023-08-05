import './GamingLibrary.css'

import {SectionWrapper, SectionHeader, MainBtn, GamingLibraryCard} from '../../components/index'
import GamingLibraryData from '../../Data/GamingLibraryData'


const GamingLibrary = () => {

    const cards = GamingLibraryData.map(card => {
        return <GamingLibraryCard 
                    key={card.id}
                    img={card.img}
                    title={card.title}
                    category={card.category}
                    date={card.date}
                    hours={card.hours}
                    download={card.download}
                />
    })

    return(
        <SectionWrapper>
            <SectionHeader title="Your Gaming" sectionName="Library"/>
            <div className='gaming-library-cards'>
                {cards}
            </div>
            <MainBtn to="/Profile">View Your Library</MainBtn>
        </SectionWrapper>
    )
}


export default GamingLibrary