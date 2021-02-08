import { ReactElement } from 'react';

import './Navbar.scss';

function Navbar(): ReactElement {
    return (
        <div className="Navbar">
            <div className="Navbar-items">
                <h3>CREATE</h3>
                <h3>STORIES</h3>
                <h3>FOR YOU</h3>
            </div>
            <div className="Navbar-center">
                <h3>TITLE</h3>
            </div>
            <div className="Navbar-items">
                <h3>SEARCH</h3>
                <h3>ABOUT</h3>
                <h3>CART</h3>
            </div>
        </div>
    );
}

export default Navbar;
