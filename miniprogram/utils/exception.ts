/**
 * 车牌验证规则
 * @param {String} n 验证对象
 * @param {Number,String} type 验证规则类型 7-普通车牌 8-新能源车牌
 */
const plat = (n: string, type: number): boolean => {
  let exp = /''/
  if (type == 7) {
    exp = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}/
  }
  if (type == 8) {
    exp = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))/
  }
  return exp.test(n)
}

/**
* 密码验证规则
* @param {String} n 密码
*/
const passwordRul = (n: string): boolean => {
  let exp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
  return exp.test(n)
}

/**
* 手机验证码验证规则
* @param {Number} n 验证码 
*/
const codeRul = (n: string): boolean => {
  let exp = /^\d{6}$/
  return exp.test(n)
}

/**
* 手机号码验证规则
* @param {String} n 手机号码 
*/
const phoneRul = (n: string): boolean => {
  let exp = /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/

  return exp.test(n)
}

export {
  plat,
  codeRul,
  phoneRul,
  passwordRul
} 