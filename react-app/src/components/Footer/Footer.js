import{Link} from 'react-router-dom'
import './footer.css'

export default function Footer(){

    return(
        <footer className="footer">
            {/* we can link our githubs/other social media if we want */}
            <p>Alfredo</p>
            <p>Adeline</p>
            <p>Jose</p>
            <a href="https://github.com/rcwhite96" className="github-link">Rachel</a>
        </footer>
    )
}
