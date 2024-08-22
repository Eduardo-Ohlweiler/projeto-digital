import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
import { Produtos } from "./componentes/Produtos";


function App() {
  return (
    <>
      <ToastContainer/>
      <Produtos/>
    </>
  );
}

export default App;
