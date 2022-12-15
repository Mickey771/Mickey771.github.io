import { Capitalize } from "./Functions"

export default function Input(props) {
    return <>
        <label htmlFor={props.name}>
            <div className="input-desc">{props.label ? Capitalize(props.label) : <>
                <div style={{ visibility: "hidden" }}>null</div></>}</div>
            <div className="input-content">
                <input className={props.className} type={props.type} placeholder={props.placeholder} id={props.name} name={props.name} autoCorrect="off" autoCapitalize="off" dir="auto" />
            </div>
        </label>
    </>
}