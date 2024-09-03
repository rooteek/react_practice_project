export function Lable(props) {
    return (
        <label htmlFor={props.forName} className="text-stone-400 font-medium">{props.label}</label>
    )
}