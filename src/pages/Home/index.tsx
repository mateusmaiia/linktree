import { Social } from "../../components/Social";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

export function Home(){
    return(
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20 ">Mateus Maia</h1>
            <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

            <main className="flex flex-col w-11/12 max-w-xl text-center">
                <section className="bg-white mb-4 w-full py-2 rounded-lg selec-none transition-transform hover:scale-105 cursor-pointer">
                    <a href="#" >
                        <p className="text-base md:text-lg ">
                            Instagram
                        </p>
                    </a>
                </section>

                <footer className="flex justify-center gap-3 my-4">
                    <Social url="https://instagram.com/matteusmaia_"> 
                        <FaInstagram size={35} color='#fff'/>
                    </Social>
                    <Social url="https://github.com/mateusmaiia"> 
                        <FaGithub size={35} color='#fff'/>
                    </Social>
                    <Social url="https://www.linkedin.com/in/mateus-maia-690218273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> 
                        <FaLinkedin size={35} color='#fff'/>
                    </Social>
                </footer>
            </main>
        </div>
    )
}