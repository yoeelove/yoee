const axios = require("axios");

const axiosIns = axios.create({
  baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
  timeout: 1000
})
module.exports = axiosIns