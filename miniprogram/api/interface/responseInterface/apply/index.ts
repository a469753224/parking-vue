/**
 * 发布模块响应数据接口
 */

/**
 * 查看所有申请发布接口 
 * id 发布车位Id 
 * releaseState 1申请中2审核失败3取消审核5审核通过
 * phone 联系电话
 * street 联系电话
 * placeNumbering 车位编号
 * placeLock 不用理会字段永远是空
 * contactsName 联系人
 * createDate 发布创建时间
 * remarks 审核备注信息
 * communityName 车位所在小区
*/
export interface ApplicationsplaceResponseData {
  id: number
  releaseState: number
  phone: string
  street: string
  placeNumbering: string[]
  placeLock: null
  contactsName: string
  createDate: null
  remarks: string[]
  communityName: string
}