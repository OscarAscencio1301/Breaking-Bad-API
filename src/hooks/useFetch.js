import  { useEffect, useState } from 'react'
import { obtenerPersonaje } from '../helpers/obtenerPersonaje'

export const useFetch = (personaje) => {
   const [state, setstate] = useState({
       data: [],
       loading: true
   })

   useEffect(()=> {
       obtenerPersonaje(personaje).then(personaje =>
            setstate({
                data: personaje,
                loading: false
            })
        )
   },[personaje])

   return state;
}
