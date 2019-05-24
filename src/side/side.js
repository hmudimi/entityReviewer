import React, { Component } from 'react';
import './Side.css';

import SideSectionMiddle from './sideSectionMiddle';
import SideSectionBottom from './sideSectionBottom';
import SideSectionFooter from './sideSectionFooter';

class Side extends Component {
    render() {
        return (
            <div className="sideheader">
                <header className="hdr">
                    <a href="#"><b>Entity Specifier</b></a>
                </header>
                <SideSectionMiddle />
                <SideSectionBottom />
                <SideSectionFooter />

            </div>
        );
    }
}

export default Side;


