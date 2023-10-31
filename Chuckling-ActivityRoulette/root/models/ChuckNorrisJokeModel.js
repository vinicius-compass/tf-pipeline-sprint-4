const { generateGUID } = require('../utils/generateIdUtils');

class ChuckNorrisJokeModel {
    constructor(data) {
      this.data_atualizacao = data.updated_at
      this.data_criacao = data.created_at
      this.icone = data.icon_url
      this.id = generateGUID()
      this.piada = data.value
      this.referencia = data.url
    }
  }
  
  module.exports = ChuckNorrisJokeModel;