'use client'
import Fallback from "@/app/componentes/fallback";
import Navbar from "@/app/componentes/navbar";
import { postUser } from "@/app/functions/handlerAcessAPI";
import Rodape from "@/app/componentes/rodape";
import { React, Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const {push} = useRouter()

    const enviado = () => {
        toast.success("Dados enviados!");
    };

    const handlerFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await postUser(user);
            await new Promise((resolve) => {
                toast.success("Usuário cadastrado com sucesso!");
                setTimeout(resolve, 5000);
                enviado();
            });
            return push("/pages/dashboard");
        } catch {
            return toast.error("Erro");
        }
    };

    return (
        <div>
            <Suspense fallback={<Fallback />}>
                <div className="geral">
                    <Navbar />
                    <div className='mt-20 pb-24 geral'>
                        <form method="post" className='flex flex-col ml-auto mr-auto w-1/2 bg-white p-10 gap-2 rounded-lg' onSubmit={handlerFormSubmit}>

                            <h1>Registre um usuário:</h1>

                            <input type="text" placeholder="Digite seu Nome" name="name" required  onChange={(e) => { setUser({ ...user, name: e.target.value }) }}/> {/* Corrected name */}
                            <input type="email" placeholder="Digite seu E-mail" name="email" required onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                            <input type="password" placeholder="Digite uma senha" name="password" required onChange={(e) => { setUser({ ...user, password: e.target.value }) }} /> {/* Corrected name */}
                            <button className="botao">Enviar</button>
                        </form>
                        <ToastContainer />
                    </div>
                    <Rodape />
                </div>
            </Suspense>
        </div>
    );
}