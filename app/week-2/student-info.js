import Link from "next/link";
import Image from "next/image";

export default function StudentInfo(){
    return(
        <main>
            <div className="background-white-200 p-4 mb-4">
                <Image className="rounded-full w-48 h-48" src="/latest.png" alt="Profile" width={300} height={200}/>
                <h2 className="text-2xl font-bold p-3">Estefano Campana</h2>
                 <Link className="text-teal-400 hover:text-amber-50" href="https://github.com/EstefanoCampana/cprg306-assignments">GitHub Repository</Link>
            </div>
        </main>
    )
               
}