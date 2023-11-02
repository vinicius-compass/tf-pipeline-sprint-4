const axios = require("axios");
const uuid = require('uuid');

function formatDate(date) {
    const [ano, mes, dia] = date.split('-');
    return `${dia}-${mes}-${ano}`;
}

function chuckNorris(piada) {
    return piada.replace(/Chuck Norris/gi, 'CHUCK NORRIS');
}

function formatID(id) {
    const parteAleatoria = uuid.v4().replace(/-/g, '').toUpperCase();
    const parteEstatica = id.replace(/_/g, '').toUpperCase().substring(0, 4);

    return `${parteAleatoria.substring(0, 8)}-${parteAleatoria.substring(8, 12)}-${parteAleatoria.substring(12, 16)}-${parteAleatoria.substring(16, 20)}-${parteAleatoria.substring(20)}-${parteEstatica}`;
}

const jokesModel = {

    getRandomJoke: async () => {
        const response = await axios.get("https://api.chucknorris.io/jokes/random");

        const id = formatID(response.data.id);

        const formattedData = {
            data_atualizacao: formatDate(response.data.updated_at.substring(0, 10)),
            data_criacao: formatDate(response.data.created_at.substring(0, 10)),
            icone: response.data.icon_url,
            id: id,
            piada: chuckNorris(response.data.value),
            referencia: response.data.url,
        };

        // Configurando a resposta com indentação e quebras de linha
        const responseJSON = JSON.stringify(formattedData, null, 2);

        return responseJSON;
    },
};

module.exports = jokesModel;
