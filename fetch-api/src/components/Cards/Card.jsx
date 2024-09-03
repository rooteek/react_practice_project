

function Card(props) {

    return (
        <div className=" border w-96 h-72 overflow-hidden rounded-3xl">
            <img src={props.image} alt="recipeImg" className="w-full object-fill h-48" />
            <div className="p-4">
                <p className="text-xl font-medium">{props.name}</p>
                <p className="text">{props.description}</p>
            </div>
        </div>
    )
}
export { Card }