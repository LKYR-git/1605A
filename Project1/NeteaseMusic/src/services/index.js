import request from '../utils/request';
export * from './discover.js';

const host = /localhost/.test(window.location.host)?'http://123.206.55.50:14000':'';
// 登陆接口
export function login(params){
  return request(`${host}/login/cellphone?phone=${params.phone}&password=${params.password}`)
}
