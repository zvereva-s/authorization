function Button({text, type, onClick}) {
    return (
        <button type={type} onClick={onClick}>{text}</button>
    )
 };
export default Button;


Button.defaultProps = {
    type: 'button',
    onClick: () => { },
    text:'blabla',
}