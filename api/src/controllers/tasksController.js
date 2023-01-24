const axios = require("axios");
const { Monitoring } = require("../db");
require("dotenv").config();
const { API_KEY } = process.env;

const getTaskDb = async () => {
  const getTasks = await Monitoring.findAll();
  return getTasks;
};

module.exports = getTaskDb;
