import React from 'react'
import "./RadialMenu.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch, faShoppingCart, faUser, faTshirt} from '@fortawesome/free-solid-svg-icons'


function RadialMenu() {
    return (
      <div id="circularMenu" className="radialMenu">
        <Link className="radialMenu_button" onClick={()=>{document.getElementById('circularMenu').classList.toggle('active')}}>
            <FontAwesomeIcon icon={faPlus} className="icon"/>
            {/* <i className="fa fa-plus"></i> */}
        </Link>
      
        <menu className="radialMenu_optionWrapper">
            <Link to="#" className="radialMenu_option">
                <FontAwesomeIcon icon={faSearch}/>
            </Link>
            <Link to="#" className="radialMenu_option">
                <FontAwesomeIcon icon={faShoppingCart}/>
            </Link>
            <Link to="#" className="radialMenu_option">
                <FontAwesomeIcon icon={faUser}/>
            </Link>
            <Link to="#" className="radialMenu_option">
                <FontAwesomeIcon icon={faTshirt}/>
            </Link>
        </menu>
    
      </div>
    
    )
}

export default RadialMenu
