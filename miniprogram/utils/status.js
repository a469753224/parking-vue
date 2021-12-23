"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponStatus = exports.openStatus = exports.releaseState = exports.orderStatus = exports.status = void 0;
exports.status = function (status) {
    var state = '';
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
    return state;
};
exports.orderStatus = function (status) {
    var state = '';
    switch (parseInt(status)) {
        case 0:
            state = '完成';
            break;
        case 1:
            state = '预留';
            break;
        case 2:
            state = '使用';
            break;
        case 3:
            state = '待支付';
            break;
        case 4:
            state = '取消';
            break;
        case 5:
            state = '超时';
            break;
    }
    return state;
};
exports.releaseState = function (status) {
    var state = '';
    switch (parseInt(status)) {
        case 1:
            state = '申请中';
            break;
        case 2:
            state = '审核失败';
            break;
        case 3:
            state = '取消审核';
            break;
        case 5:
            state = '审核通过';
            break;
    }
    return state;
};
exports.openStatus = function (state, open) {
    if (open == 0) {
        if (state == 1) {
            return '空闲';
        }
        else {
            return '使用中';
        }
    }
    else {
        return '已关闭';
    }
};
exports.couponStatus = function (type, withAmount, usedAmount) {
    var result = '';
    if (type == 1) {
        if (withAmount > 0) {
            result = "\u6EE1" + usedAmount + "\u51CF" + usedAmount;
        }
        if (withAmount = 0) {
            result = "\u7ACB\u51CF" + usedAmount;
        }
    }
    if (type = 2) {
        if (withAmount > 0) {
            result = "\u6EE1" + withAmount + "\u6253" + usedAmount + "\u6298";
        }
        if (withAmount = 0) {
            result = "\u6253" + usedAmount + "\u6298";
        }
    }
    return result;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlhLFFBQUEsTUFBTSxHQUFHLFVBQUMsTUFBYztJQUNwQyxJQUFJLEtBQUssR0FBVyxFQUFFLENBQUE7SUFDdEIsUUFBUSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDekIsS0FBSyxDQUFDO1lBQ0wsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUNmLE1BQU07UUFDUCxLQUFLLENBQUM7WUFDTCxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ2QsTUFBTTtRQUNQLEtBQUssQ0FBQztZQUNMLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDZCxNQUFNO1FBQ1AsS0FBSyxDQUFDO1lBQ0wsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUNmLE1BQU07UUFDUCxLQUFLLENBQUM7WUFDTCxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ2QsTUFBTTtLQUNQO0lBQ0QsT0FBTyxLQUFLLENBQUE7QUFDYixDQUFDLENBQUE7QUFPWSxRQUFBLFdBQVcsR0FBRyxVQUFDLE1BQWM7SUFDekMsSUFBSSxLQUFLLEdBQVcsRUFBRSxDQUFBO0lBQ3RCLFFBQVEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3pCLEtBQUssQ0FBQztZQUNMLEtBQUssR0FBRyxJQUFJLENBQUE7WUFDWixNQUFNO1FBQ1AsS0FBSyxDQUFDO1lBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQTtZQUNaLE1BQU07UUFDUCxLQUFLLENBQUM7WUFDTCxLQUFLLEdBQUcsSUFBSSxDQUFBO1lBQ1osTUFBTTtRQUNQLEtBQUssQ0FBQztZQUNMLEtBQUssR0FBRyxLQUFLLENBQUE7WUFDYixNQUFNO1FBQ1AsS0FBSyxDQUFDO1lBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQTtZQUNaLE1BQU07UUFDUCxLQUFLLENBQUM7WUFDTCxLQUFLLEdBQUcsSUFBSSxDQUFBO1lBQ1osTUFBTTtLQUNQO0lBQ0QsT0FBTyxLQUFLLENBQUE7QUFDYixDQUFDLENBQUE7QUFNWSxRQUFBLFlBQVksR0FBRyxVQUFDLE1BQWM7SUFDMUMsSUFBSSxLQUFLLEdBQVcsRUFBRSxDQUFBO0lBQ3RCLFFBQVEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3pCLEtBQUssQ0FBQztZQUNMLEtBQUssR0FBRyxLQUFLLENBQUE7WUFDYixNQUFNO1FBQ1AsS0FBSyxDQUFDO1lBQ0wsS0FBSyxHQUFHLE1BQU0sQ0FBQTtZQUNkLE1BQU07UUFDUCxLQUFLLENBQUM7WUFDTCxLQUFLLEdBQUcsTUFBTSxDQUFBO1lBQ2QsTUFBTTtRQUNQLEtBQUssQ0FBQztZQUNMLEtBQUssR0FBRyxNQUFNLENBQUE7WUFDZCxNQUFNO0tBQ1A7SUFDRCxPQUFPLEtBQUssQ0FBQTtBQUNiLENBQUMsQ0FBQTtBQU9ZLFFBQUEsVUFBVSxHQUFHLFVBQUMsS0FBYSxFQUFFLElBQVk7SUFDckQsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUE7U0FDWDthQUFNO1lBQ04sT0FBTyxLQUFLLENBQUE7U0FDWjtLQUNEO1NBQU07UUFDTixPQUFPLEtBQUssQ0FBQTtLQUNaO0FBQ0YsQ0FBQyxDQUFBO0FBUVksUUFBQSxZQUFZLEdBQUcsVUFBQyxJQUFZLEVBQUUsVUFBa0IsRUFBRSxVQUFrQjtJQUNoRixJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUE7SUFDdkIsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ2QsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLE1BQU0sR0FBRyxXQUFJLFVBQVUsY0FBSSxVQUFZLENBQUE7U0FDdkM7UUFDRCxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxHQUFHLGlCQUFLLFVBQVksQ0FBQTtTQUMxQjtLQUNEO0lBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1FBQ2IsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLE1BQU0sR0FBRyxXQUFJLFVBQVUsY0FBSSxVQUFVLFdBQUcsQ0FBQTtTQUN4QztRQUNELElBQUksVUFBVSxHQUFHLENBQUMsRUFBRTtZQUNuQixNQUFNLEdBQUcsV0FBSSxVQUFVLFdBQUcsQ0FBQTtTQUMxQjtLQUNEO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDZCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5YGc6L2m6K6w5b2V6K6i5Y2V54q25oCB5o+P6L+wXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXMg54q25oCB5YC8XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3RhdHVzID0gKHN0YXR1czogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuXHRsZXQgc3RhdGU6IHN0cmluZyA9ICcnXHJcblx0c3dpdGNoIChwYXJzZUludChzdGF0dXMpKSB7XHJcblx0XHRjYXNlIDA6XHJcblx0XHRcdHN0YXRlID0gJ+iuouWNleWujOaIkCc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAxOlxyXG5cdFx0XHRzdGF0ZSA9ICfpooTnlZnkuK0nO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMjpcclxuXHRcdFx0c3RhdGUgPSAn5L2/55So5LitJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDM6XHJcblx0XHRcdHN0YXRlID0gJ+eri+WNs+aUr+S7mCc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSA0OlxyXG5cdFx0XHRzdGF0ZSA9ICflt7Llj5bmtognO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblx0cmV0dXJuIHN0YXRlXHJcbn1cclxuXHJcblxyXG4vKipcclxuICog5qC55o2u6K6i5Y2VaWTmn6Xor6LorqLljZXnmoTorqLljZXnirbmgIFcclxuICogQHBhcmFtIHtOdW1iZXIsU3RyaW5nfSBzdGF0dXMgXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgb3JkZXJTdGF0dXMgPSAoc3RhdHVzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG5cdGxldCBzdGF0ZTogc3RyaW5nID0gJydcclxuXHRzd2l0Y2ggKHBhcnNlSW50KHN0YXR1cykpIHtcclxuXHRcdGNhc2UgMDpcclxuXHRcdFx0c3RhdGUgPSAn5a6M5oiQJ1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMTpcclxuXHRcdFx0c3RhdGUgPSAn6aKE55WZJ1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMjpcclxuXHRcdFx0c3RhdGUgPSAn5L2/55SoJ1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMzpcclxuXHRcdFx0c3RhdGUgPSAn5b6F5pSv5LuYJ1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgNDpcclxuXHRcdFx0c3RhdGUgPSAn5Y+W5raIJ1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgNTpcclxuXHRcdFx0c3RhdGUgPSAn6LaF5pe2J1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblx0cmV0dXJuIHN0YXRlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDovabkvY3lrqHmoLjnirbmgIFcclxuICogQHBhcmFtIHtTdHJpbmcsTnVtYmVyfSBzdGF0dXMgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVsZWFzZVN0YXRlID0gKHN0YXR1czogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuXHRsZXQgc3RhdGU6IHN0cmluZyA9ICcnXHJcblx0c3dpdGNoIChwYXJzZUludChzdGF0dXMpKSB7XHJcblx0XHRjYXNlIDE6XHJcblx0XHRcdHN0YXRlID0gJ+eUs+ivt+S4rSdcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDI6XHJcblx0XHRcdHN0YXRlID0gJ+WuoeaguOWksei0pSdcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDM6XHJcblx0XHRcdHN0YXRlID0gJ+WPlua2iOWuoeaguCdcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDU6XHJcblx0XHRcdHN0YXRlID0gJ+WuoeaguOmAmui/hydcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cdHJldHVybiBzdGF0ZVxyXG59XHJcblxyXG4vKipcclxuICog6L2m5L2N54q25oCBXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSDkvb/nlKjnirbmgIFcclxuICogQHBhcmFtIHtTdHJpbmd9IG9wZW4gIOW8gOaUvueKtuaAgVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG9wZW5TdGF0dXMgPSAoc3RhdGU6IG51bWJlciwgb3BlbjogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuXHRpZiAob3BlbiA9PSAwKSB7XHJcblx0XHRpZiAoc3RhdGUgPT0gMSkge1xyXG5cdFx0XHRyZXR1cm4gJ+epuumXsidcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAn5L2/55So5LitJ1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gJ+W3suWFs+mXrSdcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtOdW1iZXJ9IHR5cGUgXHQg5LyY5oOg5Yi457G75Z6LIDEu56uL5YeP5Yi4XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB3aXRoQW1vdXQg5YeP5Y6755qE6YOo5YiGXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB1c2VkQW1vdXQg6LW355So5Z+65pWwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY291cG9uU3RhdHVzID0gKHR5cGU6IG51bWJlciwgd2l0aEFtb3VudDogbnVtYmVyLCB1c2VkQW1vdW50OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG5cdGxldCByZXN1bHQ6IHN0cmluZyA9ICcnXHJcblx0aWYgKHR5cGUgPT0gMSkge1xyXG5cdFx0aWYgKHdpdGhBbW91bnQgPiAwKSB7XHJcblx0XHRcdHJlc3VsdCA9IGDmu6Eke3VzZWRBbW91bnR95YePJHt1c2VkQW1vdW50fWBcclxuXHRcdH1cclxuXHRcdGlmICh3aXRoQW1vdW50ID0gMCkge1xyXG5cdFx0XHRyZXN1bHQgPSBg56uL5YePJHt1c2VkQW1vdW50fWBcclxuXHRcdH1cclxuXHR9XHJcblx0aWYgKHR5cGUgPSAyKSB7XHJcblx0XHRpZiAod2l0aEFtb3VudCA+IDApIHtcclxuXHRcdFx0cmVzdWx0ID0gYOa7oSR7d2l0aEFtb3VudH3miZMke3VzZWRBbW91bnR95oqYYFxyXG5cdFx0fVxyXG5cdFx0aWYgKHdpdGhBbW91bnQgPSAwKSB7XHJcblx0XHRcdHJlc3VsdCA9IGDmiZMke3VzZWRBbW91bnR95oqYYFxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0XHJcbn0iXX0=