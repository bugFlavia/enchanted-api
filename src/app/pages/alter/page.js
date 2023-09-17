'use client'

import Navbar from "@/app/componentes/navbar";
import Rodape from "@/app/componentes/rodape";
import { ToastContainer, toast } from "react-toastify";

export default function Alter() {
        const enviado = () => {
            toast.success("Dados enviados!");
        }
    return (
        <div className="geral">
        <Navbar/>
           <div className='mt-20 pb-24 geral'>
            <form  className='flex flex-col ml-auto mr-auto w-1/2 bg-white p-10 gap-2 rounded-lg' onSubmit={enviado}>

              <h1>Altere um usuário:</h1>

                <input type="text" placeholder="Digite seu Nome" name="nome"/>
                <input type="text" placeholder="Digite seu E-mail" name="email"/>
                <input type="text" placeholder="Digite uma senha" name="senha"/> 
                <button className="botao">Enviar</button>         
            </form></div>
            <Rodape/>
            <ToastContainer/>
        </div>
    );
};