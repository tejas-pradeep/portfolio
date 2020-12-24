import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "../../public/css/Header.css";
function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    function handleActive(newActive) {
        // let curr = document.getElementsByClassName('active');
        // curr[0].className= 'nav-links';
        // newActive.children[0].className += " active";
        console.log(newActive);
    }
    return (
        <div id={'header-container'}>
            <nav className={'navbar'}>
                <div className={'navbar-container'}>
                    <Link to={"/"} className={'profile-pic'}>
                        <img src="../images/tejas_pradeep_profile_pic.jpg" alt="tejas_profile_pic"/>
                    </Link>
                    <div id={'contact-sm'}>
                        <a href = "mailto: rptejas@gatech.edu"><i className="fas fa-envelope"/> rptejas@gatech.edu</a>
                        <br/>
                        <a href="tel:+1 512-665-0710"><i className="fas fa-p hone"/> +1 (512)665-0719</a>
                    </div>
                    <div className={'menu-icon'} onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? "nav-menu-active" : "nav-menu"}>
                        <li className={'nav-item'} onClick={handleActive(this)}>
                            <Link to={"/"} className={"nav-links active"} onClick={closeMobileMenu}>
                                Me!
                            </Link>
                        </li>
                        <li className={'nav-item'} onClick={handleActive(this)}>
                            <Link to={"/skills"} className={"nav-links"} onClick={closeMobileMenu}>
                                Skills
                            </Link>
                        </li>
                        <li className={'nav-item'} onClick={handleActive(this)}>
                            <Link to={"/timeline"} className={"nav-links"} onClick={closeMobileMenu}>
                                Timeline
                            </Link>
                        </li>
                    </ul>
                    <a href={'../Downloads/Tejas_Pradeep_Resume.pdf'} download={"Tejas_Pradeep_Resume"}>
                        <button id={"resume-button"}><i className={"fas fa-download"}/> Download Resume</button>
                    </a>
                </div>
            </nav>
        </div>
    );

}
export default Header;
