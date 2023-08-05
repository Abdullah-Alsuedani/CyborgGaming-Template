import './Profile.css'

import { SectionWrapper } from '../../components'
import { ProfileInfo, PopularClips, AllGamingLibrary } from '../../sections'

const Profile = () => {
    return(
        <>
            <SectionWrapper>
                <ProfileInfo/>
                <PopularClips/>
            </SectionWrapper>
            <AllGamingLibrary/>
        </>
    )
}

export default Profile