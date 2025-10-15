"use client"

import {useState} from "react"
import items from "./items.json"
import Item from "./item.js"

export default function ItemList()
{
    const [sortBy, setSortBy] = useState("name");

    let itemArray = items.map((item) => ({...item}));
    let buttonStyle1 = "py-2 px-5 bg-[#DC143C] rounded-lg hover:scale-105 transition-transform text-[#F7CAC9] hover:text-amber-50 text-1xl font-semibold cursor-pointer"
    let buttonStyle2 = "py-2 px-4 m-1 bg-[#F7CAC9] rounded-lg hover:scale-105 transition-transform text-[#FDEBD0] hover:text-amber-50 text-1xl font-semibold cursor-pointer"
    const sortHandler = (event) => {
        setSortBy(event.target.value)
    };

    if(sortBy == "name"){itemArray.sort((thisObj, thatObj) => {
        buttonStyle1 = "py-2 px-5 bg-[#DC143C] rounded-lg text-[#F7CAC9] hover:text-amber-50 text-1xl font-semibold cursor-pointer"
        buttonStyle2 = "py-2 px-4 m-1 bg-[#F7CAC9] rounded-lg hover:scale-105 transition-transform text-[#FDEBD0] hover:text-amber-50 text-1xl font-semibold cursor-pointer"
        if(thisObj.name > thatObj.name){
            return 1
        }
        else if(thisObj.name < thatObj.name){
            return -1
        }
        else{
            return 0
        }
    })}

    if(sortBy == "category"){itemArray.sort((thisObj, thatObj) => {
        buttonStyle1 = "py-2 px-4 m-1 bg-[#F7CAC9] rounded-lg hover:scale-105 transition-transform text-[#FDEBD0] hover:text-amber-50 text-1xl font-semibold cursor-pointer"
        buttonStyle2 = "py-2 px-4 m-1 bg-[#DC143C] rounded-lg text-[#FDEBD0] hover:text-amber-50 text-1xl font-semibold cursor-pointer"
        if(thisObj.category > thatObj.category){
            return 1
        }
        else if(thisObj.category < thatObj.category){
            return -1
        }
        else{
            return 0
        }
    })}


    return(
        <div>
            <div className="pl-5">
                <label>Sort By: </label>
                <button value="name" onClick={sortHandler} className={buttonStyle1}>Name</button>
                <button value="category" onClick={sortHandler} className={buttonStyle2}>Category</button>
            </div>
            <div className="flex flex-wrap justify-center p-3 m-3">
                {(itemArray.map((item) => (<Item key={item.id} props={item}/>)))}
            </div>
        </div>
    )
}