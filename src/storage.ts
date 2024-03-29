/**
 * **从本地存储中获取指定字段的值**
 * @param {string} fieldName 需要获取的本地存储数据的字段名
 * @param {boolean} needParse 是否需要对获取到的数据进行JSON解析，默认true
 * @returns {any}
 */
export const getStorageData = (fieldName: string, needParse = true): any => {
  return !needParse
    ? localStorage.getItem(fieldName)
    : JSON.parse(localStorage.getItem(fieldName) || '{}')
}

/**
 * **设置本地存储中指定字段的值**
 * @param {string} fieldName 需要设置的本地存储数据的字段名
 * @param {any} fieldValue 需要设置的本地存储数据的字段值
 * @param {boolean} needStringify 是否需要对存储的数据进行JSON字符串化，默认为true
 */
export const setStorageData = (fieldName: string, fieldValue: any, needStringify = true): any => {
  localStorage.setItem(fieldName, needStringify ? JSON.stringify(fieldValue) : fieldValue)
}

/**
 * **从本地存储中获取指定字段的值**
 * @param {string} fieldName 需要获取的本地存储数据的字段名
 * @param {boolean} needParse 是否需要对获取到的数据进行JSON解析，默认true
 * @returns {any}
 */
export const getSessionData = (fieldName: string, needParse = true): any => {
  return !needParse
    ? sessionStorage.getItem(fieldName)
    : JSON.parse(sessionStorage.getItem(fieldName) || '{}')
}

/**
 * **设置本地存储中指定字段的值**
 * @param {string} fieldName 需要设置的本地存储数据的字段名
 * @param {any} fieldValue 需要设置的本地存储数据的字段值
 * @param {boolean} needStringify 是否需要对存储的数据进行JSON字符串化，默认为true
 */
export const setSessionData = (fieldName: string, fieldValue: any, needStringify = true): any => {
  sessionStorage.setItem(fieldName, needStringify ? JSON.stringify(fieldValue) : fieldValue)
}

export default {
  getStorageData,
  setStorageData,
  getSessionData,
  setSessionData,
}
