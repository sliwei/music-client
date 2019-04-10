import {Axios as fetch} from 'Public';

/**
 * 获取服务器信息
 * @param data
 * @returns {*}
 */
const op = data => fetch('/music/sys/op', {data: data, type: 'POST'});

/**
 * 获取用户信息
 * @returns {*}
 */
const getUserSinger = () => fetch('/music/sys/userSinger', {type: 'GET'});

export {
  op,
  getUserSinger,
}
