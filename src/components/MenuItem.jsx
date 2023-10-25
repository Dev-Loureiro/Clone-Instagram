export default function MenuItem(props) {
    return (
        
        <li>
           {props.icon}
            <span> {props.text}</span>
        </li>
    )
}