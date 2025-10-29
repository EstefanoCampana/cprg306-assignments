"use client";

import NewItem from "./new-item"
import ItemList from "./item-list"
import items from "./items.json"
import {useState} from "react"

export default function Page(){
    const [itemsArray, setItemsArray] = useState(items.map( (item) => ({...item})));
    const addNewItem = (newItem) => setItemsArray([...itemsArray, newItem]);
    const removeItem = (event) => {
        let thisItemArray = itemsArray.filter((item) => item.id != event.target.id);
        setItemsArray(thisItemArray);
    }
  return(
    <main className="flex flex-col p-4">
        <NewItem addNewItem={addNewItem}/>
        <ItemList itemArray={itemsArray} removeItem={removeItem}/>
    </main>
  )
}