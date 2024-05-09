const Botao = () => {
    const handleClick = (event) => {
        alert(`Clicou ${event.target.id}`);
    }

    return (
        <button id="botaoClicavel" onClick={handleClick}>Clique aqui</button>
    )
}

export default Botao;