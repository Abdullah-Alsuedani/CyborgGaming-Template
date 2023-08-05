import './ProfileInfo.css'

import { SecondaryBtn } from '../../components'

import img01 from '../../assets/images/profile.jpg'

const ProfileInfo = () => {
    return (
        <div className='profile-info'>
            <img src={img01} alt='profile-info'/>
            <div className='profile-texts'>
                <span>Offline</span>
                <h3>Alan Smithee</h3>
                <p>
                    You Haven't Gone Live yet. Go Live By Touching The Button Below.
                </p>
                <SecondaryBtn to="/#">Start Live Stream</SecondaryBtn>
            </div>
            <ul className='profile-istatics'>
                <li>Games Downloaded <span>3</span></li>
                <li>Friends Online <span>16</span></li>
                <li>Live Streams <span>None</span></li>
                <li>clips <span>29</span></li>
            </ul>
        </div>
    )
}

export default ProfileInfo