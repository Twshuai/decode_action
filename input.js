const {
    validateCarmeWithType: _0xd12380,
    commonRequest: _0x5da2a0,
    getCookies: _0x14503f,
    getUserInfoWithX: _0x1c9f9d,
    getUserInfo: getUserInfo,
    wait: _0x1e0e6b,
    tryCatchPromise: _0x358f23,
    checkCk: _0x507b71,
    getToken
  } = require("./common.js"),
  md5 = require("md5"),
  _0x34af9d = require("request"),
  _0x1b471c = process.env.ELE_CARME,
  HOST = process.env.HOST || "http://192.168.100.234:3750/script-auth",
  _0x24ea83 = 3,
  _0xa09546 = require("crypto");
async function _0x2ba1e4(_0x87a808) {
  let _0x56f9d2 = {
      missionCollectionId: "894",
      locationInfos: "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
      bizScene: "SSKZ",
      instance: "INNER"
    },
    _0x188fce = "mtop.ele.biz.growth.task.core.querytask";
  try {
    const _0x196558 = await _0x5da2a0(_0x87a808, JSON.stringify(_0x56f9d2), _0x188fce, _0x24ea83, "", process.env.x5sec);
    if (_0x196558.data) {
      return _0x196558.data.mlist;
    }
  } catch (_0x1a7101) {
    return null;
  }
}
async function _0x56dea5(_0x589b7c, _0x10e2ad, _0x4b4d9b, _0x447c6b) {
  const _0xfebe66 = {
    collectionId: _0x4b4d9b,
    missionId: _0x10e2ad,
    actionCode: "PAGEVIEW",
    pageFrom: _0x447c6b,
    viewTime: "15",
    bizScene: "SSKZ",
    accountPlan: "KB_ORCHARD",
    sync: "false"
  };
  return await _0x5da2a0(_0x589b7c, JSON.stringify(_0xfebe66), "mtop.ele.biz.growth.task.event.pageview", _0x24ea83, "", process.env.x5sec);
}
async function _0x435ec7(_0x2c858d, _0x2332d1, _0x4b59f3, _0x5aa3cc) {
  const _0xfd0d4c = {
    missionCollectionId: _0x4b59f3,
    missionId: _0x2332d1,
    bizScene: "SSKZ",
    extInfo: "{\"uid\":\"1899178\"}",
    instance: "INNER",
    instanceId: _0x5aa3cc,
    locationInfos: "[\"{\\\"lng\\\":\\\"120.220926\\\",\\\"lat\\\":\\\"30.178582\\\"}\"]",
    count: "1",
    asac: "169932820075525472118"
  };
  let _0x52d858 = await _0x5da2a0(_0x2c858d, JSON.stringify(_0xfd0d4c), "mtop.ele.biz.growth.task.core.receiveprize", _0x24ea83, "", process.env.x5sec);
  _0x52d858 && _0x52d858.data.rlist && console.log("完成任务");
}
async function _0x5c575e(_0x51b2b, _0x3d9812, _0x5953dd) {
  const _0x51bea2 = {
    missionCollectionId: _0x5953dd,
    missionId: _0x3d9812,
    locationInfos: "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
    bizScene: "duobao_external",
    accountPlan: "HAVANA_COMMON",
    count: "1",
    asac: "2A233157IJYIGQ95WFIIFJ",
    umiToken: "1",
    ua: "1"
  };
  let _0x3eaff1 = await _0x5da2a0(_0x51b2b, JSON.stringify(_0x51bea2), "mtop.ele.biz.growth.task.core.receiveprize", _0x24ea83, "", process.env.x5sec);
  _0x3eaff1 && _0x3eaff1.rlist && console.log("完成任务");
}
async function _0x225d6b(_0x28c9b8, _0xad0080, _0x360139) {
  const _0x34921e = {
    missionCollectionId: _0xad0080,
    missionId: _0x360139,
    bizScene: "SSKZ",
    instance: "INNER"
  };
  let _0x13cd23 = await _0x5da2a0(_0x28c9b8, JSON.stringify(_0x34921e), "mtop.ele.biz.growth.task.core.receivetask", _0x24ea83, "", process.env.x5sec);
  if (_0x13cd23.data) {
    return _0x13cd23.data;
  }
}
async function _0x1c7fe9(_0x36170e, _0x2bc613) {
  const _0x32eb18 = {
    missionCollectionId: _0x2bc613,
    locationInfos: "[\"{\\\"lng\\\":120.21993197500706,\\\"lat\\\":30.178378857672215}\"]",
    bizScene: "SSKZ",
    instance: "INNER"
  };
  let _0x385bea = await _0x5da2a0(_0x36170e, JSON.stringify(_0x32eb18), "mtop.ele.biz.growth.task.core.querytask", _0x24ea83, "", process.env.x5sec);
  if (_0x385bea.data) {
    return _0x385bea.data.mlist;
  }
}
async function _0x137da9(_0x29d5c1, _0x1cac3f, _0xaed74f) {
  const _0x5eecad = {
    missionCollectionId: _0x1cac3f,
    missionId: _0xaed74f,
    bizScene: "SSKZ",
    accountPlan: "KB_ORCHARD",
    locationInfos: "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]"
  };
  let _0x5647f1 = await _0x5da2a0(_0x29d5c1, JSON.stringify(_0x5eecad), "mtop.ele.biz.growth.task.core.querytask", _0x24ea83, "", process.env.x5sec);
  if (_0x5647f1.data) {
    return _0x5647f1.data.mlist[0];
  }
}
async function _0x207944(_0x341584) {
  const _0x599a4d = await _0x2ba1e4(_0x341584);
  for (const _0x336e26 of _0x599a4d) {
    let _0x3fb601 = _0x336e26.missionCollectionId,
      _0x2d4aea = _0x336e26.missionDefId;
    if (_0x336e26.status === "FINISH") {
      await _0x435ec7(_0x341584, _0x2d4aea, _0x3fb601, _0x336e26.id);
    } else {
      if (_0x336e26.actionConfig.actionType === "PAGEVIEW" && _0x336e26.status === "RUNNING") {
        await _0x225d6b(_0x341584, _0x3fb601, _0x2d4aea);
        let _0x57d6ce = await _0x137da9(_0x341584, _0x3fb601, _0x2d4aea);
        if (_0x57d6ce.status === "RUNNING") {
          await _0x56dea5(_0x341584, _0x2d4aea, _0x3fb601, _0x336e26.actionConfig.actionValue.pageSpm);
          await _0x1e0e6b(3);
          let _0x59f885 = await _0x1c7fe9(_0x341584, _0x3fb601);
          for (let _0x1ef57e = 0; _0x1ef57e < _0x59f8
