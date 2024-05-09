import { useState, useEffect } from "react";

const RelogioUseEffect = () => {
    const [horario, setHorario] = useState(new Date());
    useEffect(() => {
        function tick() {
            setHorario(new Date());
        }
        const temporizador = setInterval(() => tick(), 1000);
        return () => clearInterval(temporizador);
    }, []);

    return (
        <>
            <h1> Relógio:</h1>
            <h2>{horario.toLocaleTimeString()}</h2>
        </>
    )
}

export default RelogioUseEffect;