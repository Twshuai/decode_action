const $ = new Env('饿了么食神客栈');
const {
        validateCarmeWithType: validateCarmeWithType,
        getCookies: getCookies,
        getUserInfoWithX: getUserInfoWithX,
        wait: wait,
        tryCatchPromise: tryCatchPromise,
        checkCk: checkCk
    } = require("./common.js"),
    _0x286a61 = require("request"),
    _0x127a18 = process.env.ELE_CARME,
    _0x5210b0 = 23,
    _0x3d6440 = require("md5");

function _0x1a523b (_0x10b6c8) {
    if (!_0x10b6c8) {
        return "-1";
    }

    for (var _0x12eabb = _0x10b6c8.split(";"), _0x406903 = 0; _0x406903 < _0x12eabb.length; _0x406903++) {
        var _0x450595 = _0x12eabb[_0x406903].split("=");

        if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x450595[0])) {
            return _0x450595[1];
        }
    }

    return "-1";
}

const _0x5cf4f4 = async (_0x2bc6f9, _0x1c444f, _0x42b574 = 5) => {
    const _0x255e82 = _0x1a523b(_0x2bc6f9),
        _0x192a0b = _0x255e82.split("_")[0];

    return _0x3d6440(_0x192a0b + _0x1c444f);
};

async function _0x389e0e (_0x46c612, _0x150ab1) {
    const _0x4dfa75 = {
            "authority": "shopping.ele.me",
            "accept": "application/json",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            "cookie": _0x46c612,
            "x-miniapp-id-taobao": "3000000091262411",
            "x-miniapp-version": "0.0.116",
            "x-mini-appkey": "34416858",
            "x-req-appkey": "34416858",
            "appid": "3000000091262411"
        },
        _0x303357 = new Date().getTime(),
        _0x46d5fd = 34190632,
        _0xb1a4b3 = "data=" + encodeURIComponent(JSON.stringify(_0x150ab1)),
        _0x529b7d = await _0x5cf4f4(_0x46c612, "&" + _0x303357 + "&" + _0x46d5fd + "&" + JSON.stringify(_0x150ab1), _0x127a18),
        _0x2737f2 = {
            "url": "https://shopping.ele.me/h5/mtop.miniapp.cloud.application.request/1.0/?jsv=2.6.1&appKey=34190632&t=" + _0x303357 + "&sign=" + _0x529b7d + "&api=mtop.miniapp.cloud.application.request&v=1.0&type=originaljson&ttid=1608030065155%40eleme_android_11.0.38",
            "method": "POST",
            "headers": _0x4dfa75,
            "body": _0xb1a4b3
        };

    return tryCatchPromise(_0x712b47 => {
        _0x286a61(_0x2737f2, async (_0x2ad7cf, _0x12230a, _0x4bc800) => {
            if (!_0x2ad7cf && _0x12230a.statusCode === 200) {
                try {
                    const _0x18c432 = JSON.parse(_0x4bc800);

                    _0x712b47(_0x18c432.data.data);
                } catch (_0x24a035) {
                    console.log(_0x4bc800);

                    _0x712b47(null);
                }
            } else {
                _0x712b47(null);
            }
        });
    });
}

async function _0x457235 (_0x3e73c2, _0x41297f, _0x18d496) {
    const _0x2f8479 = {
            "accept": "application/json",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "cookie": _0x3e73c2,
            "User-Agent": "okhttp/3.14.9",
            "Host": "sskz.gzppxia.com",
            "startToken": "150483272097295"
        },
        _0x3d6fd6 = {
            "url": "https://sskz.gzppxia.com/" + _0x18d496,
            "method": "POST",
            "headers": _0x2f8479,
            "body": JSON.stringify(_0x41297f)
        };
    return tryCatchPromise(_0x3a77cc => {
        _0x286a61(_0x3d6fd6, async (_0x10940a, _0x2890da, _0x5f1995) => {
            if (!_0x10940a && _0x2890da.statusCode === 200) {
                try {
                    const _0x4f973a = JSON.parse(_0x5f1995);

                    _0x3a77cc(_0x4f973a);
                } catch (_0x27a6e2) {
                    console.log(_0x5f1995);

                    _0x3a77cc(null);
                }
            } else {
                _0x3a77cc(null);
            }
        });
    });
}

async function _0x566cc1 (_0x184c2c) {
    const _0x2809bb = new Date().getTime(),
        _0x26b748 = {
            "body": "{}",
            "headers": "{}",
            "instance": "INNER",
            "method": "GET",
            "options": "{\"cloudAppId\":\"47729\",\"domain\":\"https://sskz.gzppxia.com/tt_action/\",\"timeout\":3000,\"env\":\"online\",\"options\":{\"path\":\"pages/index/index\"}}",
            "path": "elmeisv.php?method=getOpenid",
            "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x2809bb + "\",\"mc-env\":\"online\"}",
            "queryString": "{}",
            "sdkVersion": "1.5.5"
        },
        _0x2c0650 = await _0x389e0e(_0x184c2c, _0x26b748);

    if (_0x2c0650) {
        return JSON.parse(_0x2c0650).openid;
    }
}

async function _0x4e7ec3 (_0x5ebbac, _0xee6b04) {
    const _0x342272 = new Date().getTime(),
        _0xb98c1c = {
            "handler": "login",
            "auth_code": _0xee6b04,
            "attach": null,
            "platform_id": "taoteGame2",
            "channel_id": 1002,
            "cver": "1.0.1",
         
