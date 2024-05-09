import { useRef } from "react";

const FormularioUncontrolled = () => {
    const nomeInputRef = useRef();
    const jediInputRef = useRef();
    const nomeInputDefault = 'Luke';
    const jediInputDeFault = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nome: ${nomeInputRef.current.value} Jedi: ${jediInputRef.current.checked}`)
    }

    return (
        <>
            <h1>Formulário Sem Controle (Uncontrolled)</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Nome</p>
                        <input type="text" name="nome" ref={nomeInputRef} defaultValue={nomeInputDefault}/>
                    </label>
                    <label>
                        <p>Jedi</p>
                        <input type="checkbox" name="jedi" ref={jediInputRef} defaultChecked={jediInputDeFault}/>
                    </label>
                </fieldset>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default FormularioUncontrolled;