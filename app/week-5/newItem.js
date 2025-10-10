"use client"

import {useState} from "react";

export default function NewItem(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("produce");
    let buttonStyle1 = "py-2 px-4 m-1 bg-[#F7CAC9]/75 rounded-lg hover:scale-105 transition-transform text-[#FDEBD0] hover:text-amber-50 text-3xl font-semibold cursor-pointer";
    let buttonStyle2 = "py-2 px-5 m-1 bg-[#DC143C] rounded-lg hover:scale-105 transition-transform text-[#F7CAC9] hover:text-amber-50 text-3xl font-semibold cursor-pointer";
    let alertText = "Quantity must be between 1 and 20!";
    let invisible = "invisible";

    if (quantity < 1){
        setQuantity(1);
    }

    const nameFormHandler = (event) =>
    {
        setName(event.target.value);
    }

    const increment = () => {
        if(quantity >= 20){
            setQuantity(20);
            return;
        }
        else{
            setQuantity(quantity + 1);
        }
        
    }
    
    const decrement = () => {
        if(quantity <= 1){
            setQuantity(1);
            return;
        }
        else{
            setQuantity(quantity - 1);
        }
        
    }

    if (quantity <= 1){
        buttonStyle2 = "py-2 px-5 m-1 hover:scale-105 transition-transform bg-[#DC143C]/25 rounded-lg text-[#F7CAC9] text-3xl";
        invisible = "visible text-red-600 font-bold";
    }
    if (quantity >= 20){
        buttonStyle1 = "py-2 px-4 m-1 hover:scale-105 transition-transform bg-[#F7CAC9]/25 rounded-lg text-[#FDEBD0] text-3xl";
        invisible = "visible text-red-600 font-bold";
    }

    return(
        <form className="flex justify-center m-4 w-auto h-auto bg-[#F7CAC9]/75 rounded-2xl flex-col">
            <h1 className="p-4 m-4 text-4xl text-[#F75270] font-bold text-center text-shadow-lg/8">Adding a New Item</h1>
            <div className="p-4">
                <input className="p-4 max-w-lg bg-[#F75270] border-[#DC143C] rounded-lg" onChange={nameFormHandler} value={name} placeholder="Item Name" requiered></input>
            </div>
            <div className="p-4 flex justify-center items-center flex-col">
                <div className="max-w-lg rounded-lg bg-[#F75270] flex justify-center items-center p-4">
                    <button onClick={decrement} className={buttonStyle2} type="button">
                        -
                    </button>
                    <button onClick={increment} className={buttonStyle1} type="button">
                        +
                    </button>
                    <label className="text-[#F7CAC9] text-2xl h-auto w-auto rounded-lg bg-[#DC143C]/55 text-center font-semibold p-6 m-2">Quantity: {quantity}</label>
                </div>
                <p className={invisible}>{alertText}</p>
            </div>
        </form>

    )
}