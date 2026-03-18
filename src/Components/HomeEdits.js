import { useRef, useState, useEffect } from "react"
import DemandsVideoPreview from "../Resources/art/Background Project/Demands Video Preview.gif"
import DemandsVideoPreviewAudio from "../Resources/art/Background Project/Demands Video Preview Audio.mp3"

const DemandsSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const demandsRefAudio = useRef(null);

    useEffect(() => {
        demandsRefAudio.current = new Audio(DemandsVideoPreviewAudio);
        demandsRefAudio.current.loop = true;
        demandsRefAudio.current.volume = 0.05;
    }, []);

        const handleResize = () => {
        if (window.innerWidth <= 390 && isPlaying) {
            demandsRefAudio.current.volume = 0.01;
            setIsPlaying(false);
        }
    };

    const handlePlay = () => {
        if (isLoading) return;
        
        setIsLoading(true);
        if (!isPlaying) {
            demandsRefAudio.current.volume = 0.05;
            demandsRefAudio.current.play().then(() => {
                setIsPlaying(true);
                setIsLoading(false);
            }).catch((err) => {
                console.log("error:", err);
                setIsLoading(false);
            });
        } else {
            demandsRefAudio.current.volume = 0.00;
            setIsPlaying(false);
            setIsLoading(false);
        }

        
    };

    return (
    <>
        <div className="Demands-gif-and-sound-logic-section">
            {isPlaying && <img src={DemandsVideoPreview} alt="Demands-preview"/>}
        </div>
        <div className="Demands-play-button-container">
            <button className="play-button" onClick={handlePlay}>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    </>
    );
};

export default DemandsSection;