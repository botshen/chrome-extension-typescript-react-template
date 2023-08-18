 

import { changeBackgroundListener } from "./message_passing"

chrome.runtime.onMessage.addListener(changeBackgroundListener)
const script = document.createElement('script')
script.setAttribute('type', 'text/javascript')
script.setAttribute('src', chrome.runtime.getURL('js/inject.js'))
document.documentElement.appendChild(script)

const input = document.createElement('input')
input.setAttribute('id', 'ajaxInterceptor')
input.setAttribute('style', 'display:none')
document.documentElement.appendChild(input)
