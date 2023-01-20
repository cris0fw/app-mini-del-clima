import { useState } from "react";

export const FormWeather = (initialForm = {}) => {
    const [form, setForm] = useState(initialForm)

    const inputOnChange = ({target}) => {
        const {name, value} = target

        setForm({
            ...form,
            [name]: value
        })
    }
    const inputOnReset = () => {
        setForm(initialForm)
    }

    return {
        form, 
        inputOnChange,
        inputOnReset
    }

}