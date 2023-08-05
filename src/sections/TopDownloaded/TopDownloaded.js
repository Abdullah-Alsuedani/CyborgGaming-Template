import './TopDownloaded.css'

import {SectionWrapper, SectionHeader, TopDownloadedCard} from '../../components'
import TopDownloadedData from '../../Data/TopDownloadedData'

import {Link} from 'react-router-dom'

const TopDownload = () =>{

    const TopDownloadItem = TopDownloadedData.map(item => {
        return <TopDownloadedCard
                    key={item.id}
                    img={item.img}
                    title={item.title} 
                    category={item.category}
                    rate={item.rate}
                    download={item.download}
                />
    })

    return(
        <div className='top-download-section'>
            <SectionWrapper>
                <SectionHeader title="Top" sectionName="Downloaded"/>
                <div className='top-downloaded-cards'>{TopDownloadItem}</div>
                <Link to="/Profile" className='view-all'>View All Games</Link>
            </SectionWrapper>
        </div>
    )
}

export default TopDownload