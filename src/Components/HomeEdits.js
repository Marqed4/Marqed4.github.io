import { useState } from "react"
import DemandsVideoPreview from "../Resources/art/Edits/Demands/Demands.webm"
import DemandsThumbnail from "../Resources/art/Edits/Demands/Demands.jpg"
import SecularVideoPreview from "../Resources/art/Edits/Secular/Secular.webm"
import SecularThumbnail from "../Resources/art/Edits/Secular/Secular.jpg"
import AffirmationsVideoPreview from "../Resources/art/Edits/Affirmations/Affirmations.webm"
import AffirmationsThumbnail from "../Resources/art/Edits/Affirmations/Affirmations.jpg"

const EditsList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);

    const videos = [
        { label: "Demands", src: DemandsVideoPreview, thumbnail: DemandsThumbnail },
        { label: "Secular", src: SecularVideoPreview, thumbnail: SecularThumbnail },
        { label: "Affirmations", src: AffirmationsVideoPreview, thumbnail: AffirmationsThumbnail },
    ];

    return (
        <div className = "EditsContainer">

            <div className = "EditsDropdown">
                <button
                    className = "dropdown-toggle-edits"
                    onClick = {() => setIsOpen(prev => !prev)}>
                    {isOpen ? "▲ Hide Edits" : "▼ Show Edits"}
                </button>

                {isOpen && (
                    <div className = "dropdown-list-edits">
                        {videos.map((video) => (
                            <div
                                key = {video.label}
                                className = "video-player-item-edits"
                                onClick = {() => setActiveVideo(video)}>
                                <img src = {video.thumbnail} alt = {video.label} className = "video-thumbnail" />
                                <span className = "play-button-edits">Preview {video.label} 🎥</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className = "EditsWindow">
                {activeVideo && (
                    <div className = "video-container-edits">
                        <button className = "play-button-edits" onClick = {() => setActiveVideo(null)}>✕ Stop</button>
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

export default EditsList;