import Carrossel from "@/app/componentes/carrossel";
import Navbar from "@/app/componentes/navbar";
import Rodape from "@/app/componentes/rodape";
import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div className="geral">
            <Navbar/>
        
            <div className="flex justify-center items-center w-100">
                <Carrossel/>
            </div>

            <div className="grid place-items-center gap-5 mb-24">

                {users.map(user => (

                    <div className="usuario"  key={user.id}>
                        <h1  className="font-bold text-2xl">{user.name}</h1>
                        <p className='text-lg mt-2 mb-4'> {user.email}</p>
                    </div>
                ))}
        
            </div>
            <Rodape/>
            
        </div>
    );
};