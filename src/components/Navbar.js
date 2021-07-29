import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if (window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton (true)
        }

    };

    useEffect(() => {
        showButton()
       
    },[]);

    window.addEventListener('resize', showButton);
    
    return (
        <>
        <IconContext.Provider value = {{color:'#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick= {closeMobileMenu} >
                        Promote
                    </Link>
                    <div className="menu-icon" onClick = {handleClick}>
                        {click ? <FaTimes />: <FaBars />}
                    </div>
                    <ul className = {click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <Link to= "/" className="nav-links" onClick= {closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to= "/Projects" className="nav-links" onClick= {closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to= "/Blogs" className="nav-links" onClick= {closeMobileMenu}>
                                Blogs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to= "/Pricing" className="nav-links" onClick= {closeMobileMenu}>
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to= "/Content" className="nav-links" onClick= {closeMobileMenu}>
                                Content
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className="btn-link">
                                    <Button buttonStyle= 'btn--outline'>Sign up</Button>
                                </Link>
                            ):(
                                <Link to='/sign-up' className="btn-link" onClick= {closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize ='btn--mobile'>Sign up</Button>
                                </Link>
                            )}
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className="btn-link">
                                    <Button buttonStyle= 'btn--outline'>Log In</Button>
                                </Link>
                            ):(
                                <Link to='/sign-up' className="btn-link" onClick= {closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize ='btn--mobile'>Log In</Button>
                                </Link>
                            )}
                        </li>

                    </ul>
                </div>
            </div>

        </IconContext.Provider>
        </>
    )
}

export default Navbar
