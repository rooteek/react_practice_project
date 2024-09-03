import { Card } from "./Card"
import { useEffect, useState } from "react"

function Cards() {

    let [recipe, setRecipes] = useState([]);

    const fetchRecipe = () => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then((data) => {
                // if (data.recipes.length > 0) {
                    setRecipes(data.recipes)
                // }
            });

    }

    // const fetchUserData = () => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             setUsers(data)
    //         })
    //         console.log(users)
    // }
    useEffect(() => {
        fetchRecipe()
    }, []);

    // console.log("tett", recipe)
    return (
        <div className="flex flex-wrap border border-black gap-5 mt-4 justify-center">
            {recipe.map((item) => {
                return <Card key={item.id} name={item.name} image={item.image} description={item.ingredients[0] + item.ingredients[1]} />
            })}
        </div>
    )
}
export { Cards }