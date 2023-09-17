'use client'
import Link from 'next/link';
import {Copyright} from 'lucide-react'

export default function Rodape(){
    return(

        <footer className='grid grid-cols-2 pt-5'>
                <div className='gap-4'>
                   <h1 className="font-bold text-2xl">Criado por:</h1>
                    <h2 className='font-semibold text-lg'>Flavia Nunes Barboza de Morais.</h2>
                </div>
                <div className='gap-4'>
                    <p className='font-semibold text-lg'>Direitos de imagem reservados à:</p>
                    <p className='flex gap-2'><Copyright/><a className='font-medium text-purple-400 dark:text-purple-400 hover:underline' href='https://taylorswiftbr.com/index.php'> Taylor Swift Brasil </a></p>
                </div>
                
            
        </footer>
    )
}