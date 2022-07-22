"use strict";
Component({
    properties: {
        car: {
            type: Object,
            value: {}
        },
        status: {
            type: Number,
            value: 1
        },
        type: {
            type: Number,
            value: 1
        },
        rules: {
            type: Number,
            value: 2
        },
        term: {
            type: Number,
            value: 5
        },
        date: {
            type: String,
            value: '2020-01-01'
        }
    },
    data: {},
    methods: {
        byParkCard: function (e) {
            var id = e.currentTarget.dataset.id;
            wx.navigateTo({
                url: "/pages/users/buyCard/buyCard?id=" + id
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsR0FBRyxFQUFDO1lBQ0YsSUFBSSxFQUFDLE1BQU07WUFDWCxLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsQ0FBQztTQUNUO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsQ0FBQztTQUNUO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsQ0FBQztTQUNUO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsQ0FBQztTQUNUO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsWUFBWTtTQUNwQjtLQUNGO0lBS0QsSUFBSSxFQUFFLEVBRUw7SUFLRCxPQUFPLEVBQUU7UUFDUCxVQUFVLEVBQVYsVUFBVyxDQUE4QztZQUNsRCxJQUFBLEVBQUUsR0FBSSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBM0IsQ0FBMkI7WUFDbEMsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUMscUNBQW1DLEVBQUk7YUFDNUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkNvbXBvbmVudCh7XHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXHJcbiAgICovXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgY2FyOntcclxuICAgICAgdHlwZTpPYmplY3QsXHJcbiAgICAgIHZhbHVlOiB7fVxyXG4gICAgfSxcclxuICAgIHN0YXR1czoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAxXHJcbiAgICB9LFxyXG4gICAgdHlwZToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAxXHJcbiAgICB9LFxyXG4gICAgcnVsZXM6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMlxyXG4gICAgfSxcclxuICAgIHRlcm06IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogNVxyXG4gICAgfSxcclxuICAgIGRhdGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJzIwMjAtMDEtMDEnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcclxuICAgKi9cclxuICBtZXRob2RzOiB7XHJcbiAgICBieVBhcmtDYXJkKGU6IHsgY3VycmVudFRhcmdldDogeyBkYXRhc2V0OiB7IGlkOiBhbnkgfSB9IH0pe1xyXG4gICAgICBsZXQge2lkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDpgL3BhZ2VzL3VzZXJzL2J1eUNhcmQvYnV5Q2FyZD9pZD0ke2lkfWBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdfQ==