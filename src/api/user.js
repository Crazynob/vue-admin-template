import request from '@/utils/request'


export function login(data) {
  return request({
    url: '/adminserver/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return new Promise((resolve, reject)=>{
    let strings = token.split("."); //截取token，获取载体
    let userinfo = JSON.parse(decodeURIComponent(escape(window.atob(strings[1].replace(/-/g, "+").replace(/_/g, "/"))))); //解析，需要吧‘_’,'-'进行转换否则会无法解析
    
    resolve(userinfo)
  })
}

export function logout() {
  return request({
    url: '/adminserver/user/logout',
    method: 'get'
  })
}

// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }
