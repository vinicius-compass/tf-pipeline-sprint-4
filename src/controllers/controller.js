const axios = require('axios')

function formatDate(date){
    let sliced_date = date.slice(0, 10)
    let splited_date = sliced_date.split('-')
    final_date = `${splited_date[2]}-${splited_date[1]}-${splited_date[0]}`

    return final_date
}

function formatChuck(text){
    let fomated_text = text.replaceAll("Chuck Norris", "CHUCK NORRIS")

    return fomated_text
}

function formatPercentage(num){
    let percentage = (num * 100) + "%"

    return percentage
}

const apiController = {
    getJoke: async () => {
        let data

        const response = await axios.get(
            "https://api.chucknorris.io/jokes/random"
        )
        datas = response.data

        data = {
            data_atualizacao: formatDate(datas.updated_at),
            data_criacao: formatDate(datas.created_at),
            icone: datas.icon_url,
            id: "teste",
            piada: formatChuck(datas.value),
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
            acessibilidade: formatPercentage(datas.accessibility)
        }

        return data
    }

}

module.exports = apiController