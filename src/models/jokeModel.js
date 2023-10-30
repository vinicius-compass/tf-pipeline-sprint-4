const axios = require("axios");

const jokeModel = {
    getJoke: async () => {
        const response = await axios.get(
            "https://api.chucknorris.io/jokes/random",
        );
        console.log(response.data);
        const formatedData = formatData(response.data);
        return formatedData;
    },
};

function formatData(data) {
    const formatedData = {
        data_atualizacao: data.updated_at,
        data_criacao: data.created_at,
        icone: data.icon_url,
        id: data.id,
        piada: data.value,
        referencia: data.url,
    };
    return formatedData;
}

module.exports = jokeModel;
