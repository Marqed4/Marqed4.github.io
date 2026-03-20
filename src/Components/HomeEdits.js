import { useRef, useState } from "react"
import DemandsVideoPreview from "../Resources/art/Background Project/Demands.webm"

const DemandsSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [gifKey, setGifKey] = useState(0);
    const DemandsRef = useRef(null);

    const handlePlay = () => {
        if (!isPlaying) {
            setGifKey(prev => prev + 1);
            setIsPlaying(true);
        } else {
            DemandsRef.current?.pause();
            setIsPlaying(false);
        }
    };

    return (
        <>
            <div className="Demands-gif-and-sound-logic-section">
                {isPlaying && (
                    <video
                        key={gifKey}
                        ref={DemandsRef}
                        src={DemandsVideoPreview}
                        autoPlay
                        playsInline
                        onPlay={() => DemandsRef.current.volume = 0.05}
                        onEnded={() => setIsPlaying(false)}
                    />
                )}
            </div>
            <div className="Demands-play-button-container">
                <button className="play-button" onClick={handlePlay}>
                    {isPlaying ? "Stop" : "Preview Demands 🎥"}
                </button>
            </div>
        </>
    );
};

export default DemandsSection;