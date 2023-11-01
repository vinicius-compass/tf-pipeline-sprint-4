const { generateGUID } = require('../utils/generateIdUtils');

class RandomActivityModel {
    constructor(data) {
        this.id = generateGUID()
        this.atividade = data.activity
        this.tipo = data.type
        this.participantes = data.participants 
        this.acessibilidade = data.accessibility
    }
}

module.exports = RandomActivityModel;