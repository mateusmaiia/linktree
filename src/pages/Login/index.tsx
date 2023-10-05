import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { useState, FormEvent } from "react";

import {auth } from '../../services/firebaseConnection'
import{signInWithEmailAndPassword} from 'firebase/auth'

export function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSubmit(event:FormEvent){
        event.preventDefault()

        if(email === '' || password === ''){
            alert('Preenchha todos os campos')
            return
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(()=>{
            navigate('/admin', {replace: true})
            console.log("Logado com sucesso!")
        })
        .catch((error)=>{
            console.log('ERRO AO FAZER O LOGIN!')
            console.log(error)
        })
    }

    return(
        <div className="flex w-full h-screen items-center justify-center flex-col">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-5xl ">Maia
                    <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Links</span>
                </h1>
            </Link>
            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2"> {/*px-2 espaçamento pra nao ficar grudado*/}
                <Input 
                    type="gmail"
                    placeholder="Digite seu email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    type="password"
                    placeholder="**********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white">
                    Acessar
                </button>

            </form>
        </div>
    )
}