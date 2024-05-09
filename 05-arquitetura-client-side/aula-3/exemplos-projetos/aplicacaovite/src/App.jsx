import AloMundo from "./components/AloMundo";
import AloMundoColorido from "./components/AloMundoColorido";
import Botao from "./components/Botao";
import ContadorUseReducer from "./components/ContadorUseReducer";
import ContadorUseState from "./components/ContadorUseState";
import RelogioUseEffect from "./components/RelogioUseEffect";
import "./App.css";
import FormularioUncontrolled from "./components/forms/FormularioUncontrolled";
import FormularioControlled from "./components/forms/FormularioControlled";

function App() {
  return (
    <div>
      <AloMundo />
      <AloMundoColorido nome="Dara" cor="yellow" />
      <div style={{ paddingBottom: "24px" }}>
        <Botao />
      </div>
      <div style={{ paddingBottom: "24px" }}>
        <ContadorUseState />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center' , gap:'12px'}}>
        <ContadorUseReducer />
      </div>
      <div>
        <RelogioUseEffect />
      </div>
      <div>
        <FormularioUncontrolled />
      </div>
      <div>
        <FormularioControlled />
      </div>
    </div>
  );
}

export default App;
