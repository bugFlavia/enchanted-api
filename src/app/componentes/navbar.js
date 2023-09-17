'use client'
import Link from 'next/link';
import {Search} from 'lucide-react'

export default function Navbar(){
    return(

        <nav>
            <ul>
                <li><Link href="/dashboard" id="rota">HOME</Link></li>
                <li><Link href="/register" id="rota">CADASTRAR</Link></li>
                <li><Link href="/alter" id='rota'>Alterar</Link></li>
                <li><Link href="/" id='rota'>Login</Link></li>
                <p id='pesquisa'><input type='search' placeholder='Pesquisar'/><button><Search/></button></p>
            </ul>
            
        </nav>
    )
}