import Image from "next/image";

export default function Item({props}){

    let {name, size, quantity, category, emoji} = props;

    return(
        <div className="box-content size-32 border-3 border-dotted border-purple-500 p-3 m-3 rounded-sm">
            <div className="relative size-4">
                <div className="absolute top-0 left-0 size-5 text-[7px] text-center rounded-sm bg-white w-13 h-3">{category}</div>
                <div className="absolute top-0 inset-x-25.5 size-10 text-[7px] text-center rounded-sm bg-white w-8 h-3">{size}</div>
            </div>
            <div className="relative size-1 mb-5">
                <div className="absolute inset-x-8 size-16 rounded-full bg-radial from-pink-100 from-40% to-fuchsia-200 flex justify-center-safe">
                    <div className="text-3xl self-center">{emoji}</div>
                </div>
            </div>
            <div className="relative size-15 mb-1">
                <div className="absolute size-32 pt-10 text-center text-sm">{name}</div>
            </div>
            <div className="relative size-10 rounded-sm bg-white w-32 h-8">
                <div className="absolute bottom-0 inset-x-15.5 text-2xl font-bold">{quantity}</div>
            </div>
        </div>
    )
}