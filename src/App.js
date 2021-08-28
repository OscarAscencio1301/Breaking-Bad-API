import React from 'react'
import { Provider } from 'react-redux'
import { Busqueda } from './components/Busqueda'
import { Personaje } from './components/Personaje'
import { store } from './store/store'

export const App = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <Busqueda />
                <Personaje />
            </div>
        </Provider>

    )
}
