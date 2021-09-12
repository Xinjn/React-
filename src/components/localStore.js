//设置set
function set(key,value) {
    return window.localStorage.setItem(key,JSON.stringify(value))
}
//设置get
function get(key) {
    return JSON.parse(window.localStorage.getItem(key))
}

export {set,get}