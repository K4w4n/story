import "./style.css";

export default function Message({ children, isPlayer }) {
    const player = isPlayer ? "player" : "other";
    return (
        <div className={`msg-${player}`}>
            <div className="message">
                {children}
            </div>
        </div>
    );
}