/**
 * 短信模块求参数接口
 */

 /**
  * 登录注册发短信接口
  * phone 手机号码
  * msgType 短信类型1登录短信2注册短信
  */
 export interface sendMsg{
    phone: string
    msgType: string
 }

 /**
  * 修改密码和支付密码短信接口
  * phone 手机号码
  */
 export interface sendMsgPassword {
    phone: string
 }