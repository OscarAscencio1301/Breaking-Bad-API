import { useState } from "react"


export const useForm = (valoresInciales = {}) => {
    const [valores, setvalores] = useState(valoresInciales)

    const cambioInput = (e) => {
        setvalores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    return [valores, cambioInput]
}
