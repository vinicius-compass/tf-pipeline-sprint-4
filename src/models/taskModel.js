const axios = require("axios");
const newId = require("../utils/UUID");

/**
 * @typedef {Object} Task
 * @property {string} activity Description of the queried activity
 * @property {("education"| "recreational"| "social"| "diy"| "charity"| "cooking"| "relaxation"| "music"| "busywork")} type Type of the activity
 * @property {number} participants The number of people that this activity could involve [0, n]
 * @property {number} price A factor describing the cost of the event with zero being free [0, 1]
 * @property {string} link
 * @property {string} key A unique numeric id [1000000, 9999999]
 * @property {number} accessibility A factor describing how possible an event is to do with zero being the most accessible [0.0, 1.0]
 * */

/**
 * @typedef {Object} FormatedTask
 * @property {string} id Random RFC 4122 version 4 UUID
 * @property {string} atividade Description of the queried activity
 * @property {("education"| "recreational"| "social"| "diy"| "charity"| "cooking"| "relaxation"| "music"| "busywork")} tipo Type of the activity
 * @property {number} participantes The number of people that this activity could involve [0, n]
 * @property {string} acessibilidade A factor describing how possible an event is to do with zero being the most accessible ["0%", "100%"]
 * */

const taskModel = {
  /**
   * @param {number} value
   * @returns {string}
   * */
  convertToPercent(value) {
    return `${value * 100}%`;
  },
  /**
   * @param {Task} data
   * @returns {FormatedTask}
   * */
  formatData(data) {
    return {
      id: newId(),
      atividade: data.activity,
      tipo: data.type,
      participantes: data.participants,
      acessibilidade: this.convertToPercent(data.accessibility),
    };
  },
  /**
   * @returns {Promise<FormatedTask>}
   * */
  async getTask() {
    const response = await axios.get("https://www.boredapi.com/api/activity");
    return this.formatData(response.data);
  },
};

module.exports = taskModel;
