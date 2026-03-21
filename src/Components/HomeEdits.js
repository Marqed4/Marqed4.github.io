import { useRef, useState } from "react"
import DemandsVideoPreview from "../Resources/art/Background Project/Edits/Demands/Demands.webm"
import DemandsThumbnail from "../Resources/art/Background Project/Edits/Demands/Demands.jpg"
import SecularVideoPreview from "../Resources/art/Background Project/Edits/Secular/Secular.webm"
import SecularThumbnail from "../Resources/art/Background Project/Edits/Secular/Secular.jpg"

const VideoPlayer = ({ src, label, thumbnail }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [gifKey, setGifKey] = useState(0);
    const videoRef = useRef(null);

    const handlePlay = () => {
        if (!isPlaying) {
            setGifKey(prev => prev + 1);
            setIsPlaying(true);
        } else {
            videoRef.current?.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className = "videoPlayer">
            {isPlaying ? (
                <video
                    key = {gifKey}
                    ref = {videoRef}
                    src = {src}
                    autoPlay
                    playsInline
                    onPlay = {() => videoRef.current.volume = 0.05}
                    onEnded = {() => setIsPlaying(false)}
                />
            ) : (
                <img
                    src = {thumbnail}
                    alt = {label}
                    className = "video-thumbnail"
                    onClick = {handlePlay}
                />
            )}
            <button className = "play-button" onClick = {handlePlay}>
                {isPlaying ? "Stop" : `Preview ${label} 🎥`}
            </button>
        </div>
    );
};

const EditsList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);

    const videos = [
        { label: "Demands", src: DemandsVideoPreview, thumbnail: DemandsThumbnail },
        { label: "Secular", src: SecularVideoPreview, thumbnail: SecularThumbnail },
    ];

    return (
        <div className = "EditsContainer">

            <div className = "EditsDropdown">
                <button
                    className = "dropdown-toggle"
                    onClick = {() => setIsOpen(prev => !prev)}>
                    {isOpen ? "▲ Hide Edits" : "▼ Show Edits"}
                </button>

                {isOpen && (
                    <div className = "dropdown-list">
                        {videos.map((video) => (
                            <div
                                key = {video.label}
                                className = "video-player-item"
                                onClick = {() => setActiveVideo(video)}>
                                <img src = {video.thumbnail} alt = {video.label} className = "video-thumbnail" />
                                <span className = "play-button">Preview {video.label} 🎥</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className = "EditsWindow">
                {activeVideo && (
                    <div className = "video-container">
                        <button className = "play-button" onClick = {() => setActiveVideo(null)}>✕ Stop</button>
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