import slacklogo from './images/slacklogo.png'
import githublogo from './images/githublogo.png'
import './Logo.css'

function Logo(){
    return (
        <footer>
            <div className='center-logo'>
                <a><img id='slack' className='slacker'src={slacklogo} /></a>
                <a><img className='github' src={githublogo} /></a>
            </div>
        </footer>
        
    )
}

export default Logo;