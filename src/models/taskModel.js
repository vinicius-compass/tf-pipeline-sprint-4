const axios = require("axios");

const taskModel = {
    getTask: async () => {
        const response = await axios.get("https://www.boredapi.com/api/activity");
        console.log(response.data)
        const formatedData = formatData(response.data);
        return formatedData;
    },
};

function formatData(data) {
    const formatedData = {
      id:data.key,
      atividade: data.activity,
      tipo: data.type,
      participantes: data.participants,
      acessibilidade: data.accessibility,
      referencia: data.url
    };
    return formatedData;
  }

module.exports = taskModel;