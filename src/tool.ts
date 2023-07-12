/**
 * 生成唯一uuid，可以指定长度和基数
 * @param {number} len 长度，默认36
 * @param {number} radix 基数，如2，8，10，16等
 */
export const generateUuid = (len?: number, radix?: number) => {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  var uuid = [],
    i
  radix = radix || chars.length
  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
  } else {
    var r
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}
export const isIOS: boolean = (function () {
  const u = window.navigator.userAgent
  const ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  const iPad = u.indexOf('iPad') > -1
  const iPhone = u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1
  if (ios || iPad || iPhone) {
    return true
  } else {
    return false
  }
})()

export const isAndroid: boolean = (function () {
  const u = window.navigator.userAgent
  if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
    return true
  } else {
    return false
  }
})()
export const isIE = /Trident|MSIE/.test(navigator.userAgent)

/**
 * 复制到剪切板
 * @param {string} text 复制文本
 */
export const copyText = (text: string) => {
  const tempInput = document.createElement('textarea')

  tempInput.style.cssText = 'position:absolute;top:0;opacity:0;'
  document.body.appendChild(tempInput)
  tempInput.value = text
  tempInput.select()

  const isCopySuccess = document.execCommand('Copy')
  document.body.removeChild(tempInput)

  return isCopySuccess
}

export const delay = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
/**
 * 延时执行
 * sleep(3000).then(()=>f1)
 */
export const sleep = delay
/**
 * 生成1～length的数组
 * @param {*} length
 * @returns [1,2,3]
 */
export const generateRange = (length: number): Array<number> => {
  return new Array(length).fill(0).map((_, index) => index + 1)
}

/**
 * 为Promise包装一个cancel方法，让其变得可取消
 * @param {Promise} promise
 * @returns {Promise}
 */
export const makeCancelablePromise = <T>(
  promise: Promise<T>
): Promise<T> & { cancel: () => void } => {
  let rejectFn: (reason?: any) => void

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    rejectFn = reject

    Promise.resolve(promise).then(resolve).catch(reject)
  }) as Promise<T> & { cancel: () => void }

  wrappedPromise.cancel = () => {
    ;(promise as any).__canceled = true
    rejectFn({ canceled: true })
  }

  return wrappedPromise
}

// 节流函数
export function throttle(func: () => void, delay: number): () => void {
  let timeout: NodeJS.Timeout | null = null
  let lastExecTime = 0

  return function (this: any) {
    const currentTime = Date.now()
    const elapsed = currentTime - lastExecTime

    const execute = () => {
      func.apply(this)
      lastExecTime = currentTime
    }

    if (!timeout) {
      execute()
    } else if (elapsed >= delay) {
      clearTimeout(timeout)
      timeout = null
      execute()
    } else {
      clearTimeout(timeout)
      timeout = setTimeout(execute, delay - elapsed)
    }
  }
}

// 防抖函数
export function debounce(
  func: (...args: any[]) => any,
  wait: number,
  immediate?: boolean
): (...args: any[]) => any {
  let timeout: NodeJS.Timeout | null
  let result: any

  function debounced(this: any, ...args: any[]) {
    const context = this

    if (timeout) {
      clearTimeout(timeout)
    }

    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(function () {
        result = func.apply(context, args)
      }, wait)

      if (callNow) {
        result = func.apply(context, args)
      }
    } else {
      timeout = setTimeout(function () {
        result = func.apply(context, args)
      }, wait)
    }

    return result
  }

  debounced.cancel = function () {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  return debounced
}

export const typeFn = (() => {
  const utils: Record<string, (obj: any) => boolean> = {}

  'Boolean|Number|String|Function|Array|Date|RegExp|Object|Error'
    .split('|')
    .forEach(function (item) {
      utils['is' + item] = function (obj: any) {
        return {}.toString.call(obj) == '[object ' + item + ']'
      }
    })

  return { ...utils }
})()

export default {
  generateUuid,
  isIOS,
  isAndroid,
  isIE,
  copyText,
  throttle,
  debounce,
  typeFn,
}
