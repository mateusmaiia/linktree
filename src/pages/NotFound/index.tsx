import {Link} from 'react-router-dom'

export function NotFound(){
    return(
        <div className='h-screen w-full flex items-center justify-center flex-col'>
            <h1 className='mb-2 text-5xl '>Not found 404</h1>
            <p className='bg-slate-500 rounded-xl px-4 py-1 text-white text-2xl hover:cursor-pointer hover:scale-110'><Link to={'/'}>Página Home</Link></p>
        </div>
    )
}