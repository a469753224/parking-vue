
import { TX_MAP_KEY } from '../config/config'
import { RequestPromise } from '../types/http'

const QQMapWX = require('./qqmap-wx-jssdk')
const qqmapsdk = new QQMapWX({
  key: TX_MAP_KEY
})

export const formatTime = (date: Date): string => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (`${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`)
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

/**
 * 根据分钟数计算时分各自的数量
 * @param {Number} m 
 */
export const computedMinute = (m: number): string => {
  return `${Math.floor(m / 60)}小时${m % 60}分钟`
}

/**
 * 格式化金额
 * @param strData 
 * @param n 保留几位小数
 */
export const formatMoney = (number: string, n?: number | string): string => {
  var CurrencyAndAmountRegExp = /^(\d{1,18})|(\d{1,18}\.)|(\d{1,17}\.\d{0,1})|(\d{1,16}\.\d{0,2})|(\.\d{1,2})$/;
  var _result = CurrencyAndAmountRegExp.test(number);
  if (_result == false) {
    return number;
  }
  // 一般来说最多就6位吧，当然如果有特殊需求可自行更改(｀・∀・´)
  n = <number>n > 0 && <number>n <= 6 ? n : 2;
  var formatData = parseFloat((number + '').replace(/[^\d\.-]/g, '')).toFixed(<number>n) + '';
  var l = formatData.split('.')[0].split('').reverse();
  var r = formatData.split('.')[1];
  var t = '';
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
  }
  return t.split('').reverse().join('') + '.' + r;
}

/**
 * 根据时间戳转化成 yyy-MM-dd hh:mm:ss 格式
 * @param {Number} time 
 */
export const formatDate = (time: string, sign?: string): string => {
  sign = sign ? sign : '-'
  const date: Date = new Date(time); // 初始化日期
  const year = date.getFullYear(); //获取年份
  const month = date.getMonth() + 1; // 获取月份
  const day = date.getDate(); // 获取具体日
  const hour = date.getHours(); // 获取时
  const minutes = date.getMinutes(); // 获取分
  const seconds = date.getSeconds(); // 获取秒
  return `${year}${sign}${month < 10 ? '0' + month : month}${sign}${day < 10 ? '0' + day : day} ${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}

/**
 * 根据时间戳转化成 hh:ss 格式
 * @param {Number} time 
 */
export const formatMinute = (time: number): string => {
  const date: Date = new Date(time); // 初始化日期
  let hour: string | number = date.getHours(); // 获取时
  let minutes: string | number = date.getMinutes(); // 获取分

  hour = hour < 10 ? `0${hour}` : `${hour}`
  minutes = minutes < 10 ? `0${minutes}` : minutes

  return `${hour}:${minutes}`
}

/**
 * 将hh:mm转化成当前时间的 yyyy/MM/dd hh:mm:ss 格式
 * @param time hh:mm
 */
export const formmatDate = (time: string): string => {
  const date = new Date()
  const year = date.getFullYear(); //获取年份
  const month = date.getMonth() + 1; // 获取月份
  const day = date.getDate(); // 获取具体日
  return `${year}/${month}/${day} ${time}:00`
}

/**
 * 数据对象、数组是否为空
 * @param {Any} o 判断对象
 */
export const isEmpty = (o: any): boolean => {
  let bol: boolean = false
  if (o instanceof Object) {
    if (Object.keys(o).length === 0) {
      bol = true
    } else {
      bol = false
    }
  }
  if (o instanceof Array) {
    if (o.length == 0) {
      bol = true
    } else {
      bol = false
    }
  }
  return bol
}

/**
 * 批量储存操作
 * @param {Array} objs 插入对象集合
 */
export const setStorages = (objs: any): void => {
  for (let key in objs) {
    wx.setStorageSync(key, objs[key])
  }
}


/**
 * 根据时间戳转化成yyy.mm.dd
 * @param {Number} time 
 */
export const formatDates = (time: number, sign?: any): string => {
  sign = sign ? sign : '.'
  var date = new Date(time); // 初始化日期
  var year = date.getFullYear(); //获取年份
  var month = date.getMonth() + 1; // 获取月份
  var day = date.getDate(); // 获取具体日
  return `${year}${sign}${month < 10 ? '0' + month : month}${sign}${day < 10 ? '0' + day : day}`
}

/**
 * 获取自定义绑定数据
 * @param {Object} e  节点对象 
 * @param {*} name  自定义键值
 */
export const getSetDataCurrent = (e: any, name: string): any => {
  return e.currentTarget.dataset[name]
}

/**
 * 获取API地址中的参数值
 * @param {String} url 
 * @param {String} key 
 */
export const getParam = (url: string, key: string): string | null => {
  if (url.indexOf('?') !== -1) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = url.split('?')[1].match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  } else {
    return null
  }
}

/**
 * 根据日期时间计算时间戳
 * @param {Date}} t 
 * 特别注意： IOS只识别yyyy/mm/dd 00:00:00时间格式转化的时间戳,不识别yyyy-mm-dd 00:00:00时间格式转换的时间* 的戳，所以要进行转换时间格式
 */
export const getTime = (t: string | number): number => {
  let date = new Date(t)
  return date.getTime()
}

/**
 * 编译星期
 * @param {Array} arr 星期数组 
 */
export const repeatDesc = (arr: Array<any>): any => {
  arr = arr.map(item => {
    return parseInt(item)
  })
  if (arr.length == 2) {
    if (arr.indexOf(6) != -1 && arr.indexOf(7) != -1) {
      return '每周末'
    } else {
      return _week(arr)
    }
  } else if (arr.length == 5) {
    if (arr.indexOf(1) != -1 && arr.indexOf(2) != -1 && arr.indexOf(3) != -1 && arr.indexOf(4) != -1 && arr.indexOf(5) != -1) {
      return '每周一到周五'
    } else {
      return _week(arr)
    }
  } else if (arr.length == 7) {
    return '每天'
  } else {
    return _week(arr)
  }
}

const _week = (arr: any): string => {
  let week = []
  if (arr.length > 0) {
    for (let item of arr) {
      let t = ''
      switch (parseInt(item)) {
        case 1:
          t = '一'
          break;
        case 2:
          t = '二'
          break;
        case 3:
          t = '三'
          break;
        case 4:
          t = '四'
          break;
        case 5:
          t = '五'
          break;
        case 6:
          t = '六'
          break;
        case 7:
          t = '日'
          break;
      }
      week.push(t)
    }
  }
  return `每周 ${week.join('、')}`
}

/**
 * 判断某个时间是否在给出的区间内
 * @param {Date} time 目标时间 格式yyyy/mm/dd hh:mm:ss 或 yyyy-mm-dd hh:mm:ss
 * @param {Array} section 
 */
export const contrastTime = (time: number, section: number[]): boolean => {
  const end = formatMinute(section[1])
  const begin = formatMinute(section[0])
  const now = formatMinute(time)
  const date = new Date()
  const b = _toNumber(begin.split(':'))
  const n = _toNumber(now.split(':'))
  const e = _toNumber(end.split(':'))
  const b1 = date.setHours(b[0], b[1])
  const n1 = date.setHours(n[0], n[1])
  const e1 = date.setHours(e[0], e[1])
  let temp = false
  if (n1 > b1 && n1 < e1) {
    temp = true
  } else {
    temp = false
  }
  return temp
}

function _toNumber(arr: any) {
  let temp: number[] = []
  for (let i of arr) {
    temp.push(parseInt(i))
  }
  return temp
}

/**
 * 将hh:ss转换成时间戳
 * @param {String} date 时间格式 hh:ss 
 */
export const formatTimeStamp = (hm: string): number => {
  var date = new Date(); // 初始化日期
  var year = date.getFullYear(); //获取年份
  var month = date.getMonth() + 1; // 获取月份
  var day = date.getDate(); // 获取具体日
  return getTime(`${year}/${month}/${day} ${hm}:00`)
}

/**
 * 向数组中空白处顺序添加元素
 * @param {Array} arr 
 * @param {any} n 
 */
export const insertArray = (arr: string[], n: string): any[] => {
  if (n !== '') {
    for (let i in arr) {
      if (arr[i] === '') {
        arr[i] = n
        break
      }
    }
  }
  return arr
}

/**
 * 正则提取地址中的省市区
 * @param {String} address 地址
 */
export const extractProCityCode = (address: { match: (arg0: RegExp) => any[] }): Object => {
  const reg = /.+?(省|市|自治区|自治州|县|区)/g
  let ads = address.match(reg).length == 2 ? [address.match(reg)[0], ...address.match(reg)] : address.match(reg)
  return {
    province: ads[0],
    city: ads[1],
    area: ads[2]
  }
}

/**
 * 获取地址信息
 */
export const getDistance = (form: any, to: any): RequestPromise => {
  return new Promise(async resolve => {
    qqmapsdk.calculateDistance({
      form,
      to,
      mode: 'driving',
      success: (res: { status: number; result: { elements: { distance: any }[] } }) => {
        if (res.status == 0) {
          resolve({
            code: 200,
            data: _kilometre(res.result.elements[0].distance)
          })
        }
      }
    })
  })
}

const _kilometre = (meters: number): string => {
  if (meters > 999) {
    return `${meters / 1000}公里`
  } else {
    return `${meters}米`
  }
}

const toString = Object.prototype.toString
/**
 * 判断是否为Date类型
 * @param val 
 */
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

/**
 * 判断是都为Object类型
 * @param val 
 */
export function isObject(val: any): val is Object {
  return val !== 'null' && typeof val === 'object'
}

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ; (<T & U>to)[key] = <any>from[key]
  }
  return <T & U>to
}

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/ig, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/ig, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/ig, '[')
    .replace(/%5D/ig, ']')
}

/**
 * url参数处理
 * @param url API地址
 * @param params 传入参数
 */
export function buildURL(url: string, params?: any): string {

  if (!params) {
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach(key => {

    const val = params[key]

    if (val === null || typeof val === 'undefined') {
      return
    }

    let values = []

    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }

    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })

  })

  let serializedParams = parts.join('&')

  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url = `${url}${url.indexOf('?') === -1 ? '?' : '&'}${serializedParams}`
  }

  return url
}

/**
 * 剩余天数
 * @param date 时间格式:yyyy-mm-dd
 */
export function daysRemain(date: string): number {
  date = date.split(' ')[0]
  const s2 = new Date(date.replace(/-/g, "/"));
  const s1 = new Date();
  const days = s2.getTime() - s1.getTime();
  const time = parseInt(<any>(days / (1000 * 60 * 60 * 24)));
  return time + 1
}

/**
 * 字符串带字母有序排列
 * @param str 目标字符串
 */
export function sortRuls(str: any): any {
  let result = str.split(/[a-zA-Z]\./g)
  result = result.filter((element: any) => {
    if (element) {
      return true
    }
    return false
  })
  const keys = str.match(/[a-zA-Z]\./g)
  let ruls: string[] = []

  for (let i in result) {
    if (result[i]) {
      const key = result[i].match(/\w./)
      const val = result[i].replace(/\w./, '')
      ruls.push(`${keys[i]} ${key}${val}`)
    }
  }
  return ruls
}

/**
 * 首字母ascii排序
 */
export function sort_ASCII(obj: { [x: string]: any }): any {
  var arr = new Array();
  var num = 0;
  for (var i in obj) {
    arr[num] = i;
    num++;
  }
  var sortArr = arr.sort();
  var sortObj = {} as any;
  for (var i in sortArr) {
    sortObj[sortArr[i]] = obj[sortArr[i]];
  }
  return sortObj;
}

/**
 * 生成随机字符串
 */
export function randomWord(randomFlag: boolean = true, min: number = 20, max: number = 32) {
  var str = "",
    range = min,
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;
  }
  for (var i = 0; i < range; i++) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
}