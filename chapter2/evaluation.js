var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function fx(iterable) {
    return new FxIterable(iterable);
}
function filter(f, iterable) {
    var _i, iterable_1, a;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, iterable_1 = iterable;
                _a.label = 1;
            case 1:
                if (!(_i < iterable_1.length)) return [3 /*break*/, 4];
                a = iterable_1[_i];
                if (!f(a)) return [3 /*break*/, 3];
                return [4 /*yield*/, a];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
function map(f, iterable) {
    var _i, iterable_2, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, iterable_2 = iterable;
                _a.label = 1;
            case 1:
                if (!(_i < iterable_2.length)) return [3 /*break*/, 4];
                i = iterable_2[_i];
                return [4 /*yield*/, f(i)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
var FxIterable = /** @class */ (function () {
    function FxIterable(iterable) {
        this.iterable = iterable;
    }
    FxIterable.prototype[Symbol.iterator] = function () {
        return this.iterable[Symbol.iterator]();
    };
    FxIterable.prototype.filter = function (fn) {
        return fx(filter(fn, this.iterable));
    };
    FxIterable.prototype.reject = function (fn) {
        return fx(filter(function (a) { return !fn(a); }, this.iterable));
    };
    FxIterable.prototype.map = function (f) {
        return fx(map(f, this.iterable));
    };
    FxIterable.prototype.to = function (converter) {
        return converter(this);
    };
    FxIterable.prototype.chain = function (f) {
        return fx(f(this));
    };
    FxIterable.prototype.toArray = function () {
        return __spreadArray([], this.iterable, true);
    };
    return FxIterable;
}());
var result = fx([1, 2, 3])
    .filter(function (a) { return a % 2 === 0; })
    .to(function (iterable) { return __spreadArray([], iterable, true); });
console.log(result); // [2]
