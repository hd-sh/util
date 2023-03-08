import Util, { generateUuid } from '../core.js'
console.log('generateUuid: ', generateUuid)
console.log('Util: ', Util)
// Util.sleep(3000).then(() => {
//   console.log('3s')
// })

// Util.importScript('https://unpkg.com/vue@3/dist/vue.global.js')

// console.log(Util.formatRequestData({ a: 1, b: '', c: 'xx' }, 'xx'))
// console.log(Util.phoneDesensitize(15000032322))
// function fn() {
//   console.log('fn')
// }

// Util.throttle(2000, fn)

function* gen() {}
console.log(Util.isEmptyArray([1]), Util.isEmptyValue(undefined), Util.isGeneratorFunction(gen))
console.log(Util.typeFn.isArray([]))
console.log(Util.getStyle(document.getElementById('app'), 'width'))
