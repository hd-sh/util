/**
 * 请求时参数去掉空值
 * @param {*} values
 * @param {忽略的值} ignoreValue
 * @returns
 */
export const formatRequestData = (
  values: Record<string, any>,
  ignoreValue?: any
): Record<string, any> => {
  for (const key in values) {
    if (values[key] === '' || values[key] === null || values[key] === undefined) {
      delete values[key]
    }
    if (typeof values[key] === 'string' && values[key].trim() === '') {
      delete values[key]
    }

    if (ignoreValue !== undefined && values[key] === ignoreValue) {
      delete values[key]
    }

    if (typeof values[key] === 'string') {
      values[key] = values[key].trim()
    }
  }
  return values
}

/**
 * 手机号脱敏
 * @param {*} phone
 * @returns
 */
export const formatPhoneDisplay = (phone?: string): string => {
  return phone ? `${phone}`.replace(/(\d{3})\d*(\d{4})/, '$1****$2') : ''
}

// 手机号脱敏
export const phoneDesensitize = formatPhoneDisplay
export const sum: (a: number, b: number) => number = (() => {
  return (a: number, b: number) => a + b
})()

/**
 * 判断空数组
 * @param {Array} array 需要判断的数组
 * @returns {boolean}
 */

export const isEmptyArray = (array: any[]): boolean => {
  return !Array.isArray(array) || array.length === 0
}

/**
 * 判断空对象
 * @param {Object} object 需要判断的对象
 * @returns {boolean}
 */
export const isEmptyObject = (object: object): boolean => {
  let empty = false

  if (!(object instanceof Object)) {
    object = {}
  }

  empty = Object.keys(object).length === 0

  return empty
}

export const isEmptyValue = (value: any): boolean => {
  return value == null || value === ''
}

/**
 * 判断一个函数是否是一个生成器函数
 * @param {Function} fn
 * @returns {Boolean}
 */
export const isGeneratorFunction = (fn: any): boolean => {
  return fn && Object.prototype.toString.call(fn) === '[object GeneratorFunction]'
}

export const isNotNumber = (value: any): boolean => {
  return isEmptyValue(value) || isNaN(value)
}

export const noopValidator = (rule: any, value: any, callback: () => void): void => {
  callback()
}

export const patterns = {
  integer: /^[1-9]\d*$/, // 整数
  nonNegativeInteger: /^(0|[1-9]\d*)$/, // 非负整数
  limitedInteger: /^[1-9]\d{0,7}$/, // 有限整数
  cashTwo: /^(([1-9]{1}\d*)|(0{1}))(\.\d{2})?$/,
  cash: /^(([1-9]{1}\d*)|(0{1}))(\.\d{0,2})?$/,
  invalidCash: /\..{3}/,
}

export const validators = {
  isPatternMatch: (value: any, pattern: RegExp): boolean => {
    if (!value) {
      return true
    }
    return pattern && pattern.test && pattern.test(value)
  },
  isNumber: (number: any): boolean => {
    return !isNotNumber(number)
  },
  isBetween: (number: any, min: number, max: number): boolean => {
    return validators.isNumber(number) && number >= min && number <= max
  },
  isLessThan: (number: any, targetNumber: any): boolean => {
    if (isNotNumber(number) || isNotNumber(targetNumber)) {
      return true
    }
    return +number < +targetNumber
  },
  isLessThanOrEqualTo: (number: any, targetNumber: any): boolean => {
    if (isNotNumber(number) || isNotNumber(targetNumber)) {
      return true
    }
    return +number <= +targetNumber
  },
  isLargerThan: (number: any, targetNumber: any): boolean => {
    if (isNotNumber(number) || isNotNumber(targetNumber)) {
      return true
    }
    return +number > +targetNumber
  },
  isLargerThanOrEqualTo: (number: any, targetNumber: any): boolean => {
    if (isNotNumber(number) || isNotNumber(targetNumber)) {
      return true
    }
    return +number >= +targetNumber
  },
  isEmptyArray,
  isEmptyObject,
  isEmptyValue,
}
// url params
export const getURLParams = (search?: string): Record<string, string> => {
  search = search || location.search

  const list = search.split('?')

  if (!isEmptyArray(list) && list.length > 1) {
    const item = list[1]
    let items = item.split('&')

    if (isEmptyArray(items)) {
      items = []
    }

    const newParams: Record<string, string> = {}

    items.forEach((rs) => {
      const param = rs.split('=')

      if (!isEmptyArray(param)) {
        let key = ''
        let value = ''

        if (param.length === 1) {
          key = param[0]
        } else if (param.length === 2) {
          key = param[0]
          value = param[1]
        }

        key && value && (newParams[key] = value)
      }
    })

    return newParams
  } else {
    return {}
  }
}
export default {
  formatRequestData,
  getURLParams,
  formatPhoneDisplay,
  phoneDesensitize,
  sum,
  isEmptyArray,
  isEmptyObject,
  isEmptyValue,
  isGeneratorFunction,
  isNotNumber,
  noopValidator,
  patterns,
  validators,
}
