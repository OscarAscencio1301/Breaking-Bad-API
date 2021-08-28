import React from 'react'
import { useDispatch } from 'react-redux'
import { buscarPersonaje } from '../actions/personajes'
import { useForm } from '../hooks/useForm'
import { Personaje } from './Personaje'

export const Busqueda = () => {
    const dispatch = useDispatch()
    const [valores, cambioInput] = useForm({
        personaje: ''
    })
    const enviarInfo = async(e) => {
        e.preventDefault();
        dispatch(buscarPersonaje(personaje))
    }

    const {personaje} = valores;


    return (
        <div className="form__container">
        <h1>Breaking Bad</h1>
        <img className="form__img" src={"https://res.cloudinary.com/defok5em4/image/upload/v1630126722/API%C2%B4S/breaking-bad-804284_1920_z0loe4.jpg"} alt="BB"/>
        <form onSubmit={enviarInfo}>
            <select className="form__select" name="personaje" value={personaje} onChange={cambioInput}>
                <option value="">Busca tu Personaje Favorito</option>
                <option value="Walter">Walter White</option>
                <option value="Victor">Victor</option>
                <option value="Christian">Christian Ortgea</option>
                <option value="Henry">Henry Schrader</option>
                <option value="Skyler">Skyler White</option>
                <option value="Jane">Jane Margolis</option>
                <option value="Jane">Jane Margolis</option>
            </select>
            <button className="form__boton" type="submit">Buscar</button>   
        </form>        
        </div>
    )
}
