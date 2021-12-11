import {Link} from 'react-router-dom'
import './footer.css'

export default function Footer(){

    return(
        <div className="footer">
            {/* we can link our githubs/other social media if we want */}
            <div>Alfredo</div>
            <div>Adeline</div>
            <div>Jose</div>
            <a href="https://github.com/rcwhite96" className="github-link">Rachel</a>
        </div>)
}
