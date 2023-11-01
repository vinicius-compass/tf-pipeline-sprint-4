const axios = require('axios')
const { v4: uuidv4 } = require('uuid');

const getActivity =  async (req, res) => {
        let data
        try{
            const apiUrl =  `https://www.boredapi.com/api/activity`
            const response = await axios.get(apiUrl)
            dados = response.data
            console.log(dados)
            data = {
                id: getGUID(),
                atividade:dados.activity,
                tipo:dados.type,
                participantes:dados.participants,
                status:200
            }
            res.status(200).json(data);
        }
        catch(error){
            data = {
                status:400
            }
            res.status(500).json(data);
        }
    }


function getGUID(){
    const guid = uuidv4();
    return `{${guid}}`;
}  

module.exports = {
    getActivity,
};