import { NavLink as Link } from 'react-router-dom';

import { RiBookOpenLine } from 'react-icons/ri';
import { AiOutlineShop } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';

import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-link">
                <h1>Peter</h1>
                <input placeholder="Search Peter"/>
            </div>
            {/* <div className="nav-search">
                <input placeholder="Search Peter"/>
            </div> */}
            <div className="nav-items">
                <button>Get $20 Off</button>
                <Link to="/empty" className="nav-item">
                    <p className="nav-icon"><RiBookOpenLine /></p>
                    <p>Recipes</p>
                </Link>
                <Link to="/products" className="nav-item activeLink">
                    <p className="nav-icon"><AiOutlineShop /></p>
                    <p>Shop</p>
                </Link>
                <Link to="/empty" className="nav-item">
                    <p className="nav-icon"><CgProfile /></p>
                    <p>Profile</p>
                </Link>
                <Link to="/empty" className="nav-item">
                    <p className="nav-icon"><GoSettings /></p>
                    <p>Settings</p>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;