import AV from 'leancloud-storage'

var APP_ID = 'GXm2WIFhIM47p715iNxq4DCs-9Nh9j0Va'
var APP_KEY = 'D2paW9UUiEUPnEvKyEdTP04E'
AV.init({
  appId: APP_ID,
    appKey: APP_KEY,
  serverURL: "https://gxm2wifh.lc-cn-e1-shared.com"
})

export default AV