/**
 * 项目配置文件
 * author: LN
 */

const env = process.env.NODE_ENV;

console.log('env', env);

const development = {
  serverURL: 'http://localhost:8080',
  socketURL: 'http://101.133.219.6:10010/websocket-service/app',
};

const qa = {
  serverURL: '',
  socketURL: '',
};

const production = {
  serverURL: 'http://101.133.219.6:10010',
  socketURL: '',
};

const config = {
  development,
  qa,
  production,
};

export default config[env];
