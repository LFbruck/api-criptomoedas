import { useState, useEffect } from "react";
import { buscarCriptos } from "../services/buscarCriptos";


export default function ListaCriptos() {
    const [criptos, setCriptos] = useState([]);

    useEffect(() => {
        buscarCriptos().then(setCriptos);
    }, []);

    return (
        <div>
            <div className="card">
            <header className="header">
                <h1>Principais Criptomoedas</h1>
                <span>"Never sell your Bitcoins" - Dolar, Euro, Real, Libra - Todas tem algo em comum. Irão a 0 contra o BITCOIN!</span>
            </header>

            <table className="table">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço (USD)</th>
                    <th>Variação 24h</th>
                    <th>Marketcap</th>
                </tr>
                </thead>
                <tbody>
                {criptos.map((cripto) => (
                    <tr key={cripto.id}>
                        <td>{cripto.name} ({cripto.symbol.toUpperCase()})</td>
                        <td>${cripto.current_price.toFixed(2)}</td>
                        <td style={{ color: cripto.price_change_percentage_24h >= 0 ? "green" : "red" }}>
                            {cripto.price_change_percentage_24h.toFixed(2)}%
                        </td>
                        <td>${cripto.market_cap.toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}