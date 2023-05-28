import { useNavigate } from "react-router-dom";
import { ReactComponent as Play } from "../../assets/polygon.svg";
import "./style.css";

export default function HomePage({ }) {
    const navigate = useNavigate();

    function handleClickPlay() {
        navigate("game");
    }
    return (
        <div className="home-page">
            <div className="home-page-player-container">
                <Play
                    className="home-page-player-icon"
                    onClick={handleClickPlay} />
                <div className="home-page-player-text">
                    PLAY
                </div>
            </div>
        </div>
    );
}