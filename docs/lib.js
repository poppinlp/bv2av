const API =
  'https://1778337455289551.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/bv2av/getBvInfo/';

class RequestError extends Error {
  constructor(code, msg) {
    super(msg);
    this.name = 'RequestError';
    this.errorCode = code;
  }
  toString() {
    return `[${this.errorCode}] Request failed: ${this.message}`;
  }
}

async function getBvInfo(bv) {
  const rsp = await axios.get(API, {
    params: {
      bvid: bv,
    },
    timeout: 2000
  });
  if (rsp.status !== 200) {
    throw new RequestError(rsp.status, rsp.statusText);
  }
  return rsp.data;
}
