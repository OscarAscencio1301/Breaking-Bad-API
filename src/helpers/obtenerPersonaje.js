export const obtenerPersonaje = async(personaje) => {
    const url = `https://www.breakingbadapi.com/api/characters?name=${personaje}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json()
    const info = datos.map(dato => ({
        nombre: dato.name,
        imagen: dato.img,
        categoria: dato.category,
        status: dato.status
    }))
    return info;
}

