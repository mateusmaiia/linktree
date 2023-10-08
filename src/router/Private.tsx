import { ReactNode, useState, useEffect } from "react"

import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from "firebase/auth"
import { Navigate } from 'react-router-dom'

interface PrivateProps{
    children: ReactNode
}

export function Private({children}: PrivateProps): any{ 
    const[loading, setLoading] = useState(true)
    const[signed, setSigned] = useState(false)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user){
                const userData = {
                    uid: user?.uid,
                    email: user?.email
                }

                localStorage.setItem("@reactlinks", JSON.stringify(userData))
                setLoading(false)
                setSigned(true)
               
            }else{
                setLoading(false)
                setSigned(false)
            }
        })

        //função de cleanUp   --> faz ele para de monitorar ja que ele é um lissener
        return () => {
            unsub()
        }
    }, [])

    if(loading){
        return <div className="text-7xl">
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center" style={{ background: 'linear-gradient(#232730, #050507)' }}>
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
        </div>
    }

    if(!signed){
        return <Navigate to='/login'/>
    }
    
    return children
}