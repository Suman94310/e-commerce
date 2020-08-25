import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi, faSearch, faShoppingCart, faUser, faTshirt} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function Header() {
    return (
        <nav className="header">
            <Link to="/" className="header_logo">
                <FontAwesomeIcon icon={faJedi } size="2x"/>
                Company
            </Link>
            <div className="header_category">
                <div>
                    <Link>
                        CLOTHES
                    </Link>
                </div>
                <div>
                    <Link>
                        UTENSILS
                    </Link>
                </div>
                <div>
                    <Link>
                        ELECTRONICS
                    </Link>
                </div>
            </div>
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <button className="header_searchButton"><FontAwesomeIcon icon={faSearch}/></button>
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <Link to="/checkout"  className="header_checkout">
                        <FontAwesomeIcon icon={faTshirt} size="sm"/>
                    </Link>
                </div>
                <div className="header_option">
                    <Link to="/login" className="header_login">
                        <FontAwesomeIcon icon={faUser} size="sm"/>
                    </Link>
                </div>
                <div className="header_option">
                    <Link to="/checkout"  className="header_checkout">
                        <FontAwesomeIcon icon={faShoppingCart} size="sm"/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header

