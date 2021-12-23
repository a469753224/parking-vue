/**
 * 发布模块请求参数接口
 */

/**
 * 申请发布车位接口
 * contactsName 联系人
 * phone  电话
 * street 小区
 * mapData  地图所有信息
 * communityName  小区名字
 */
export interface Applicationsplace {
  contactsName: string
  phone: string
  street: string
  mapData: string
  communityName: string
}

/**
 * 微信申请发布车位接口
 * contactsName 联系人
 * phone 电话
 * mapData 地图所有信息
 * street 区道
 * communityName 小区名字
 */
export interface Wxplace {
  contactsName: string
  phone: string
  mapData: string
  street: string
  communityName: string
}

/**
 * 取消发布申请接口
 * id 发布Id
 */
export interface Cancelplace {
  id: string
}

/**
 * 删除发布申请接口
 * id 发布Id
 */
export interface PlaceDelete {
  id: string
}