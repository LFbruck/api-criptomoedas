import './App.css';
import ListaCriptos from "./componentes/ListaCriptos";
import Footer from "./componentes/Footer";

export default function App() {
    return (
        <div className="App">
            <ListaCriptos />
            <Footer/>
        </div>
    );
}