export default function Btn(props) {
    return <>
        <button className="general-btn" style={props.style} type={props.type}>{props.children}</button>
    </>
}