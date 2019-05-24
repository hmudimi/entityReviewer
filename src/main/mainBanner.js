import React, { Component } from 'react';
import './Main.css';

class MainBanner extends Component {

    getSelectedText = (e) => {
        // Get Selection
        // alert(window.getSelection().toString(),"This is the Text you have Selected " );
        console.log(window.getSelection().toString());
        var text = window.getSelection().toString();

        if (text.rangeCount && text.getRangeAt) {
        var range = text.getRangeAt(0);
        }
        // Set design mode to on
        document.designMode = "on";
        if (range) {
        text.removeAllRanges();
        text.addRange(range);
        }
        // Colorize text
        document.execCommand("ForeColor", false, "black");
        // document.execCommand("hiliteColor", false, "#ffe184");
        // document.execCommand("bold", false);
        document.execCommand("fontSize", false, 5);
        document.execCommand("formatBlock", false, "font");
        var listId = window.getSelection().focusNode.parentNode;
        listId.classList = 'mark1';
        // Set design mode to off
        document.designMode = "off";
    }
    // getSelectedTextcolored = (e) => { }
    
    render() {
        return (
             <div className="mainBanner">
                <div className="prodigy-container">
                        <div className="prodigy-content content1 content2 content3">
                            <div className="innercontent">
                                <span onMouseUp = {this.getSelectedText} id= "text">
                                Yahoo Reveals Work Force Data, Joining Tech's Small Diversity Parade. 
                                </span>
                            </div>
                        </div>
                        <div className="source prodigy-meta">
                            <span> <strong>SOURCE: </strong>The New York Times </span>
                        </div>
                </div> 
            </div>
        );
    }
}

export default MainBanner;