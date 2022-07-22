"use strict";
Component({
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: '提示'
        },
        content: {
            type: String,
            value: '这里是提示内容'
        },
        showCancel: {
            type: Boolean,
            value: true
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        confirmText: {
            type: String,
            value: '确定'
        }
    },
    data: {},
    methods: {
        cancel: function () {
            this.setData({
                show: false
            });
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVQsVUFBVSxFQUFFO1FBQ1gsSUFBSSxFQUFFO1lBQ0wsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNaO1FBQ0QsS0FBSyxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsSUFBSTtTQUNYO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsU0FBUztTQUNoQjtRQUNELFVBQVUsRUFBRTtZQUNYLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLElBQUk7U0FDWDtRQUNELFVBQVUsRUFBRTtZQUNYLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDWDtRQUNELFdBQVcsRUFBRTtZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDWDtLQUNEO0lBS0QsSUFBSSxFQUFFLEVBRUw7SUFLRCxPQUFPLEVBQUU7UUFLUixNQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLEVBQUUsS0FBSzthQUNYLENBQUMsQ0FBQTtRQUNILENBQUM7S0FDRDtDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5Db21wb25lbnQoe1xyXG5cdC8qKlxyXG5cdCAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxyXG5cdCAqL1xyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdHNob3c6IHtcclxuXHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0dmFsdWU6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0dGl0bGU6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHR2YWx1ZTogJ+aPkOekuidcclxuXHRcdH0sXHJcblx0XHRjb250ZW50OiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0dmFsdWU6ICfov5nph4zmmK/mj5DnpLrlhoXlrrknXHJcblx0XHR9LFxyXG5cdFx0c2hvd0NhbmNlbDoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHR2YWx1ZTogdHJ1ZVxyXG5cdFx0fSxcclxuXHRcdGNhbmNlbFRleHQ6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHR2YWx1ZTogJ+WPlua2iCdcclxuXHRcdH0sXHJcblx0XHRjb25maXJtVGV4dDoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdHZhbHVlOiAn56Gu5a6aJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOe7hOS7tueahOWIneWni+aVsOaNrlxyXG5cdCAqL1xyXG5cdGRhdGE6IHtcclxuXHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog57uE5Lu255qE5pa55rOV5YiX6KGoXHJcblx0ICovXHJcblx0bWV0aG9kczoge1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICog5Y+W5raI5Yig6Zmk5Y6G5Y+y6K6i5Y2VXHJcblx0XHQgKi9cclxuXHRcdGNhbmNlbCgpIHtcclxuXHRcdFx0dGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHRzaG93OiBmYWxzZVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHR9XHJcbn0pXHJcbiJdfQ==