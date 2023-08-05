import './Streams.css'

import { LiveStreams, TopStreamers, PopularStream } from '../../sections'

import PopularStreamData2 from '../../Data/PopularStreamData2'

const Streams = () => {
    return(
        <>
            <div className='row'>
                <LiveStreams/>
                <TopStreamers/>
                <PopularStream to="/Streams" data={PopularStreamData2} btn="Load More Streams"/>
            </div>
        </>
    )
}

export default Streams