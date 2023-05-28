import "./style.css";

export default function OptionMsg({ children, name, value, onChange}) {
    const id = `abc-${Math.round(Math.random() * 100)}`;
    return (
        <div>

            <input
                type="radio"
                id={id}
                name={name}
                onChange={onChange}
                className="radio-msg"
                value={value} />

            <label htmlFor={id}>{children}</label>
        </div>
    );
}