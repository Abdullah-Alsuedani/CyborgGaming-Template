import './AllGamingLibrary.css'

import { GamingLibraryCard, SectionWrapper, SectionHeader } from '../../components'
import AllGamingLibraryData from '../../Data/AllGamingLibraryData'

const AllGamingLibrary =  () => {
        const cards = AllGamingLibraryData.map(card => {
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
            </SectionWrapper>
        )
}

export default AllGamingLibrary