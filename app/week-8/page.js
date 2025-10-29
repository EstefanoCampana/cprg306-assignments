"use client";

import NewItem from "./new-item"
import ItemList from "./item-list"
import items from "./items.json"
import {useState} from "react"
import MealListComp from "./meal-list";

export default function Page(){
    const [itemsArray, setItemsArray] = useState(items.map( (item) => ({...item})));
    const [itemName, setItemName] = useState("")
    const addNewItem = (newItem) => setItemsArray([...itemsArray, newItem]);
    const removeItem = (event) => {
        let thisItemArray = itemsArray.filter((item) => item.id != event.target.id);
        setItemsArray(thisItemArray);
        
    }
    const selectItem = (id) => {
        let thisItem = itemsArray.find(item => item.id === id)
        setItemName(thisItem.name);
    }
  return(
    <main className="flex flex-col p-4">
        <NewItem addNewItem={addNewItem}/>
        <ItemList itemArray={itemsArray} removeItem={removeItem} selectItem={selectItem}/>
        <MealListComp itemName={itemName}/>
    </main>
  )
}