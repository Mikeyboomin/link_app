
import './Profile.css'
import Profilepic from './images/profile_pic.png'

const Profile = () => {
    return (
        <div>
            <img id='profile_img' className='avi' src={Profilepic} alt='' />
            <p className='myName'>Ogar Michael</p>
            <p className='hide' id='slack'>Mikeyboomin Official</p>
        </div>
    )
}

export default Profile;