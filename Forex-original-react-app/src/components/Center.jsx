export default function Center(props) {

    const styles = {
        alignItems: 'center',
        display: 'flex',
        justifyContent: ' center',
        height: '100vh',
    };

    return <>
        <div style={{ ...styles, ...props.style }}>
            {props.children}
        </div>
    </>
}