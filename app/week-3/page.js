import Item from "./item";
import ItemList from "./item-list";

export default function Page(){
    let items = ItemList();
    return(
        <main>
            <div className="flex justify-center p-3 m-3">
                <h1 className="text-4xl font-bold text-[#DC143C]">Shopping List</h1>
            </div>
            <div className="flex flex-wrap justify-center p-3 m-3">
                {items.map((item, index) => (
                    <Item key={index} props={item}/>
                ))}
            </div>

        </main>
    )

}