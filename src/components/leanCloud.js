import AV from 'leancloud-storage'

var APP_ID = 'GXm2WIFhIM47p715iNxq4DCs-9Nh9j0Va'
var APP_KEY = 'D2paW9UUiEUPnEvKyEdTP04E'
AV.init({
  appId: APP_ID,
    appKey: APP_KEY,
  serverURL: "https://gxm2wifh.lc-cn-e1-shared.com"
})

//二次封装数据:用户数据+id
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
      //二次封装数据:用户数据+id
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

function Login(username,password,successFn,errorFn) {
  AV.User.logIn(username, password).then(
    // 登录成功
    (data) => {
      //二次封装数据:用户数据+id
      let user = getUserFrom(data)
      successFn(user)
    },
    // 登录失败（可能是密码错误）
    (error) => {
      errorFn(error)
    }
  );
  return undefined
}

//测试
/*
Login(
  'xjn',
  '123456',
  function (data) {
    console.log(data)
  },
  function (error) {
    console.log(error)
  },
)
*/

//查看用户是否存在
function getCurrentUser() {
  const user = AV.User.current();
  if (user) {
    // 用户存在
    return getUserFrom(user)
  } else {
    // 用户不存在
    return null
  }
}

//注销
function Logout() {
  AV.User.logOut();
  return undefined
}

export {AV,Sign,Login,getCurrentUser,Logout}