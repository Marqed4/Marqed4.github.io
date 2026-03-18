import { useRef, useState, useEffect } from "react"
import DemandsVideoPreview from "../Resources/art/Background Project/Demands Video Preview.gif"
import DemandsVideoPreviewAudio from "../Resources/art/Background Project/Demands Video Preview Audio.mp3"

const DemandsSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [gifKey, setGifKey] = useState(0);
    const demandsRefAudio = useRef(null);

    useEffect(() => {
        demandsRefAudio.current = new Audio(DemandsVideoPreviewAudio);
        demandsRefAudio.current.loop = true;
        demandsRefAudio.current.volume = 0.00;
    }, []);

    const GIF_DURATION = 18006;

    const handlePlay = () => {
        if (isLoading) return;
        
        setIsLoading(true);
        if (!isPlaying) {
            setGifKey(prev => prev + 1);
            demandsRefAudio.current.currentTime = 0;
            demandsRefAudio.current.volume = 0.05;
            demandsRefAudio.current.play().then(() => {
                setIsPlaying(true);
                setIsLoading(false);
                setTimeout(() => {
                demandsRefAudio.current.volume = 0.00;
                setIsPlaying(false);
            }, GIF_DURATION);
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
        <div className = "Demands-gif-and-sound-logic-section">
            {isPlaying && <img key={gifKey} src={`${DemandsVideoPreview}?v=${gifKey}`} alt="Demands-preview"/>}
        </div>
        <div className = "Demands-play-button-container">
            <button className = "play-button" onClick = {handlePlay}>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    </>
    );
};

export default DemandsSection;