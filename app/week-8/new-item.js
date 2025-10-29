import {useState} from "react";

export default function NewItem({addNewItem}){

    const [itemId, setId] = useState(1);
    const [itemName, setName] = useState("");
    const [itemQuantity, setQuantity] = useState(1);
    const [itemCategory, setCategory] = useState("Produce");
    const [itemSize, setSize] = useState("Bulk");
    const [itemImage, setImage] = useState("🥩");

    let buttonStyle1 = "py-2 px-4 m-1 bg-[#F7CAC9]/75 rounded-lg hover:scale-105 transition-transform text-[#FDEBD0] hover:text-amber-50 text-3xl font-semibold cursor-pointer";
    let buttonStyle2 = "py-2 px-5 m-1 bg-[#DC143C] rounded-lg hover:scale-105 transition-transform text-[#F7CAC9] hover:text-amber-50 text-3xl font-semibold cursor-pointer";
    let alertText = "Quantity must be between 1 and 20!";
    let invisible = "invisible";

    const nameFormHandler = (event) => setName(event.target.value);

    const categoryFormHandler = (event) => setCategory(event.target.value);

    const sizeFormHandler = (event) => setSize(event.target.value);

    const imageFormHandler = (event) => setImage(event.target.value)


    const reset = () =>
    {
        setQuantity(1);
        setName("");
        setCategory("Produce");
        setSize("Bulk");
        setImage("🥩");
    }

    const submitHandler = (event) =>
    {
        event.preventDefault();
        setId(itemId + 1);
        let newItem = {
            id: itemId,
            name: itemName,
            category: itemCategory,
            quantity: itemQuantity,
            size: itemSize,
            emoji: itemImage
        }
        console.log(newItem);
        addNewItem(newItem);
        reset();
    }

    const increment = () => {
        if(itemQuantity > 20){
            setQuantity(21);
            return;
        }
        else{
            setQuantity(itemQuantity + 1);
        }
        
    }
    
    const decrement = () => {
        if(itemQuantity < 1){
            setQuantity(0);
            return;
        }
        else{
            setQuantity(itemQuantity - 1);
        }
        
    }

    if (itemQuantity < 1){
        buttonStyle2 = "py-2 px-5 m-1 bg-[#DC143C]/25 rounded-lg text-[#F7CAC9] text-3xl";
        invisible = "p-1 visible text-red-600 font-bold";
    }
    if (itemQuantity > 20){
        buttonStyle1 = "py-2 px-4 m-1 bg-[#F7CAC9]/25 rounded-lg text-[#FDEBD0] text-3xl";
        invisible = "p-1 visible text-red-600 font-bold";
    }

    return(
        <form className="m-4 w-auto h-auto bg-[#F7CAC9]/75 rounded-2xl">
            <div className="flex items-center m-4 p-4 flex-col">
                <h1 className="pb-4 text-4xl text-[#F75270] font-bold text-center text-shadow-lg/1">Add a New Item!</h1>
                <div className="flex items-center m-4 flex-row">
                    <div className="flex flex-col">
                        <div className="m-1">
                            <div className="p-2 bg-[#F75270] border-[#DC143C] rounded-lg">
                                <input type="text" name="item_name" autoComplete="off" required className="p-2 bg-[#FFFFFF]/85 rounded-lg" onChange={nameFormHandler} value={itemName} placeholder="Item Name"></input>
                            </div>
                        </div>
                        <div className="m-1">
                            <div className="p-2 bg-[#F75270] border-[#DC143C] rounded-lg">
                                <select className="p-2 w-full bg-[#FFFFFF]/85 rounded-lg" onChange={categoryFormHandler} value={itemCategory}>
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
                    </div>
                    <div className="flex justify-center items-center flex-col justify-self-center-safe">
                        <div className="max-w-lg rounded-lg bg-[#F75270] flex justify-center items-center p-1">
                            <button onClick={decrement} className={buttonStyle2} type="button">
                                -
                            </button>
                            <button onClick={increment} className={buttonStyle1} type="button">
                                +
                            </button>
                            <label className="text-[#F7CAC9] text-lg rounded-lg bg-[#DC143C]/55 text-center font-semibold p-4 m-2">{itemQuantity}</label>
                        </div>
                        <p className={invisible}>{alertText}</p>
                    </div>
                    <div className="flex items-center flex-row">
                        <div className="flex flex-col">
                            <div className="m-1">
                                <div className="p-2 bg-[#F75270] border-[#DC143C] rounded-lg">
                                    <input className="p-2 bg-[#FFFFFF]/85 rounded-lg" onChange={sizeFormHandler} value={itemSize} placeholder="Size"></input>
                                </div>
                            </div>
                            <div className="m-1">
                                <div className="p-2 bg-[#F75270] border-[#DC143C] rounded-lg">
                                    <select className="p-2 w-full bg-[#FFFFFF]/85 rounded-lg" onChange={imageFormHandler} value={itemImage}>
                                        <option value="🥩">🥩</option>
                                        <option value="🥚">🥚</option>
                                        <option value="🥓">🥓</option>
                                        <option value="🥖">🥖</option>
                                        <option value="🍰">🍰</option>
                                        <option value="🍪">🍪</option>
                                        <option value="🍦">🍦</option>
                                        <option value="🧂">🧂</option>
                                        <option value="🥫">🥫</option>
                                        <option value="🥛">🥛</option>
                                        <option value="🍶">🍶</option>
                                        <option value="🍇">🍇</option>
                                        <option value="🍉">🍉</option>
                                        <option value="🍋‍🟩">🍋‍🟩</option>
                                        <option value="🍋">🍋</option>
                                        <option value="🍒">🍒</option>
                                        <option value="🍹">🍹</option>
                                        <option value="🥤">🥤</option>
                                        <option value="🍽️">🍽️</option>
                                        <option value="🍴">🍴</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <button onClick={submitHandler} className="py-2 px-5 bg-[#DC143C] rounded-lg hover:scale-105 transition-transform text-[#F7CAC9] hover:text-amber-50 text-3xl font-semibold cursor-pointer disabled" type="submit">
                        Submit
                    </button>
            </div>
        </form>

    )
}