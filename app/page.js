import Link from "next/link";

export default function Home(){
  return (
    <main>
      <div className="p-3 m-3 flex justify-center">
      <h1 className="text-4xl text-[#DC143C] font-bold">CPRG306 ASSIGNMENTS</h1>  
      </div>
      <div className="p-3 m-3">
      <ul>
        <li>
          <button className="p-3 m-3 bg-gradient-to-r from-pink-300 to-red-200 rounded-lg hover:scale-105 transition-transform text-pink-600 hover:text-amber-50 font-bold text-3xl">
            <Link href="./week-2">Week 2 Assignment</Link>
          </button>
        </li>
        <li>
          <button className="p-3 m-3 bg-gradient-to-r from-purple-300 to-blue-200 rounded-lg hover:scale-105 transition-transform text-purple-600 hover:text-amber-50 font-bold text-3xl">
            <Link href="./week-3">Week 3 Assignment</Link>
          </button>
        </li>
      </ul>
      </div>
    </main>
  )
}