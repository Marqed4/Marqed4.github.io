import { useState } from "react"

import ShowShortsInactive from "../Resources/art/Background Project/Gradients/Show Shorts Inactive.gif"
import HideShortsActive from "../Resources/art/Background Project/Gradients/Hide Shorts Active.gif"

import MDRLabsGroovingVideoPreview from "../Resources/art/Shorts/MDR Labs Grooving/MDR Labs Grooving.mp4"
import MDRLabsGroovingThumbnail from "../Resources/art/Shorts/MDR Labs Grooving/MDR Labs Grooving.jpg"

const HomeShorts = ({ isOpen, onToggle }) => {
    const [activeVideo, setActiveVideo] = useState(null);

    const shorts = [
        { label: "MDR Grooving", src: MDRLabsGroovingVideoPreview, thumbnail: MDRLabsGroovingThumbnail },
    ];

    return (
        <div className="ShortsContainer">
            <div className="ShortsDropdown">
                <button className="dropdown-toggle-shorts" onClick={onToggle}>
                    {isOpen
                        ? <img src={HideShortsActive} alt="Hide Shorts" />
                        : <img src={ShowShortsInactive} alt="Show Shorts" />
                    }
                </button>

                <div className={`dropdown-list-shorts ${isOpen ? "open" : ""}`}>
                    {shorts.map((video) => (
                        <div
                            key={video.label}
                            className="video-player-item-shorts"
                            onClick={() => setActiveVideo(video)}
                        >
                            <img src={video.thumbnail} alt={video.label} className="shorts-thumbnail" />
                            <span className="play-button-shorts">Preview {video.label} 🎥</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ShortsWindow">
                {activeVideo && (
                    <div className="video-container-shorts">
                        <button className="play-button-shorts" onClick={() => setActiveVideo(null)}>✕ Stop</button>
                        <video
                            src={activeVideo.src}
                            autoPlay
                            playsInline
                            onPlay={(e) => e.target.volume = 0.05}
                            onEnded={() => setActiveVideo(null)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeShorts;