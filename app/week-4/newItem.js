"use client"

import {useState} from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(0);
    let buttonStyle1 = "p-3 m-3 bg-[#F75270] rounded-lg hover:scale-105 transition-transform text-[#FDEBD0] hover:text-amber-50 text-3xl font-semibold cursor-pointer";
    let buttonStyle2 = "p-3 m-3 bg-[#DC143C] rounded-lg hover:scale-105 transition-transform text-[#F7CAC9] hover:text-amber-50 text-3xl font-semibold cursor-pointer";
    let alertText = "Quantity must be between 1 and 20!";
    let invisible = "invisible";

    if (quantity < 1){
        setQuantity(1);
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
        buttonStyle2 = "p-3 m-3 hover:scale-105 transition-transform bg-[#DC143C]/25 rounded-lg text-[#F7CAC9] text-3xl";
        invisible = "visible text-red-600 font-bold";
    }
    if (quantity >= 20){
        buttonStyle1 = "p-3 m-3 hover:scale-105 transition-transform bg-[#F75270]/25 rounded-lg text-[#FDEBD0] text-3xl";
        invisible = "visible text-red-600 font-bold";
    }

    return(
        <div className="p-4 flex flex-col justify-center items-center">
            <h1 className="text-4xl text-[#DC143C] font-semibold p-4">Quantity Setter</h1> 
            <div className="h-26 max-w-lg rounded-lg bg-[#F7CAC9] flex justify-center items-center p-4 m-4">
                <div className="text-[#F7CAC9] text-2xl h-auto w-auto rounded-lg bg-[#DC143C]/85 text-center p-6 font-semibold">Current Count: {quantity}</div>
            </div> 
            <div className="flex flex-justify-center items-center">
                <button onClick={increment} className={buttonStyle1}>
                    Add
                </button>
                <button onClick={decrement} className={buttonStyle2}>
                    Subtract
                </button>
            </div>
            <p className={invisible}>{alertText}</p>
        </div>
    )
}