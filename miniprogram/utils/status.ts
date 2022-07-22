/**
 * 停车记录订单状态描述
 * @param {Number} status 状态值
 */
export const status = (status: string): string => {
	let state: string = ''
	switch (parseInt(status)) {
		case 0:
			state = '订单完成';
			break;
		case 1:
			state = '预留中';
			break;
		case 2:
			state = '使用中';
			break;
		case 3:
			state = '立即支付';
			break;
		case 4:
			state = '已取消';
			break;
	}
	return state
}


/**
 * 根据订单id查询订单的订单状态
 * @param {Number,String} status 
 */
export const orderStatus = (status: string): string => {
	let state: string = ''
	switch (parseInt(status)) {
		case 0:
			state = '完成'
			break;
		case 1:
			state = '预留'
			break;
		case 2:
			state = '使用'
			break;
		case 3:
			state = '待支付'
			break;
		case 4:
			state = '取消'
			break;
		case 5:
			state = '超时'
			break;
	}
	return state
}

/**
 * 车位审核状态
 * @param {String,Number} status 
 */
export const releaseState = (status: string): string => {
	let state: string = ''
	switch (parseInt(status)) {
		case 1:
			state = '申请中'
			break;
		case 2:
			state = '审核失败'
			break;
		case 3:
			state = '取消审核'
			break;
		case 5:
			state = '审核通过'
			break;
	}
	return state
}

/**
 * 车位状态
 * @param {String} state 使用状态
 * @param {String} open  开放状态
 */
export const openStatus = (state: number, open: number): string => {
	if (open == 0) {
		if (state == 1) {
			return '空闲'
		} else {
			return '使用中'
		}
	} else {
		return '已关闭'
	}
}


/**
 * @param {Number} type 	 优惠券类型 1.立减券
 * @param {Number} withAmout 减去的部分
 * @param {Number} usedAmout 起用基数
 */
export const couponStatus = (type: number, withAmount: number, usedAmount: number): string => {
	let result: string = ''
	if (type == 1) {
		if (withAmount > 0) {
			result = `满${usedAmount}减${usedAmount}`
		}
		if (withAmount = 0) {
			result = `立减${usedAmount}`
		}
	}
	if (type = 2) {
		if (withAmount > 0) {
			result = `满${withAmount}打${usedAmount}折`
		}
		if (withAmount = 0) {
			result = `打${usedAmount}折`
		}
	}
	return result
}