export default function MenuItem(props) {
    return (
        
        <li>

            <div className="icone">
            {props.icon}
            </div>

            <span className="espacamentoNavMenu"> {props.text}</span>
            
           
           
        </li>
    )
}