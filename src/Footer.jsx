import './Footer.css'
import zuri from './images/zuri-intern.jpg'
import ingresive from './images/ingresive.jpg'

function Footer(){
    return(
        <div className='center-footer'>
            <img className='zuri' src={zuri} /><p className='desc'>HNG Internship 9 Frontend Task</p><img className='ingress' src={ingresive} />
        </div> 
    )
}

export default Footer;