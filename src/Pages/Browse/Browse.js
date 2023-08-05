import './Browse.css'

import { FeaturedGames, TopDownloaded, StartStream, PopularStream} from '../../sections'

import PopularStreamData from '../../Data/PopularStreamData'

const Browse = () => {
    return(
        <>
            <div className='row'>
                <FeaturedGames/>
                <TopDownloaded/>
                <StartStream/>
                <PopularStream to="/Streams" data={PopularStreamData} btn="Discover All Streams"/>
            </div>
        </>
    )
}

export default Browse