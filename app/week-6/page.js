
import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="p-4">
            <div className="flex justify-center p-3 m-3">
                <h1 className="text-4xl font-bold text-[#DC143C]">Shopping List</h1>
            </div>
            <ItemList/>

        </main>
    )

}