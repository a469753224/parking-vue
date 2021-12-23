"use strict";
Component({
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        title: {
            type: String,
            value: '确定要取消申请'
        },
        content: {
            type: String,
            value: '取消后可以在申请记录中重新申请'
        },
        showCancel: {
            type: Boolean,
            value: true
        }
    },
    data: {},
    methods: {
        confirm: function () {
            this.triggerEvent('confirm');
            this.setData({
                show: false
            });
        },
        cancel: function () {
            this.triggerEvent('cancel');
            this.setData({
                show: false
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FuY2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJVCxVQUFVLEVBQUU7UUFFWCxJQUFJLEVBQUU7WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ1o7UUFFRCxLQUFLLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxTQUFTO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsaUJBQWlCO1NBQ3hCO1FBQ0QsVUFBVSxFQUFFO1lBQ1gsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsSUFBSTtTQUNYO0tBQ0Q7SUFLRCxJQUFJLEVBQUUsRUFFTDtJQUtELE9BQU8sRUFBRTtRQUVSLE9BQU87WUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQzVCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxFQUFFLEtBQUs7YUFDWCxDQUFDLENBQUE7UUFDSCxDQUFDO1FBRUQsTUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLEVBQUUsS0FBSzthQUNYLENBQUMsQ0FBQTtRQUNILENBQUM7S0FFRDtDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvbW9kYWwvY2FuY2VsL2NhbmNlbC5qc1xyXG5Db21wb25lbnQoe1xyXG5cdC8qKlxyXG5cdCAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxyXG5cdCAqL1xyXG5cdHByb3BlcnRpZXM6IHtcclxuXHJcblx0XHRzaG93OiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdHZhbHVlOiBmYWxzZVxyXG5cdFx0fSxcclxuXHJcblx0XHR0aXRsZToge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdHZhbHVlOiAn56Gu5a6a6KaB5Y+W5raI55Sz6K+3J1xyXG5cdFx0fSxcclxuXHRcdGNvbnRlbnQ6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHR2YWx1ZTogJ+WPlua2iOWQjuWPr+S7peWcqOeUs+ivt+iusOW9leS4remHjeaWsOeUs+ivtydcclxuXHRcdH0sXHJcblx0XHRzaG93Q2FuY2VsOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdHZhbHVlOiB0cnVlXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcblx0ICovXHJcblx0ZGF0YToge1xyXG5cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDnu4Tku7bnmoTmlrnms5XliJfooahcclxuXHQgKi9cclxuXHRtZXRob2RzOiB7XHJcblxyXG5cdFx0Y29uZmlybSgpe1xyXG5cdFx0XHR0aGlzLnRyaWdnZXJFdmVudCgnY29uZmlybScpXHJcblx0XHRcdHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0c2hvdzogZmFsc2VcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2FuY2VsKCl7XHJcblx0XHRcdHRoaXMudHJpZ2dlckV2ZW50KCdjYW5jZWwnKVxyXG5cdFx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdHNob3c6IGZhbHNlXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdH1cclxufSlcclxuIl19