'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import Navbar from "./componentes/navbar";
import Carrossel from "./componentes/carrossel";
import Rodape from "./componentes/rodape";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      await handlerAcessUser(user);
      push('/pages/dashboard');
    } catch {
      toast.error("Erro na aplicação");
    }
  }
  return (
    <div className="geral">

      <Navbar></Navbar>
      
      <div className="flex justify-center items-center w-100">
      <Carrossel/>
      </div>

      <h1>Bem-vindo</h1>
      <form onSubmit={handlerLogin}>
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button>Entrar</button>
        <ToastContainer/>
      </form>
      <Rodape/>
    </div>
  )
}
