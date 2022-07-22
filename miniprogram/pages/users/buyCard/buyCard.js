"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../../../assets/analogue/data");
Page({
    data: {
        active: 0,
        status: false,
        parkCardType: data_1.parkCardType,
        currentId: -1
    },
    onLoad: function () {
    },
    shop: function () {
        var currentId = this.data.currentId;
        console.log(currentId);
    },
    confirm: function () {
        this.setData({
            status: false
        });
    },
    choose: function (e) {
        var _a = e.currentTarget.dataset, active = _a.active, id = _a.id;
        var currentData = data_1.parkCardType.filter(function (element) {
            if (element.id === id) {
                return true;
            }
            return false;
        });
        this.setData({
            active: active,
            status: true,
            currentId: id,
            currentData: currentData[0]
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV5Q2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1eUNhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzREFBNEQ7QUFFNUQsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLENBQUM7UUFDVCxNQUFNLEVBQUUsS0FBSztRQUNiLFlBQVkscUJBQUE7UUFDWixTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQ2Q7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELElBQUk7UUFDRyxJQUFBLFNBQVMsR0FBSSxJQUFJLENBQUMsSUFBSSxVQUFiLENBQWE7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBS0QsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxNQUFNLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxNQUFNLEVBQU4sVUFBTyxDQUFpRTtRQUNsRSxJQUFBLEtBQWlCLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUF0QyxNQUFNLFlBQUEsRUFBRSxFQUFFLFFBQTRCLENBQUE7UUFDNUMsSUFBTSxXQUFXLEdBQUcsbUJBQVksQ0FBQyxNQUFNLENBQUMsVUFBQyxPQUFZO1lBQ25ELElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFBO2FBQ1o7WUFDRCxPQUFPLEtBQUssQ0FBQTtRQUNkLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE1BQU0sUUFBQTtZQUNOLE1BQU0sRUFBRSxJQUFJO1lBQ1osU0FBUyxFQUFFLEVBQUU7WUFDYixXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUM1QixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyog5qih5ouf5pWw5o2uICovXHJcbmltcG9ydCB7IHBhcmtDYXJkVHlwZSB9IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9hbmFsb2d1ZS9kYXRhJ1xyXG5cclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGFjdGl2ZTogMCxcclxuICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICBwYXJrQ2FyZFR5cGUsXHJcbiAgICBjdXJyZW50SWQ6IC0xXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeCueWHu+i0reS5sFxyXG4gICAqL1xyXG4gIHNob3AoKSB7XHJcbiAgICBsZXQge2N1cnJlbnRJZH0gPSB0aGlzLmRhdGFcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJZClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnoa7lrprotK3kubBcclxuICAgKi9cclxuICBjb25maXJtKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgc3RhdHVzOiBmYWxzZVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpgInmi6nlgZzovabljaFcclxuICAgKiBAcGFyYW0gZSBcclxuICAgKi9cclxuICBjaG9vc2UoZTogeyBjdXJyZW50VGFyZ2V0OiB7IGRhdGFzZXQ6IHsgYWN0aXZlOiBudW1iZXI7IGlkOiBudW1iZXIgfSB9IH0pIHtcclxuICAgIGxldCB7IGFjdGl2ZSwgaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IHBhcmtDYXJkVHlwZS5maWx0ZXIoKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudC5pZCA9PT0gaWQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGFjdGl2ZSxcclxuICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICBjdXJyZW50SWQ6IGlkLFxyXG4gICAgICBjdXJyZW50RGF0YTogY3VycmVudERhdGFbMF1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxufSkiXX0=