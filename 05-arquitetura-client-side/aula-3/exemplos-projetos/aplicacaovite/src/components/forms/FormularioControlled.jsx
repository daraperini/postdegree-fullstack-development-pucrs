import { useState } from "react";

const FormularioControlled = () => {
    const [formData, setFormData] = useState({nome: 'Luke', jedi: true})

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nome: ${formData.nome} Jedi: ${formData.jedi}`)
    }

    const handleNomeChange = (e) => {
        setFormData ({
            ...formData,
            nome: e.target.value
        })
    }

    const handleJediChange = (e) => {
        setFormData({
            ...formData,
            jedi: e.target.checked
        })
    }

    return (
        <>
            <h1>Formulário Controlado (Controlled)</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Nome</p>
                        <input type="text" name="nome" value={formData.nome} onChange={handleNomeChange}/>
                    </label>
                    <label>
                        <p>Jedi</p>
                        <input type="checkbox" name="jedi" checked={formData.jedi} onChange={handleJediChange}/>
                    </label>
                </fieldset>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default FormularioControlled;