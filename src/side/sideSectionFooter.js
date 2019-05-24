import React, { Component } from 'react';
import './Side.css';

class SideSectionFooter extends Component {
    render() {
        return (
            <div>
                <footer className="sidefooter">
                    <a href="https://explosion.ai" target="_blank">© 2018 Explosion AI</a>
                    <a href="https://prodi.gy" target="_blank">(<strong>Prodigy</strong> v1.5.1)</a>
                </footer>
            </div>
        );
    }
}

export default SideSectionFooter;