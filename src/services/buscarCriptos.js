

const URL_API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

export async function buscarCriptos() {
    try{
        const resposta = await fetch(URL_API);
        const dados = await resposta.json();
        return dados;


    } catch (erro){
        console.error("Erro ao buscar a criptomoeda", erro);
        return[];
    }
}