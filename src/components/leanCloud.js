import AV from 'leancloud-storage'

var APP_ID = 'GXm2WIFhIM47p715iNxq4DCs-9Nh9j0Va'
var APP_KEY = 'D2paW9UUiEUPnEvKyEdTP04E'
AV.init({
  appId: APP_ID,
    appKey: APP_KEY,
  serverURL: "https://gxm2wifh.lc-cn-e1-shared.com"
})

//二次封装数据:用户数据
function getUserFrom(AVUser) {
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}

function Sign(username,password,successFn,errorFn) {
  // 新建 AVUser 对象实例
  const user = new AV.User();

  // 设置用户名
  user.setUsername(username);
  // 设置密码
  user.setPassword(password);

  user.signUp().then(
    // 注册成功
    (data) => {
      //二次封装数据:用户数据
      let user = getUserFrom(data)
      successFn(user)
    },
    // 注册失败（通常是因为用户名已被使用）
    (error) => {
      errorFn(error)
  });
  return undefined
}

//测试
/*
Sign(
  'xjn',
  '123456',
  function (user) {
    console.log(user)
  },
  function (error) {
    console.log(error)
  },
)
*/

export {AV,Sign}