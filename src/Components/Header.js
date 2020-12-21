import React, {useState} from 'react';
import {Link} from 'react-router-dom';
function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    return (
        <div id={'header-contianer'}>
            <nav className={'navbar'}>
                <div className={'navbar-container'}>
                    <Link to={"/"} className={'profile-pic'}>
                        <img src="../../public/images/tejas_pradeep_profile_pic.jpg" alt="tejas_profile_pic"/>
                    </Link>
                    <div id={'contact-sm'}>
                        <a href = "mailto: rptejas@gatech.edu"><i className="fas fa-envelope"></i> rptejas@gatech.edu</a>
                        <a href="tel:+1 512-665-0710"><i className="fas fa-phone"></i> +1 (512)665-0719</a>
                    </div>
                    <div className={'menu-icon'} onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? "nav-menu-active" : "nav-menu"}>
                        <li className={'nav-item'}>
                            <Link to={"/"} className={"nav-links"} onClick={closeMobileMenu}>
                                Me!
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={"/skills"} className={"nav-links"} onClick={closeMobileMenu}>
                                Skills
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={"/timeline"} className={"nav-links"} onClick={closeMobileMenu}>
                                Timeline
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={"/download-resume"} className={"nav-links"} onClick={closeMobileMenu}>
                                Download Resume
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    );

}
export default Header;
