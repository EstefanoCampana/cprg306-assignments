"use client"

import {useState} from "react";

export default function NewItem(){

    const [itemName, setName] = useState("");
    const [itemQuantity, setQuantity] = useState(0);
    const [itemCategory, setCategory] = useState("Produce");
    let buttonStyle1 = "py-2 px-4 m-1 bg-[#F7CAC9]/75 rounded-lg hover:scale-105 transition-transform text-[#FDEBD0] hover:text-amber-50 text-3xl font-semibold cursor-pointer";
    let buttonStyle2 = "py-2 px-5 m-1 bg-[#DC143C] rounded-lg hover:scale-105 transition-transform text-[#F7CAC9] hover:text-amber-50 text-3xl font-semibold cursor-pointer";
    let alertText = "Quantity must be between 1 and 20!";
    let invisible = "invisible";

    if (itemQuantity < 1){
        setQuantity(1);
    }

    const nameFormHandler = (event) =>
    {
        setName(event.target.value);
    }

    const categoryFormHandler = (event) =>
    {
        setCategory(event.target.value);
    }

    const reset = () =>
    {
        setQuantity(1);
        setName("");
        setCategory("Produce");
    }

    const submitHandler = (event) =>
    {
        event.preventDefault();

        let newItem = {
            name: itemName,
            category: itemCategory,
            quantity: itemQuantity
        }
        alert(`Your new item is ${newItem.name}, with category ${newItem.category} and quantity of ${newItem.quantity}.`);
        reset();
    }

    const increment = () => {
        if(itemQuantity >= 20){
            setQuantity(20);
            return;
        }
        else{
            setQuantity(itemQuantity + 1);
        }
        
    }
    
    const decrement = () => {
        if(itemQuantity <= 1){
            setQuantity(1);
            return;
        }
        else{
            setQuantity(itemQuantity - 1);
        }
        
    }

    if (itemQuantity < 1){
        buttonStyle2 = "py-2 px-5 m-1 hover:scale-105 transition-transform bg-[#DC143C]/25 rounded-lg text-[#F7CAC9] text-3xl";
        invisible = "p-1 visible text-red-600 font-bold";
    }
    if (itemQuantity > 20){
        buttonStyle1 = "py-2 px-4 m-1 hover:scale-105 transition-transform bg-[#F7CAC9]/25 rounded-lg text-[#FDEBD0] text-3xl";
        invisible = "p-1 visible text-red-600 font-bold";
    }

    return(
        <form className="m-4 w-auto h-auto bg-[#F7CAC9]/75 rounded-2xl">
            <div className="flex justify-center items-center m-4 w-auto h-auto flex-col">
                <h1 className="p-4 m-4 text-4xl text-[#F75270] font-bold text-center text-shadow-lg/8">Adding a New Item</h1>
                <div className="flex justify-center items-center m-4 w-auto h-auto flex-col">
                    <div className="p-1">
                        <div className="p-2 max-w-lg bg-[#F75270] border-[#DC143C] rounded-lg">
                            <input required className="p-2 max-w-lg bg-[#FFFFFF]/85 rounded-lg" onChange={nameFormHandler} value={itemName} placeholder="Item Name"></input>
                        </div>
                    </div>
                    <div className="p-1">
                        <div className="p-2 max-w-lg bg-[#F75270] border-[#DC143C] rounded-lg">
                            <select className="p-2 max-w-lg bg-[#FFFFFF]/85 rounded-lg" onChange={categoryFormHandler} value={itemCategory}>
                                <option value="Produce">Produce</option>
                                <option value="Daily">Daily</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Meat">Meat</option>
                                <option value="Frozen Goods">Frozen Goods</option>
                                <option value="Canned Goods">Canned Goods</option>
                                <option value="Beverages">Beverages</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Household">Household</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="p-1 flex justify-center items-center flex-col">
                        <div className="max-w-lg rounded-lg bg-[#F75270] flex justify-center items-center p-1">
                            <button onClick={decrement} className={buttonStyle2} type="button">
                                -
                            </button>
                            <button onClick={increment} className={buttonStyle1} type="button">
                                +
                            </button>
                            <label className="text-[#F7CAC9] text-lg h-auto w-auto rounded-lg bg-[#DC143C]/55 text-center font-semibold p-4 m-2">{itemQuantity}</label>
                        </div>
                        <p className={invisible}>{alertText}</p>
                    </div>
                    <button onClick={submitHandler} className="py-2 px-5 bg-[#DC143C] rounded-lg hover:scale-105 transition-transform text-[#F7CAC9] hover:text-amber-50 text-3xl font-semibold cursor-pointer" type="submit">
                        Submit
                    </button>
                </div>
            </div>
        </form>

    )
}