import './Header.css'
import logo from '../../assets/images/logo.png';
import profileImage from '../../assets/images/profile-header.jpg';
import {NavItem} from '../../components/index';

import { FaBars, FaSearch } from 'react-icons/fa';

import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return(
    <nav className="navbar navbar-expand-lg">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt=''/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
            <FaSearch />
                <input className="form-control me-2" type="text" placeholder="Type Something" aria-label="Search"/>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <NavItem>
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                <NavLink className="nav-link" to="/Browse">Browse</NavLink>
                </NavItem>
                <NavItem>
                <NavLink className="nav-link" to="/Details">Details</NavLink>
                </NavItem>
                <NavItem>
                <NavLink className="nav-link" to="/Streams">Streams</NavLink>
                </NavItem>
                <NavItem>
                <NavLink className="nav-link" to="/Profile">
                    Profile 
                    <img src={profileImage} alt=''/>
                </NavLink>
                </NavItem>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header