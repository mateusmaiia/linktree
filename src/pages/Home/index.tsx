import {useEffect, useState} from 'react'
import { Social } from "../../components/Social";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import {db } from '../../services/firebaseConnection'
import {
    getDocs,
    collection,
    orderBy,
    query,
    doc,
    getDoc
 } from 'firebase/firestore'

 
interface linkProps{
    id: string,
    name: string,
    url: string,
    bg: string,
    color: string;
 }

 interface socialLinksProps{
    instagram: string,
    gitHub: string,
    linkedin: string
 }
 

export function Home(){
    const [links, setLinks] = useState<linkProps[]>([])
    const [socialLinks, setSocialLinks] = useState<socialLinksProps>()

    useEffect(() => {
        function loadLinks(){
            const linksRef = collection(db, "links")
            const queryRef = query(linksRef, orderBy("created", "asc"))

            
            getDocs(queryRef)
            .then((snapshot) => {
                let lista = [] as linkProps[]

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        name: doc.data().name,
                        url: doc.data().url,
                        bg: doc.data().bg,
                        color: doc.data().color,
                    })
                })
                
                setLinks(lista)
            })
        }

        loadLinks()
    }, [])

    useEffect(() => {
       function loadSocialLinks(){
        const docRef = doc(db, "social", "link")
        getDoc(docRef)
        .then((snapshot) => {
            if(snapshot.data() !== undefined){
                setSocialLinks({
                    instagram: snapshot.data()?.instagram,
                    gitHub: snapshot.data()?.gitHub,
                    linkedin: snapshot.data()?.linkedin
                })
            }
        })
       }

       loadSocialLinks()
    }, [])

    return(
        <div className="flex flex-col w-full h-screen py-4 items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20 ">Mateus Maia</h1>
            <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

            <main className="flex flex-col w-11/12 max-w-xl text-center">
                {links.map((item) => (
                    <section 
                        key={item.id} 
                        style={{backgroundColor: item.bg  }}
                        className="bg-white mb-4 w-full py-2 rounded-lg selec-none transition-transform hover:scale-105 cursor-pointer">
                        <a href={item.url} target='_blank'>
                            <p className="text-base md:text-lg " style={{color: item.color}}>
                                {item.name}
                            </p>
                        </a>
                    </section>
                ))}

                {socialLinks && Object.keys(socialLinks).length > 0 && (
                    <footer className="flex justify-center gap-3 my-4">
                        <Social url={socialLinks?.instagram}> 
                            <FaInstagram size={35} color='#fff'/>
                        </Social>
                        <Social url={socialLinks?.gitHub}> 
                            <FaGithub size={35} color='#fff'/>
                        </Social>
                        <Social url={socialLinks?.linkedin}> 
                            <FaLinkedin size={35} color='#fff'/>
                        </Social>
                    </footer>
                )}
            </main>
        </div>
    )
}