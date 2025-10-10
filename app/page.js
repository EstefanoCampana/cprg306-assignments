"use client"

import {useRouter} from "next/navigation"

export default function Home(){
  let buttonLinkStyle1 = "p-3 m-3 bg-[#F75270] rounded-lg hover:scale-105 transition-transform text-[#FDEBD0] hover:text-amber-50 font-bold text-3xl cursor-pointer";
  let buttonLinkStyle2 = "p-3 m-3 bg-[#DC143C] rounded-lg hover:scale-105 transition-transform text-[#F7CAC9] hover:text-amber-50 font-bold text-3xl cursor-pointer";
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  }

  return (
    <main className="p-4">
      <div className="p-3 m-3 flex justify-center">
      <h1 className="text-4xl text-[#DC143C] font-bold">CPRG306 ASSIGNMENTS</h1>  
      </div>
      <div className="p-3 m-3">
      <ul>
        <li>
          <button className={buttonLinkStyle1} onClick={() => navigateTo("./week-2")}>
          Week 2 Assignment
          </button>
        </li>
        <li>
          <button className={buttonLinkStyle2} onClick={() => navigateTo("./week-3")}>
            Week 3 Assignment
          </button>
        </li>
        <li>
          <button className={buttonLinkStyle1} onClick={() => navigateTo("./week-4")}>
            Week 4 Assignment
          </button>
        </li>
        <li>
          <button className={buttonLinkStyle2} onClick={() => navigateTo("./week-5")}>
            Week 5 Assignment
          </button>
        </li>
      </ul>
      </div>
    </main>
  )
}