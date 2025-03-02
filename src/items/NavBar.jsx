import "./NavBar.css"
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Logo = () => (
    <div onClick={() => {window.location.href = '/'}} className="container align-items-center justify-content-center">
        <div className="row align-items-center justify-content-center">
            {/* Logo Section */}
            <div className="col-auto" id="logo-wrapper">
                <img className='logo-img' src="/cS-mug2.png" alt="logo" height='100px' width='100px' />
            </div>

            {/* Gettysburg College Text */}
            <div className="col-auto" id="logo-text-wrapper" style={{ textAlign: "left", paddingLeft: 0}}>
                <div style={{ color: 'grey'}}>
                    <h1 className='logo-txt'> <span style={{color: "#008cff"}}>GETTYSBURG</span> <span style={{color: "#eb6620"}}>A</span>SSOCIATION FOR</h1>
                    <h1 className='logo-txt'> <span style={{color: "#eb6620"}}>C</span>OMPUTING <span style={{color: "#eb6620"}} >M</span>ACHINARY</h1>
                </div>
                
            </div>
        </div>
    </div>
)

export default function NavBar() {
    const [showHamburger, setShowHamburger] = useState(false)
    const toggleMenu = (e) => 
    {   
        // e.preventDefault()
        setShowHamburger(!showHamburger)
    }

    return(
        <div>
            <nav id="desktop-nav">
                <div className="logo">
                    <Logo />
                </div>
                <div>
                    <ul className="nav-links">
                        <li><a href="/#about">About Us</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/boards">Our Team</a></li>
                        <li><a href="/projects">Projects</a></li>
                    </ul>
                </div>
            </nav>
            <nav id="hamburger-nav" className="container" style={{position: 'relative'}}>
                <div className="row">
                    <div className="col logo">
                        <img src='/cS-mug2.png' alt='logo' width='80px' height='80px' />
                    </div>
                    <div className="col hamburger-menu" style={{alignItems: 'center'}}>
                        <div className={`hamburger-icon ${showHamburger ? 'open' : ''}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={`menu-links ${showHamburger ? 'open' : ''}`}>
                            <li><a href="/#about" onClick={toggleMenu}>About Us</a></li>
                            <li><a href="/events" onClick={toggleMenu}>Events</a></li>
                            <li><a href="/boards" onClick={toggleMenu}>Our Team</a></li>
                            <li><a href="/projects" onClick={toggleMenu}>Projects</a></li>
                        </div>
                    </div>
                </div> 
            </nav>
        </div>
        
    )
}