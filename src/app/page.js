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
    <div className="geral h-screen">

      <Navbar/>
      
      
    <div className='mt-20 pb-24 geral'>
      <form  className='flex flex-col ml-auto mr-auto w-1/2 bg-white p-10 gap-2 rounded-lg' onSubmit={handlerLogin}>
        
      <h1>Bem-vindo</h1>
        
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
        <button className="botao">Entrar</button>
        <ToastContainer/>
      </form></div>
      <Rodape/>
    </div>
  )
}
