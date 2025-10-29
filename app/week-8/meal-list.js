"use client"

import MealComp from "./meal.js"
import {useState, useEffect} from "react"

export default function MealListComp({itemName}){

    const [mealList, setMealList] = useState([]);

    /**DONT CALL THIS FUNCTION IN THE CODE PART, IT WILL CREATE A DOS ATTACK */
    async function getMeal(){
        try
        {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${itemName}`);
            const data = await response.json();

            console.dir(data);
            let mealArray = data.meals;
            let mealCopyArray = [];
            for (let i = 0; i < mealArray.length; i++) {
                let thisMeal = mealArray[i];
                mealCopyArray.push(thisMeal);
            }
            setMealList(mealCopyArray);
        }
        catch (error)
        {
            console.log(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        if (!itemName) return;
        getMeal();
    }, [itemName]);
    return(
        <div>
            {mealList.map((meal) => (<MealComp key={meal.idMeal} mealObj={meal}/>))}
        </div>
    )
}