import Link from "next/link";

export default function Home(){
  return (
    <main>
      <div className="p-3 m-3">
      <h1 className="text-4xl">CPRG306 ASSIGNMENTS</h1>  
      </div>
      <div className="p-3 m-3">
      <ul>
        <li>
          <Link className="text-teal-400 hover:text-amber-50 font-bold text-3xl" href="./week-2">Week 2 Assignment</Link>
        </li>
        <li>
          <Link className="text-teal-400 hover:text-amber-50 font-bold text-3xl" href="./week-3">Week 3 Assignment</Link>
        </li>
      </ul>
      </div>
    </main>
  )
}