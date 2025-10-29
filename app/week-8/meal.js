import {Image} from "react"

export default function MealComp({mealObj}){
    const {
        strMeal,
        strMealThumb,
        idMeal
    } = mealObj

    return(
        <div>
            <h3>{strMeal}</h3>
            { 
            strMealThumb != "" || null && 
            <Image source={strMealThumb} width={50} height={50} alt="meal" />
            }
        </div>
    )

}