import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { useState, FormEvent, useEffect } from "react";

import {db} from '../../services/firebaseConnection'//trazer conexão com o banco.
import {
    setDoc,             //cria um item, mas a gente quem escreve o nome    faz update/substitui os items que ja existem
    addDoc,             //cria um documento/item com id aleatório          update caso seja registrado por cima de um valor que estava
    getDoc,              //buscar uma vez um único documento  
    doc
} from 'firebase/firestore'



export function Networks(){
    const [instagram, setInstagram ] = useState("")
    const [gitHub, setGitHub ] = useState("")
    const [linkedin, setLinkedin ] = useState("")

    useEffect(() => {
        function loadLinks(){
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
            .then((snapshot)=> {
                if(snapshot.data() !== undefined){
                    setInstagram(snapshot.data()?.instagram)
                    setGitHub(snapshot.data()?.gitHub)
                    setLinkedin(snapshot.data()?.linkedin)
                }
            })
        }
    
        loadLinks()
    }, [])

    function handleRegister(event: FormEvent){
        event.preventDefault()
        
        //doc(conexão com o banco, acessando colection que vai chamar de social, nome do documento)
        setDoc(doc(db, "social", "link"),{ 
            instagram: instagram,
            gitHub: gitHub,
            linkedin: linkedin
        })
        .then(() => {

        })
        .catch((error) => {
            console.log(`ERRO AO SALVAR ${error}`)
        })
        

         }
    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
           <Header />

           <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

           <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
                <Input 
                    type="url"
                    placeholder="Digite a url do Instagram..."
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />
                <label className="text-white font-medium mt-2 mb-2">Link do GitHub</label>
                <Input 
                    type="url"
                    placeholder="Digite a url do GitHub..."
                    value={gitHub}
                    onChange={(e) => setGitHub(e.target.value)}
                />
                <label className="text-white font-medium mt-2 mb-2">Link do Linkedin</label>
                <Input 
                    type="url"
                    placeholder="Digite a url do Linkedin..."
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                />

                <button 
                    type="submit"
                    className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex font-medium mb-7"
                >
                    Salvas Links
                </button>
           </form>
        </div>
    )
}