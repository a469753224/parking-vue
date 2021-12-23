"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordRul = exports.phoneRul = exports.codeRul = exports.plat = void 0;
var plat = function (n, type) {
    var exp = /''/;
    if (type == 7) {
        exp = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}/;
    }
    if (type == 8) {
        exp = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))/;
    }
    return exp.test(n);
};
exports.plat = plat;
var passwordRul = function (n) {
    var exp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    return exp.test(n);
};
exports.passwordRul = passwordRul;
var codeRul = function (n) {
    var exp = /^\d{6}$/;
    return exp.test(n);
};
exports.codeRul = codeRul;
var phoneRul = function (n) {
    var exp = /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/;
    return exp.test(n);
};
exports.phoneRul = phoneRul;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLElBQU0sSUFBSSxHQUFHLFVBQUMsQ0FBUyxFQUFFLElBQVk7SUFDbkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFBO0lBQ2QsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ2IsR0FBRyxHQUFHLDBGQUEwRixDQUFBO0tBQ2pHO0lBQ0QsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ2IsR0FBRyxHQUFHLGdHQUFnRyxDQUFBO0tBQ3ZHO0lBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3BCLENBQUMsQ0FBQTtBQStCQyxvQkFBSTtBQXpCTixJQUFNLFdBQVcsR0FBRyxVQUFDLENBQVM7SUFDNUIsSUFBSSxHQUFHLEdBQUcsOENBQThDLENBQUE7SUFDeEQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3BCLENBQUMsQ0FBQTtBQXlCQyxrQ0FBVztBQW5CYixJQUFNLE9BQU8sR0FBRyxVQUFDLENBQVM7SUFDeEIsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFBO0lBQ25CLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNwQixDQUFDLENBQUE7QUFjQywwQkFBTztBQVJULElBQU0sUUFBUSxHQUFHLFVBQUMsQ0FBUztJQUN6QixJQUFJLEdBQUcsR0FBRyw2R0FBNkcsQ0FBQTtJQUV2SCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDcEIsQ0FBQyxDQUFBO0FBS0MsNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6L2m54mM6aqM6K+B6KeE5YiZXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuIOmqjOivgeWvueixoVxyXG4gKiBAcGFyYW0ge051bWJlcixTdHJpbmd9IHR5cGUg6aqM6K+B6KeE5YiZ57G75Z6LIDct5pmu6YCa6L2m54mMIDgt5paw6IO95rqQ6L2m54mMXHJcbiAqL1xyXG5jb25zdCBwbGF0ID0gKG46IHN0cmluZywgdHlwZTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XHJcbiAgbGV0IGV4cCA9IC8nJy9cclxuICBpZiAodHlwZSA9PSA3KSB7XHJcbiAgICBleHAgPSAvW+S6rOa0peayqua4neWGgOixq+S6kei+vem7kea5mOealumygeaWsOiLj+a1mei1o+mEguahgueUmOaZi+iSmemZleWQiemXvei0teeypOmdkuiXj+W3neWugeeQvOS9v+mihkEtWl17MX1bQS1aXXsxfVtBLUhKLU5QLVowLTldezR9W0EtSEotTlAtWjAtOeaMguWtpuitpua4r+a+s117MX0vXHJcbiAgfVxyXG4gIGlmICh0eXBlID09IDgpIHtcclxuICAgIGV4cCA9IC9b5Lqs5rSl5rKq5rid5YaA6LGr5LqR6L696buR5rmY55qW6bKB5paw6IuP5rWZ6LWj6YSC5qGC55SY5pmL6JKZ6ZmV5ZCJ6Ze96LS157Kk6Z2S6JeP5bed5a6B55C85L2/6aKGQS1aXXsxfVtBLVpdezF9KChbMC05XXs1fVtERl0pfChbREZdW0EtSEotTlAtWjAtOV1bMC05XXs0fSkpL1xyXG4gIH1cclxuICByZXR1cm4gZXhwLnRlc3QobilcclxufVxyXG5cclxuLyoqXHJcbiog5a+G56CB6aqM6K+B6KeE5YiZXHJcbiogQHBhcmFtIHtTdHJpbmd9IG4g5a+G56CBXHJcbiovXHJcbmNvbnN0IHBhc3N3b3JkUnVsID0gKG46IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCBleHAgPSAvXig/IVswLTldKyQpKD8hW2EtekEtWl0rJClbMC05QS1aYS16XXs2LDE2fSQvXHJcbiAgcmV0dXJuIGV4cC50ZXN0KG4pXHJcbn1cclxuXHJcbi8qKlxyXG4qIOaJi+acuumqjOivgeeggemqjOivgeinhOWImVxyXG4qIEBwYXJhbSB7TnVtYmVyfSBuIOmqjOivgeeggSBcclxuKi9cclxuY29uc3QgY29kZVJ1bCA9IChuOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICBsZXQgZXhwID0gL15cXGR7Nn0kL1xyXG4gIHJldHVybiBleHAudGVzdChuKVxyXG59XHJcblxyXG4vKipcclxuKiDmiYvmnLrlj7fnoIHpqozor4Hop4TliJlcclxuKiBAcGFyYW0ge1N0cmluZ30gbiDmiYvmnLrlj7fnoIEgXHJcbiovXHJcbmNvbnN0IHBob25lUnVsID0gKG46IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCBleHAgPSAvXlsxXSgoWzNdWzAtOV0pfChbNF1bMCwxLDQtOV0pfChbNV1bMC0zLDUtOV0pfChbNl1bMiw1LDYsN10pfChbN11bMC04XSl8KFs4XVswLTldKXwoWzldWzAtMyw1LTldKSlbMC05XXs4fSQvXHJcblxyXG4gIHJldHVybiBleHAudGVzdChuKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHBsYXQsXHJcbiAgY29kZVJ1bCxcclxuICBwaG9uZVJ1bCxcclxuICBwYXNzd29yZFJ1bFxyXG59ICJdfQ==