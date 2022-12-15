export default function BodyHidden(props) {
    return <>
        <div style={{ overflow: "hidden" }}>
            {props.children}
        </div>
    </>
}