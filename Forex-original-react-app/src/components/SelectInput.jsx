import { Capitalize } from "./Functions";

export default function Input(props) {
    return <>
        <label htmlFor={props.name}>
            <div className="input-desc">{Capitalize(props.label)}</div>
            <div className="input-content">
                <select className={props.className} id={props.name} name={props.name} autoCorrect="off" autoCapitalize="off" dir="auto" >
                    {props.children}
                </select>
            </div>
        </label>
    </>
}