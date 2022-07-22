"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var icon_1 = require("../../../assets/base64/icon");
Component({
    properties: {
        show: {
            type: Boolean,
            value: false
        }
    },
    data: {
        clock: icon_1.countdown
    },
    methods: {
        cancel: function () {
            this.setData({
                show: false
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWVvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxvREFBcUQ7QUFFckQsU0FBUyxDQUFDO0lBSU4sVUFBVSxFQUFFO1FBQ1IsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFLRCxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsZ0JBQVM7S0FDbkI7SUFLRCxPQUFPLEVBQUU7UUFDTCxNQUFNO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxJQUFJLEVBQUUsS0FBSzthQUNkLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvbW9kYWwvdGltZW91dC90aW1lb3V0LmpzXHJcblxyXG5pbXBvcnQge2NvdW50ZG93bn0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Jhc2U2NC9pY29uJ1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIC8qKlxyXG4gICAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzaG93OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cclxuICAgICAqL1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGNsb2NrOiBjb3VudGRvd25cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcclxuICAgICAqL1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNhbmNlbCgpe1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcbiJdfQ==