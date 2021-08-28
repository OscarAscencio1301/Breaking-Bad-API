import React from 'react'
import { useSelector } from 'react-redux'
import { useFetch } from '../hooks/useFetch'

export const Personaje = () => {
    const {personaje} = useSelector(state => state.perosnaje)
    const valores = useFetch(personaje)
    console.log(valores.data)
    const {nombre,imagen, categoria, status} = valores.data[0]
    
    return (
        <div className="container__personaje">
            <img src={imagen} alt={nombre} className="personaje__img"/>
            <h1>{nombre}</h1>
            <h3>{categoria}</h3>
            <h4>{status}</h4>
        </div>
    )
}
