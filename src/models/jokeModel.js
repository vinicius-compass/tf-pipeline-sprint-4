const axios = require("axios");
const newUUID = require("../utils/UUID.js");

/**
 * @typedef {Object} Joke
 * @property {string[]} categories Array of categories
 * @property {string} created_at YYYY-MM-DD HH:MM:SS.SSSZ
 * @property {string} icon_url URL to icon
 * @property {string} id
 * @property {string} updated_at YYYY-MM-DD HH:MM:SS.SSSZ
 * @property {string} url URL to joke
 * @property {string} value Joke string
 * */

/**
 * @typedef {Object} FormatedJoke
 * @property {string} data_atualizacao DD-MM-YYYY
 * @property {string} data_criacao DD-MM-YYYY
 * @property {string} icone URL to icon
 * @property {string} id Random RFC 4122 version 4 UUID
 * @property {string} piada Joke string
 * @property {string} referencia URL to joke
 * */

const jokeModel = {
    /**
     * @param {string} date YYYY-MM-DD HH:MM:SS.SSSZ
     * @returns {string} DD-MM-YYYY
     * */
    formatDate(date) {
        const [year, month, day] = date.split(" ")[0].split("-");
        return `${day}-${month}-${year}`;
    },

    /**
     * @param {Joke} data
     * @returns {FormatedJoke}
     * */
    formatData(data) {
        return {
            data_atualizacao: this.formatDate(data.updated_at),
            data_criacao: this.formatDate(data.created_at),
            icone: data.icon_url,
            id: newUUID(),
            piada: this.toUpperCaseChuckNorris(data.value),
            referencia: data.url,
        };
    },

    /**
     * @returns {Promise<FormatedJoke>}
     * */

    /**
     * @param {string} jokeString
     * @returns {capitalizedJokeString}
     * */
    toUpperCaseChuckNorris(jokeString) {
        return jokeString.replace(/\b(chuck|norris)\b/gi, string => string.toUpperCase());
    },
    
    async getJoke() {
        const response = await axios.get(
            "https://api.chucknorris.io/jokes/random",
        );
        return this.formatData(response.data);
    },
};

module.exports = jokeModel;
