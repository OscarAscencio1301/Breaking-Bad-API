const { combineReducers, createStore } = require("redux");
const { perosnajeReducer } = require("../reducers/personajeReducer");

const reducers = combineReducers({
    perosnaje: perosnajeReducer

})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());