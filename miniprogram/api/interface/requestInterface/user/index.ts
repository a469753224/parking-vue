/**
 * 用户模块求参数接口
 */

/**
 * 添加车辆接口
 * plate 车牌号码
 * status 添加车辆时用户是否设置为默认车辆，1：设置默认，0：不设置默认
 * newEnergy 新能源标识。1：新能源；0：非新能源
 */
export interface AddVehiclePlate {
  plate: string
  status: number
  newEnergy: number
}

/**
 * 设置默认车辆接口
 * id 车牌id
 */
export interface SetPlateDevault {
  id: number
}

/**
 * 删除车辆接口
 * id 车辆id
 */
export interface DeletePlate {
  id: string
}

/**
 * 修改密码接口
 * password 密码
 * zPassword 再次确认密码
 * msg 短信验证码
 * phone 电话号码
 */
export interface ModifyPassword {
  password: string
  zPassword: string
  msg: string
  phone: string
}

/**
 * 修改昵称接口
 * nickName 昵称
 */
export interface ModifyName {
  nickName: string
}

/**
 * 忘记密码接口
 * Password 密码
 * zPassword 确认密码
 * msg 短信验证码
 * phone 手机号
 */
export interface ForgetPasswordModify {
  Password: string
  zPassword: string
  msg: string
  phone: string
}

/**
 * 微信小程序登录接口
 * code 微信回调code
 */
export interface Wxlogin {
  code: string
}

/**
 * 绑定手机号码接口
 * phone 绑定的手机号码
 * msg 验证码
 * condition 0默认值1代表用户同意绑定
 */
export interface BindPhone {
  phone: string
  msg: string
  condition: number
}