var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function my(target, key, descriptor) {
    var oldMethod = descriptor.value;
    descriptor.value = function (arg) {
        var result = oldMethod(arg);
        console.log("method returns ".concat(result));
        return result;
    };
}
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.method = function (num) {
        return num;
    };
    __decorate([
        my
    ], A.prototype, "method", null);
    return A;
}());
new A().method(1);
