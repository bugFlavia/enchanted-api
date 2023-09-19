'use client'
import Navbar from "@/app/componentes/navbar";
import Rodape from "@/app/componentes/rodape";
import { Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
    const enviado = () => {
        toast.success("Dados enviados!");
    }
    return (
        <div>
            <Suspense fallback={<Fallback />}>
        <div className="geral">
        <Navbar/>
           <div className='mt-20 pb-24 geral'>
            <form method="post"  className='flex flex-col ml-auto mr-auto w-1/2 bg-white p-10 gap-2 rounded-lg' onSubmit={enviado}>

              <h1>Registre um usuário:</h1>

                <input type="text" placeholder="Digite seu Nome" name="nome" required/>
                <input type="email" placeholder="Digite seu E-mail" name="email" required/>
                <input type="password" placeholder="Digite uma senha" name="senha" required/> 
                <button className="botao">Enviar</button>      
            </form>
            <ToastContainer /></div>
            <Rodape/>
        </div>
        </Suspense>
        </div>
    );
};