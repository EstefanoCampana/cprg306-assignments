import Link from "next/link";
import Image from "next/image";

export default function StudentInfo(){
    return(
        <div className="flex justify-center m-4 w-auto h-auto bg-[#DC143C]/75 rounded-2xl">
                <div className="flex m-4 bg-[#DC143C] w-400 h-130 rounded-2xl">
                    <div className="flex justify-center-safe p-3">
                        <div className="self-start-safe p-3 flex flex-col items-center">
                            <div className="rounded-full w-40 h-40 bg-[#FDEBD0]/10 border-4 border-[#FDEBD0]">
                                <Image className="rounded-full" src="/latest.png" alt="Profile" width={500} height={500}/>
                            </div>
                            <div className="text-2xl text-[#FDEBD0] font-bold m-3 text-shadow-lg/20">Estefano Campana</div>
                            <ul>
                                <li className="text-[#FDEBD0]/60 font-bold text-lg">VideoGames</li>
                                <ul className="list-disc list-inside pl-5">
                                    <li className="text-[#FDEBD0]/60 hover:text-[#F75270] font-bold text-lg">
                                        <Link href="https://osu.ppy.sh/users/19492935" target="_blank">osu!</Link>
                                    </li>
                                    <li className="text-[#FDEBD0]/60 hover:text-[#F75270] font-bold text-lg">Geometry Dash</li>
                                    <li className="text-[#FDEBD0]/60 hover:text-[#F75270] font-bold text-lg">Balatro</li>
                                </ul>
                                <li className="text-[#FDEBD0]/60 hover:text-[#F75270] font-bold text-lg">Anime</li>
                                <li className="text-[#FDEBD0]/60 hover:text-[#F75270] font-bold text-lg">Music</li>
                                <li className="text-[#FDEBD0]/60 hover:text-[#F75270] font-bold text-lg">Japanese Culture</li>
                                <li className="text-[#FDEBD0]/60 hover:text-[#F75270] font-bold text-lg">Cycling</li>
                            </ul>
                        </div>
                        
                        <button className="p-3 m-3 text-[#FDEBD0]/70 hover:text-[#F75270] bg-[#bf1839]/50 rounded-lg hover:scale-105 transition-transform self-end-safe">
                            <Link href="https://github.com/EstefanoCampana/cprg306-assignments" target="_blank">GitHub Repository</Link>
                        </button>
                    </div>
                </div>
        </div>
    )
               
}