const axios = require("axios");
const { v4: uuidv4 } = require('uuid');

function getGUID(){
    const guid = uuidv4();
    return `{${guid}}`;
}  

const activityModel = {

    getActivity:  async (req, res) => {

        const apiUrl =  `https://www.boredapi.com/api/activity`
        const response = await axios.get(apiUrl)
        dados = response.data
        console.log(dados)
        const data = {
            id: getGUID(),
            atividade:dados.activity,
            tipo:dados.type,
            participantes:dados.participants,
            acessibilidade: dados.accessibility*100 + '%',
            status:200
        }

        const responseJSON = JSON.stringify(data, null, 2);

        return responseJSON;
    }
}

module.exports = activityModel;
