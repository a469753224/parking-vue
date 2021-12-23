"use strict";
Page({
    data: {
        content: ''
    },
    onLoad: function (_options) {
    },
    subComments: function () {
        var content = this.data.content;
        var title = content ? '提交成功，请等待反馈！' : '请填写内容';
        wx.showToast({
            title: title,
            icon: 'none'
        });
        this.setData({
            content: ''
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmZWVkYmFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBS0osSUFBSSxFQUFFO1FBQ0wsT0FBTyxFQUFFLEVBQUU7S0FDWDtJQUtELE1BQU0sRUFBRSxVQUFVLFFBQVE7SUFFMUIsQ0FBQztJQUtELFdBQVc7UUFDTCxJQUFBLE9BQU8sR0FBSSxJQUFJLENBQUMsSUFBSSxRQUFiLENBQWE7UUFDekIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtRQUM3QyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1osS0FBSyxPQUFBO1lBQ0wsSUFBSSxFQUFFLE1BQU07U0FDWixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osT0FBTyxFQUFFLEVBQUU7U0FDWCxDQUFDLENBQUE7SUFDSCxDQUFDO0NBRUQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XHJcblxyXG5cdC8qKlxyXG5cdCAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG5cdCAqL1xyXG5cdGRhdGE6IHtcclxuXHRcdGNvbnRlbnQ6ICcnXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuXHQgKi9cclxuXHRvbkxvYWQ6IGZ1bmN0aW9uIChfb3B0aW9ucykge1xyXG5cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDmj5DkuqTmhI/op4Hlj43ppohcclxuXHQgKi9cclxuXHRzdWJDb21tZW50cygpe1xyXG5cdFx0bGV0IHtjb250ZW50fSA9IHRoaXMuZGF0YVxyXG5cdFx0bGV0IHRpdGxlID0gY29udGVudCA/ICfmj5DkuqTmiJDlip/vvIzor7fnrYnlvoXlj43ppojvvIEnIDogJ+ivt+Whq+WGmeWGheWuuSdcclxuXHRcdHd4LnNob3dUb2FzdCh7XHJcblx0XHRcdHRpdGxlLFxyXG5cdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdH0pXHJcblx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRjb250ZW50OiAnJ1xyXG5cdFx0fSlcclxuXHR9XHJcblx0XHJcbn0pIl19