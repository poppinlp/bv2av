"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios_1 = require("axios");
var API = 'https://api.bilibili.com/x/web-interface/view';
var HEADER = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
};
var RequestError = /** @class */ (function (_super) {
    tslib_1.__extends(RequestError, _super);
    function RequestError(code, msg) {
        var _this = _super.call(this, msg) || this;
        _this.name = 'RequestError';
        _this.errorCode = code;
        return _this;
    }
    RequestError.prototype.toString = function () {
        return "[" + this.errorCode + "] Request failed: " + this.message;
    };
    return RequestError;
}(Error));
function getBvInfo(bv) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var rsp, _a, bvid, aid, pic, title, desc;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(API, {
                        params: {
                            bvid: bv,
                        },
                        headers: HEADER,
                    })];
                case 1:
                    rsp = _b.sent();
                    if (rsp.status !== 200) {
                        throw new RequestError(rsp.status, rsp.statusText);
                    }
                    if (rsp.data.code !== 0) {
                        throw new RequestError(rsp.data.code, rsp.data.message);
                    }
                    _a = rsp.data.data, bvid = _a.bvid, aid = _a.aid, pic = _a.pic, title = _a.title, desc = _a.desc;
                    return [2 /*return*/, {
                            title: title,
                            desc: desc,
                            cover: pic,
                            avID: "av" + aid,
                            bvID: bvid,
                            avUrl: "https://www.bilibili.com/video/av" + aid,
                            bvUrl: "https://www.bilibili.com/video/" + bvid,
                        }];
            }
        });
    });
}
exports.getBvInfo = getBvInfo;
function bv2av(bv) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var info;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getBvInfo(bv)];
                case 1:
                    info = _a.sent();
                    return [2 /*return*/, info.avID];
            }
        });
    });
}
exports.bv2av = bv2av;
