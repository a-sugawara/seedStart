import {Link} from 'react-router-dom'
import './footer.css'

export default function Footer(){

    return(
        <div className="footer">
            {/* we can link our githubs/other social media if we want */}
            <div className="footerPiece"><a target="_blank" href="https://github.com/a-sugawara"><img className="github" alt="github" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="25px" style={{opacity:".4"}}></img></a> Alfredo</div>
            <div className="footerPiece"><a target="_blank" href="https://github.com/ad-sw"><img className="github" alt="github" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="25px" style={{opacity:".4"}}></img></a> Adeline</div>
            <div className="footerPiece"><a target="_blank" href="https://github.com/Vour123"><img className="github" alt="github" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="25px" style={{opacity:".4"}}></img></a> Jose</div>
            <div className="footerPiece"><a target="_blank" href="https://github.com/rcwhite96"><img className="github" alt="github" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="25px" style={{opacity:".4"}}></img></a> Rachel</div>
        </div>
        )
}

//v2 if just underline names upon hover + clickable link
// <div className="footerPiece"><a href="https://github.com/a-sugawara">Alfredo</a></div>
// <div className="footerPiece"><a href="https://github.com/ad-sw">Adeline</a></div>
// <div className="footerPiece"><a href="https://github.com/Vour123">Jose</a></div>
// <div className="footerPiece"><a href="https://github.com/rcwhite96">Rachel</a></div>
