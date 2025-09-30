import Link from "next/link";
import Image from "next/image";

export default function StudentInfo(){
    return(
        <div className="flex justify-center m-4 w-auto h-auto bg-[#DC143C]/75 rounded-2xl">
                <div className="flex m-4 bg-[#DC143C] w-400 h-130 rounded-2xl">
                    <div className="flex justify-center-safe p-3">
                        <div className="self-start-safe p-3 m-3 ml-10 mr-20 flex flex-col items-center">
                            <div className="rounded-full w-40 h-40 bg-[#FDEBD0]/10 border-4 border-[#FDEBD0]">
                                <Image className="rounded-full" src="/latest.png" alt="Profile" width={500} height={500}/>
                            </div>
                            <div className="text-2xl text-[#FDEBD0] font-bold m-3 text-shadow-lg/20">Estefano Campana</div>
                            <ul>
                                <li className="text-[#FDEBD0]/60 font-bold text-lg">- VideoGames</li>
                                <ul className="list-disc list-inside pl-5">
                                    <li className="text-[#FDEBD0]/60 hover:text-[#F75270] font-bold text-lg">
                                        <Link href="https://osu.ppy.sh/users/19492935" target="_blank">osu!</Link>
                                    </li>
                                    <li className="text-[#FDEBD0]/60 hover:text-[#F75270] font-bold text-lg">
                                        <Link href="https://steamcommunity.com/profiles/76561198363437532/" target="_blank">Geometry Dash</Link>
                                    </li>
                                </ul>
                                <li className="text-[#FDEBD0]/60 font-bold text-lg">- Anime</li>
                                <li className="text-[#FDEBD0]/60 font-bold text-lg">- Music</li>
                                <ul className="list-disc list-inside pl-5">
                                    <li className="text-[#FDEBD0]/60 hover:text-[#F75270] font-bold text-lg">
                                        <Link href="https://open.spotify.com/intl-es/album/0CA2EVHhRPR5VPV78KZw89" target="_blank">The Mars Volta</Link>
                                    </li>
                                    <li className="text-[#FDEBD0]/60 hover:text-[#F75270] font-bold text-lg">
                                        <Link href="https://open.spotify.com/intl-es/album/5CbR8ON5LyfqRdOfIcMTUh" target="_blank">Yousei Teikoku</Link>
                                    </li>
                                </ul>
                                <li className="relative group text-[#FDEBD0]/60 hover:text-[#F75270] font-bold text-lg">
                                    - 今、日本語を勉強しています
                                    <div className="absolute p-3 bg-[#F75270] text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ">
                                        I am trying to learn japanese now.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <iframe className="p-3 bg-[#FDEBD0]/85 rounded-sm self-center-safe" width="540" height="315" src="https://www.youtube.com/embed/Z-MdM5dz954?si=G7lvPQ0g9ExdNosy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                        
                        <button className="m-3 p-3 text-[#FDEBD0]/70 hover:text-[#F75270] bg-[#bf1839]/50 rounded-lg hover:scale-105 transition-transform self-end-safe">
                            <Link className="p-3" href="https://github.com/EstefanoCampana/cprg306-assignments" target="_blank">GitHub Repository</Link>
                        </button>
                    </div>
                </div>
        </div>
    )
               
}