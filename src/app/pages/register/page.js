'use client'

import { ToastContainer, toast } from "react-toastify";

export default function Register() {
    const ficaLigado = () => {
        toast.success("Dados enviados!");
    }
    return (
        <div>
            <form method="post" onSubmit={ficaLigado}>
                <label>Nome:</label><input type="text" placeholder="Digite seu Nome" name="nome"/>
                <label>E-mail:</label><input type="text" placeholder="Digite seu E-mail" name="email"/>
                <label>Senha:</label><input type="text" placeholder="Digite uma senha" name="senha"/> 
                <button>Enviar</button>         
            </form>
            <ToastContainer/>
        </div>
    );
};