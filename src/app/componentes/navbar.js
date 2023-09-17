'use client'
import Link from 'next/link';
import {Search} from 'lucide-react'

export default function Navbar(){
    return(

        <nav>
            <ul>
                <li><Link href="/pages/dashboard" id="rota">HOME</Link></li>
                <li><Link href="/pages/register" id="rota">CADASTRAR</Link></li>
                <li><Link href="/pages/alter" id='rota'>ALTERAR</Link></li>
                <li><Link href="/" id='rota'>LOGIN</Link></li>
                <p id='pesquisa'><input type='search' placeholder='Pesquisar'/><button><Search/></button></p>
            </ul>
            
        </nav>
    )
}