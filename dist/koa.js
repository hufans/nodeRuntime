"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var colors = require('colors');
var codeType;
(function (codeType) {
    codeType[codeType["id"] = 0] = "id";
    codeType[codeType["code"] = 1] = "code";
    codeType[codeType["name"] = 2] = "name";
    codeType[codeType["lcp"] = 3] = "lcp";
    codeType[codeType["stp"] = 4] = "stp";
    codeType[codeType["np"] = 5] = "np";
    codeType[codeType["ta"] = 6] = "ta";
    codeType[codeType["tm"] = 7] = "tm";
    codeType[codeType["hlp"] = 8] = "hlp";
    codeType[codeType["pl"] = 9] = "pl";
    codeType[codeType["sl"] = 10] = "sl";
    codeType[codeType["cat"] = 11] = "cat";
    codeType[codeType["cot"] = 12] = "cot";
    codeType[codeType["tr"] = 13] = "tr";
    codeType[codeType["ape"] = 14] = "ape";
    codeType[codeType["min5pl"] = 15] = "min5pl";
})(codeType || (codeType = {}));
var codeTypeChinese;
(function (codeTypeChinese) {
    codeTypeChinese["id"] = "id";
    codeTypeChinese["code"] = "code";
    codeTypeChinese["name"] = "\u540D\u5B57";
    codeTypeChinese["lcp"] = "\u6536\u76D8\u4EF7";
    codeTypeChinese["stp"] = "\u4EF7";
    codeTypeChinese["np"] = "\u4EF7";
    codeTypeChinese["ta"] = "\u603B\u624B";
    codeTypeChinese["tm"] = "\u91D1\u989D";
    codeTypeChinese["hlp"] = "\u6DA8\u8DCC\u91D1\u989D";
    codeTypeChinese["pl"] = "\u6DA8\u8DCC\u767E\u5206\u6BD4";
    codeTypeChinese["sl"] = "\u9707\u5E45";
    codeTypeChinese["cat"] = "\u91CF\u6BD4";
    codeTypeChinese["cot"] = "\u59D4\u6BD4";
    codeTypeChinese["tr"] = "\u6362\u624B";
    codeTypeChinese["ape"] = "\u5E02\u76C8";
    codeTypeChinese["min5pl"] = "\u672A\u77E5";
})(codeTypeChinese || (codeTypeChinese = {}));
var EachConfig = function (klist) {
    for (var index = 0; index < klist.length; index++) {
        var k = klist[index];
        if (k[8] > 3) {
            console.log(k[8]);
            return false;
        }
    }
    return true;
};
var Start = function () { return __awaiter(void 0, void 0, void 0, function () {
    var timeStamp, fiveString, hqa, targetItem, stock, index, item, a, code, allStock, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                timeStamp = new Date().getTime();
                return [4 /*yield*/, FiveMinutesHot(timeStamp)];
            case 1:
                fiveString = _a.sent();
                hqa = eval(fiveString + '; hqa');
                targetItem = hqa.HqData.slice(0, 3);
                stock = [];
                for (index = 0; index < targetItem.length; index++) {
                    item = targetItem[index];
                    if (item[13] < 3 && item[14] < 200) {
                        a = item[0];
                        code = a.toUpperCase();
                        stock.push(Each(code, timeStamp));
                    }
                }
                if (!(stock.length > 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, Promise.all(stock)];
            case 2:
                allStock = _a.sent();
                result = allStock.map(function (klist) { return [
                    EachConfig(klist.item),
                    klist.symbol,
                ]; });
                result.map(function (res) { return res[0] && console.log('\x1B[36m%s\x1B[0m', '找到了' + res[1]); });
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
var FiveMinutesHot = function (timeStamp) {
    return axios_1.default
        .get('http://q.jrjimg.cn/?q=cn%7Cs%7Csa&c=s,ta,tm,sl,cot,cat,ape,min5pl&n=hqa&o=min5pl,d&p=1020&_dc=' +
        timeStamp)
        .then(function (res) { return res.data; });
};
var Each = function (code, timeStamp) {
    return axios_1.default
        .get("https://stock.xueqiu.com/v5/stock/chart/kline.json?symbol=" + code + "&begin=" + timeStamp + "&period=day&type=before&count=-1&indicator=kline,pe,pb,ps,pcf", {
        headers: {
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8,zh-TW;q=0.7',
            'cache-control': 'max-age=0',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            cookie: 'xq_a_token=328f8bbf7903261db206d83de7b85c58e4486dda; xqat=328f8bbf7903261db206d83de7b85c58e4486dda; xq_r_token=22ab4927b9acb2a02a4efefe14ccbbc589e007cb; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTU5MTg0Mjc0NiwiY3RtIjoxNTg5ODE3NjY1OTc0LCJjaWQiOiJkOWQwbjRBWnVwIn0.a-1inHegH8Wd2JsA41dleYUDvp9pKAVMyNucsU2n38vcaEkD-VkRZouytc0J8yzkWhoUhF13q1hxEolEsQCHbWvOmp6VreXTOeL8KcGBdM4-sRPDNt5spHEudgeRS9QlFlovzcZclp9LBheeGA97ydXq2s8scQRoWKGzUHIAFHH0IPQxi5MrTvy2SPjesrLakM96ag02rgPfYCkyhXXrXo5DM0JRgvJv39CNqmP9rJi1MnuqWoQiI1A1oyRZod6B0vJxzu9_q7f4UWben0Mm-lRazcJIwtKvwf-7lx4g0sr-heZ0PZcZxfuthNkZOr3LGglsn1Q21A5i9iVOVcDqJQ; u=881589817711687; device_id=24700f9f1986800ab4fcc880530dd0ed; s=ci11j7mx6c; Hm_lvt_1db88642e346389874251b5a1eded6e3=1589817714,1589819613; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1589819613',
        },
        method: 'GET',
    })
        .then(function (cc) { return cc.data.data; });
};
setInterval(function () { return Start(); }, 2000);
//# sourceMappingURL=koa.js.map