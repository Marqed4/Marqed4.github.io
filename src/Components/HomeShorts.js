import { useRef, useState } from "react"
import MDRLAbsGroovingVideoPreview from "../Resources/art/Shorts/MDR Labs Grooving/MDR Labs Grooving.mp4"
import MDRLAbsGroovingThumbnail from "../Resources/art/Shorts/MDR Labs Grooving/MDR Labs Grooving.jpg"

const ShortsList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);

    const shorts = [
        { label: "MDR Grooving", src: MDRLAbsGroovingVideoPreview, thumbnail: MDRLAbsGroovingThumbnail },
    ];

    return (
        <div className = "ShortsContainer">

            <div className = "ShortsDropdown">
                <button
                    className = "dropdown-toggle-shorts"
                    onClick = {() => setIsOpen(prev => !prev)}>
                    {isOpen ? "▲ Hide Shorts" : "▼ Show Shorts"}
                </button>

                <div className={`dropdown-list-edits ${isOpen ? "open" : ""}`}>
                        {shorts.map((video) => (
                            <div
                                key = {video.label}
                                className = "video-player-item-shorts"
                                onClick = {() => setActiveVideo(video)}>
                                <img src = {video.thumbnail} alt = {video.label} className = "shorts-thumbnail" />
                                <span className = "play-button-shorts">Preview {video.label} 🎥</span>
                            </div>
                        ))}
                    </div>
            </div>

            <div className = "ShortsWindow">
                {activeVideo && (
                    <div className = "video-container-shorts">
                        <button className = "play-button-shorts" onClick = {() => setActiveVideo(null)}>✕ Stop</button>
                        <video
                            src = {activeVideo.src}
                            autoPlay
                            playsInline
                            onPlay = {(e) => e.target.volume = 0.05}
                            onEnded = {() => setActiveVideo(null)}
                        />
                    </div>
                )}
            </div>

        </div>
    );
};

export default ShortsList;