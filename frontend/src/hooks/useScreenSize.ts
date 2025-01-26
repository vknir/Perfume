import {useState, useEffect} from 'react'

export default function useScreenSize(query: string){
    const [screen, setScreen]= useState( ()=> window.matchMedia(query).matches)
    useEffect(()=>{
        const media= window.matchMedia(query)
        const sizeCheck=()=> setScreen(media.matches)

        window.addEventListener('resize', sizeCheck)
        return ()=> window.removeEventListener('resize', sizeCheck)
    },[])

    return screen
}