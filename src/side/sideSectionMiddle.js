import React, { Component } from 'react';
import './Side.css';

class SideSectionMiddle extends Component {
    render() {
        return (
            <div className="middle">
                <section className="sectionpart">
                    <div className="innersection">
                        <div className="sectionheads">Interface</div>
                        <select className="selectiondrop">
                            <option value="ner" id="ner">Named Entities</option>
                            <option value="ner_manual" id="ner_manual">Named Entities (manual)</option>
                            <option value="pos_manual" id="pos_manual">POS Tagging (manual)</option>
                            <option value="dep" id="dep">Dependencies</option>
                            <option value="textcat" id="textcat">Text classification</option>
                            <option value="image_manual" id="image_manual">Image (manual)</option>
                            <option value="objectdet" id="objectdet">Object Detection</option>
                            <option value="imageseg" id="imageseg">Image Segmentation</option>
                            <option value="textchoice" id="textchoice">Single Choice (Text)</option>
                            <option value="imgchoice" id="imgchoice">Multiple Choice (Image)</option>
                            <option value="compare" id="compare">A/B Evaluation</option>
                            <option value="diff" id="diff">Diff</option>
                            <option value="html" id="html">Custom HTML</option>
                        </select>
                    </div>
                    <div className="innersection">
                        <div className="sectionheads">Theme</div>
                        <select className="selectiondrop">
                            <option value="basic" id="basic">Basic</option>
                            <option value="eighties" id="eighties">Eighties</option>
                            <option value="spacy" id="spacy">spaCy</option>
                            <option value="brutalist" id="brutalist">Brutalist</option>
                        </select>
                    </div>
                </section>
                <section className="sectionpart">
                        <h3 className="sectionheader">Project Info</h3>
                        <div className="innersection">
                            <div className="sectionheads">Dataset</div>prodigy_demo</div>
                        <div className="innersection">
                            <div className="sectionheads">View ID</div>ner</div>
                        <div className="innersection">
                            <div className="sectionheads">Author</div>Explosion AI</div>
                    </section>
                    <section className="sectionpart">
                        <h3 className="sectionheader">Progress</h3>
                        <div className="innersection">
                            <div className="sectionheads">This session</div>1
                        </div>
                        <div className="innersection">
                            <div className="sectionheads">Total</div>1
                        </div>
                        <div className="sideprogress">
                            <progress className="prgs" max="100" value="0"></progress>
                            <div className="prgspercent">0%</div>
                        </div>
                    </section>
                    
            </div>
        );
    }
}

export default SideSectionMiddle;
