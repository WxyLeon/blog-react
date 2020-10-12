const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../'); // 项目的根目录
const PROJECT_NAME = path.parse(PROJECT_PATH).name; // 项目名
const isDev = process.env.NODE_ENV !== 'production';
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 9000;

module.exports = {
  SERVER_HOST,
  SERVER_PORT,
  isDev,
  PROJECT_PATH,
  PROJECT_NAME,
};
