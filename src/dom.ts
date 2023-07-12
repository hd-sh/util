/**
 * 动态创建script
 * importScript('xxx.js')
 */

export const importScript = (
  (oHead: HTMLHeadElement, self: Window) =>
  (sSrc: string): Promise<void> =>
    new Promise((resolve, reject) => {
      if ((self as any).__cacheImportScript__ && (self as any).__cacheImportScript__[sSrc]) {
        resolve()
      } else {
        const oScript = document.createElement('script')
        oScript.type = 'text/javascript'
        oScript.charset = 'utf-8'
        oScript.onerror = () => {
          reject(new URIError('The script ' + sSrc + ' is not accessible.'))
        }
        oScript.onload = () => {
          if (!(self as any).__cacheImportScript__) {
            ;(self as any).__cacheImportScript__ = {}
          }
          ;(self as any).__cacheImportScript__[sSrc] = sSrc
          resolve()
        }
        oHead.appendChild(oScript)
        oScript.src = sSrc
      }
    })
)(document.head || document.getElementsByTagName('head')[0], window)

/**
 *
 * @param {!!dom} ele
 * @param {*} attr
 * @returns
 */
export function getStyle(ele: HTMLElement, attr: string): string | null {
  const style = window.getComputedStyle(ele)
  return style ? style.getPropertyValue(attr) : null
}

// 过滤查询参数
/**
 *
 * @param {*} values
 * @param {*} ignoreValue 忽略的值（移除值为xx的健值对）
 * @returns
 */
export const formatSearchValue = (
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

// 获取元素的偏移量
export function getElementOffset(
  eln: HTMLElement | null
): { top: number; left: number; width: number; height: number } | undefined {
  let parObj = eln
  if (!parObj) {
    return
  }
  const width = parObj.offsetWidth
  const height = parObj.offsetHeight
  let top = parObj.offsetTop
  let left = parObj.offsetLeft
  while ((parObj = parObj.offsetParent as HTMLElement)) {
    const { offsetTop, offsetLeft } = parObj
    top += offsetTop
    left += offsetLeft
  }
  return {
    top,
    left,
    width,
    height,
  }
}
export default {
  importScript,
  getStyle,
  formatSearchValue,
  getElementOffset,
}
