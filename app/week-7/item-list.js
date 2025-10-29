import {useState} from "react"
import Item from "./item.js"

export default function ItemList({itemArray, removeItem})
{
    const [sortBy, setSortBy] = useState("name");
    const [remove, setRemove] = useState(false);

    let buttonStyle1 = "py-2 px-5 bg-[#DC143C] rounded-lg hover:scale-105 transition-transform text-[#F7CAC9] hover:text-amber-50 text-1xl font-semibold cursor-pointer"
    let buttonStyle2 = "py-2 px-4 m-1 bg-[#F7CAC9] rounded-lg hover:scale-105 transition-transform text-[#FDEBD0] hover:text-amber-50 text-1xl font-semibold cursor-pointer"
    const sortHandler = (event) => {
        setSortBy(event.target.value)
    };

    const removeHandler = () => {
        setRemove(!remove);
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
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="pl-5">
                    <label className="pr-2">Sort By: </label>
                    <button value="name" onClick={sortHandler} className={buttonStyle1}>Name</button>
                    <button value="category" onClick={sortHandler} className={buttonStyle2}>Category</button>
                </div>
                <div className="ml-auto">
                    <button value="remove" onClick={removeHandler} className="py-2 px-5 bg-[#DC143C] rounded-lg hover:scale-105 transition-transform text-[#F7CAC9] hover:text-amber-50 text-1xl font-semibold cursor-pointer">Remove</button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center p-3 m-3">
                {(itemArray.length <= 0 ? <p>Your Shopping list is empty!</p> : itemArray.map((item) => (<Item key={item.id} props={item} removeItem={removeItem} removeBool={remove}/>)))}
            </div>
        </div>
    )
}