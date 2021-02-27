import React, { ReactElement } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './BoardingPassesPage.scss';

function BoardingPassesPage(): ReactElement {
    window.onbeforeunload = () => window.scrollTo(0, 0);

    return (
        <div className="BoardingPasses-page font-aktiv-grotesk">
            <Navbar />
        </div>
    );
}

export default BoardingPassesPage;
