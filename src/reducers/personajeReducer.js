export const perosnajeReducer = (state = {personaje: null}, action) => {
    switch (action.type) {
        case 'personajeAgregar':
            return  {
                personaje: action.payload
            }
        default:
            return state
    }
}