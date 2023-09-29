import {ReactNode} from 'react'


interface SocialProps{
    url: string;
    children: ReactNode //significa que vai receber um elemento jsx
}

export function Social({url, children}:SocialProps){
    return(
        <a 
            href={url}
            rel='noopener noreferrer' //pra avisar que é uma url externa
            target='_blank'           //pra ele abrir em uma nova aba
        >
            {children}
        </a>
    )
}