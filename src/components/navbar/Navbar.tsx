import { ReactElement } from 'react';

import './Navbar.scss';

function Navbar(): ReactElement {
    return (
        <div className="Navbar">
            <div className="Navbar-items">
                <div>CREATE</div>
                <div>STORIES</div>
                <div>FOR YOU</div>
            </div>
            <div className="Navbar-center">
                <div>TITLE</div>
            </div>
            <div className="Navbar-items">
                <div>SEARCH</div>
                <div>ABOUT</div>
                <div>CART</div>
            </div>
        </div>
    );
}

export default Navbar;
