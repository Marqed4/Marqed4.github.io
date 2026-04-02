import { useState } from "react"
import HomeEdits from "./HomeEdits"
import HomeShorts from "./HomeShorts"

import ShowContentInactive from "../Resources/art/Background Project/Gradients/Preview Content Inactive.gif"
import ShowContentActive from "../Resources/art/Background Project/Gradients/Hide Content Active.gif"
import DownArrow from "../Resources/art/Background Project/Gradients/Down Arrow Orange Marble Gradient.gif"

const MediaPreviews = () => {
    const [contentOpen, setContentOpen] = useState(false);
    const [openSection, setOpenSection] = useState(null);

    const handleContentToggle = () => {
        setContentOpen(prev => !prev);
        setOpenSection(null);
    };

    return (
        <div className="HomePageMediaPreviews">
            <button 
                className="dropdown-toggle-content" 
                onClick={handleContentToggle}
                style=
                {
                    { 
                        background: 'none', 
                        border: 'none', 
                        padding: 0, 
                        margin: 0, 
                        outline: 'none' 
                    }
                }
            >
                {contentOpen
                    ? <img src={ShowContentActive} alt="Hide Content" />
                    : <img src={ShowContentInactive} alt="Show Content" />
                }
            </button>

            {contentOpen && (
                <div className="ContentDropdownRow">
                    <img src={DownArrow} className="dropdown-down-arrow-one"></img>
                    <HomeEdits
                        isOpen={openSection === "edits"}
                        onToggle={() => setOpenSection(prev => prev === "edits" ? null : "edits")}/>
                    <img src={DownArrow} className="dropdown-down-arrow-two"></img>
                    <HomeShorts
                        isOpen={openSection === "shorts"}
                        onToggle={() => setOpenSection(prev => prev === "shorts" ? null : "shorts")}/>
                </div>
            )}
        </div>
    );
};

export default MediaPreviews;