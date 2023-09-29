import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}   //inputProps está extendendo todas propriedas que esse tipo input recebe

export function Input(props:InputProps){
    return(        
            <input 
                className="border-0 h-9 rounded-md outline-none px-2 mb-3"
                {...props}
            />
    )
}

//contexto geral: está dizendo quais tipos de propriedades pode passar 
// pode se passar apenas as propriedades que suporta dentro dessa tag html     no caso o input

//Pode se dizer que estamos criando nossa propria tag input,   só que estilizada, onde quando você chama ela(o componente) ai sim você add as props.