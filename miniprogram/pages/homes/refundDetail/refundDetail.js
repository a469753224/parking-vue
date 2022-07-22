"use strict";
Page({
    data: {
        status: 1,
        show: false,
        showContact: false
    },
    onLoad: function (_options) { },
    revoke: function () {
        this.setData({
            show: true
        });
    },
    contact: function () {
        this.setData({
            showContact: true
        });
    },
    confirm: function () {
        this.setData({
            show: false
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmdW5kRGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVmdW5kRGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJLENBQUM7SUFLSixJQUFJLEVBQUU7UUFDTCxNQUFNLEVBQUUsQ0FBQztRQUNULElBQUksRUFBRSxLQUFLO1FBQ1gsV0FBVyxFQUFFLEtBQUs7S0FDbEI7SUFLRCxNQUFNLEVBQUUsVUFBVSxRQUFRLElBQUksQ0FBQztJQUsvQixNQUFNO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNaLElBQUksRUFBRSxJQUFJO1NBQ1YsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUtELE9BQU87UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osV0FBVyxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUtELE9BQU87UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osSUFBSSxFQUFFLEtBQUs7U0FDWCxDQUFDLENBQUE7SUFDSCxDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XHJcblxyXG5cdC8qKlxyXG5cdCAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG5cdCAqL1xyXG5cdGRhdGE6IHtcclxuXHRcdHN0YXR1czogMSxcclxuXHRcdHNob3c6IGZhbHNlLFxyXG5cdFx0c2hvd0NvbnRhY3Q6IGZhbHNlXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuXHQgKi9cclxuXHRvbkxvYWQ6IGZ1bmN0aW9uIChfb3B0aW9ucykgeyB9LFxyXG5cclxuXHQvKipcclxuXHQgKiDmkqTplIDnlLPor7dcclxuXHQgKi9cclxuXHRyZXZva2UoKSB7XHJcblx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRzaG93OiB0cnVlXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOiBlOezu+WuouacjVxyXG5cdCAqL1xyXG5cdGNvbnRhY3QoKSB7XHJcblx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRzaG93Q29udGFjdDogdHJ1ZVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDmkqTplIDnlLPor7dcclxuXHQgKi9cclxuXHRjb25maXJtKCkge1xyXG5cdFx0dGhpcy5zZXREYXRhKHtcclxuXHRcdFx0c2hvdzogZmFsc2VcclxuXHRcdH0pXHJcblx0fSxcclxufSkiXX0=