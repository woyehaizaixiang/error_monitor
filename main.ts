import axios from 'axios';
const reportUrl: string = 'http://106.14.138.164/api/log';
/**
 * @param {String}  message    错误信息
 * @param {String}  source     出错文件
 * @param {Number}  lineno     行号
 * @param {Number}  colno      列号
 * @param {Object}  error      Error对象（对象）
 */
window.onerror = function (message, source, lineno, colno, error) {
  const params: object = {
    message,
    source,
    lineno,
    colno,
    error,
  }
  axios.post(reportUrl, params);
};