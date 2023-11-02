const axios = require('axios')

const apiController = {
    getJoke: async () => {
        let data

        const response = await axios.get(
            "https://api.chucknorris.io/jokes/random"
        )
        datas = response.data

        data = {
            data_atualizacao: datas.updated_at,
            data_criacao: datas.created_at,
            icone: datas.icon_url,
            id: "teste",
            piada: datas.value,
            referencia: datas.url
        }

        return data
    },

    getActivity: async () => {
        let data
        
        const response = await axios.get(
            "https://www.boredapi.com/api/activity"
        )
        datas = response.data

        data = {
            id: "teste",
            atividade: datas.activity,
            tipo: datas.type,
            participantes: datas.participants,
            acessibilidade: datas.accessibility
        }

        return data
    }

}

module.exports = apiController