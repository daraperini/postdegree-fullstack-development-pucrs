import { useState } from "react";

const ContadorUseState = () => {
    const [contagem, setContagem] = useState(0);

    const handleClick = () => {
        // setContagem(contagem + 1);
        setContagem((contagemAtual) => contagemAtual + 1);
    }

    return (
        <>
            <button onClick={handleClick}>Clicar</button>
            <span>Contagem atual: {contagem}</span>
        </>
    )
}

export default ContadorUseState;