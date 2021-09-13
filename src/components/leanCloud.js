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

function Sign(email,username,password,successFn,errorFn) {
  // 新建 AVUser 对象实例
  const user = new AV.User();

  // 设置邮箱
  user.setEmail(email);
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

//保存数据
function addTodo(id,title,status,deleted) {
  // 为 AV.Object 创建子类
  const Todo = AV.Object.extend('Todo');
  // 新建数据对象
  const todo = new Todo();
  // 为属性赋值
  todo.set('id', id);
  todo.set('title',title);
  todo.set('status',status);
  todo.set('deleted',deleted);
  // 将对象保存到云端
  todo.save().then(
    // 成功保存之后，执行其他逻辑
    (data) => {
      console.log('保存成功');
      console.log(data.attributes);
    },
    // 异常处理
    (error) => {
      console.log(error);
    }
  );
}

//获取数据
function getData() {
  return new Promise((resolve, reject) => {
    const query = new AV.Query('Todo');
    query.find()
      .then(todos => {
              let array = todos.map(todo=>todo.attributes)
              resolve(array)
            })
            .catch(error => {
              reject(error)
            })
  })
}
//测试
/*
getData().then(item => {
  console.log(item);
})
*/

//删除数据
function deleteData(item) {
    let id = item.id
    const query = new AV.Query('Todo');
    query.find()
            .then(todos => {
              todos.map(todo => {
                if (todo.attributes.id === id) {
                    const deleteFile = AV.Object.createWithoutData('Todo', todo.id);
                    deleteFile.destroy();
                }
              })
            })
}

//验证邮箱
function sendPasswordResetEmail(email,successFn,errorFn) {
  AV.User.requestEmailVerify(email).then(
    function (success) {
      successFn.call(success)
    },
    function (error) {
      switch (error.code) {
        case 204:
           alert('请输入邮箱')
          break;
        case 1:
           alert('请不要往同一个邮件地址发送太多邮件')
          break;
        default:
          break;
      }
    }
  )
}


export {AV,Sign,Login,getCurrentUser,Logout,addTodo,getData,deleteData,sendPasswordResetEmail}