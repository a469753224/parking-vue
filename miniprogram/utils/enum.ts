/**
 * 车位状态
 */
export enum OpenStatus {
	'空闲' = 1,
	'使用中' = 2,
	'已关闭' = 3
}

/**
 * 车位审核状态
 */
export enum ReleaseStatus {
	'申请中' = 1,
	'审核失败' = 2,
	'取消审核' = 3,
	'审核通过' = 5
}

/**
 * 根据订单id查询订单的订单状态
 */
export enum OrderStatus {
	'完成' = 0,
	'预留' = 1,
	'使用' = 2,
	'待付' = 3,
	'取消' = 4,
	'超时' = 5
}