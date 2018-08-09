import main from './main';

const DEF_URL = '//at.alicdn.com/t/font_775504_9ioygazhi8o.js';
let SYMBOLS_SCRIPT = null
// 注册 icon-font url
main.regist = function regist(url = DEF_URL) {
  if (SYMBOLS_SCRIPT) return
  SYMBOLS_SCRIPT = document.createElement('script')
  document.body.appendChild(SYMBOLS_SCRIPT)
  SYMBOLS_SCRIPT.src = url
}
// use
main.install = function install(Vue) {
  Vue.component(main.name, main)
}

export default main
