import Carrossel from "@/app/componentes/Carrossel";
import Navbar from "@/app/componentes/navbar";
import Rodape from "@/app/componentes/rodape";
import { Suspense} from "react";
import Link from 'next/link'
import { getUsers } from "@/app/functions/handlerAcessAPI";
import Fallback from "@/app/componentes/fallback";

export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div>
            <Suspense fallback={<Fallback />}>
           
           <div className="geral">
            <Navbar/>
        
            <div className="flex justify-center items-center w-100">
                <Carrossel/>
            </div>

            <div className="grid place-items-center gap-5 mb-24">

                {users.map(user => (
                    <div className="usuario"  key={user.id}>
                        <Link href={`/pages/alter/${user.id}`}>
                        <h1  className="font-bold text-2xl">{user.name}</h1>
                        <p className='text-lg mt-2 mb-4'> {user.email}</p>
                        </Link>
                    </div>
                ))}
        
            </div>
            <Rodape/>
            
        </div>
        </Suspense>
        </div>
    );
};