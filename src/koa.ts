import axios from 'axios';
var colors = require('colors');

export interface Column {
  id: number;
  code: number;
  name: number;
  lcp: number;
  stp: number;
  np: number;
  ta: number;
  tm: number;
  hlp: number;
  pl: number;
  sl: number;
  cat: number;
  cot: number;
  tr: number;
  ape: number;
  min5pl: number;
}

export interface Summary {
  mstat: number;
  pages: number;
  page: number;
  total: number;
  hqtime: string;
}
enum codeType {
  id = 0,
  code = 1,
  name = 2,
  lcp = 3,
  stp = 4,
  np = 5,
  ta = 6,
  tm = 7,
  hlp = 8,
  pl = 9,
  sl = 10,
  cat = 11,
  cot = 12,
  tr = 13,
  ape = 14,
  min5pl = 15,
}

enum codeTypeChinese {
  id = 'id',
  code = 'code',
  name = '名字',
  lcp = '收盘价',
  stp = '价',
  np = '价',
  ta = '总手',
  tm = '金额',
  hlp = '涨跌金额',
  pl = '涨跌百分比',
  sl = '震幅',
  cat = '量比',
  cot = '委比',
  tr = '换手',
  ape = '市盈',
  min5pl = '未知',
}

export interface FiveMini {
  Summary: Summary;
  Column: codeTypeChinese;
  HqData: any[][];
}

const EachConfig = (klist: any[]) => {
  for (let index = 0; index < klist.length; index++) {
    const k = klist[index];
    if (k[8] > 3) {
      console.log(k[8]);
      return false;
    }
  }
  return true;
};

const Start = async () => {
  const timeStamp = new Date().getTime();
  const fiveString = await FiveMinutesHot(timeStamp);
  const hqa: FiveMini = eval(fiveString + '; hqa');

  const targetItem = hqa.HqData.slice(0, 3);

  let stock: Promise<any>[] = [];

  for (let index = 0; index < targetItem.length; index++) {
    const item = targetItem[index];
    if (item[13] < 3 && item[14] < 200) {
      const a: string = item[0];
      const code = a.toUpperCase();
      stock.push(Each(code, timeStamp));
    }
  }
  if (stock.length > 0) {
    const allStock = await Promise.all(stock);

    const result = allStock.map((klist) => [
      EachConfig(klist.item),
      klist.symbol,
    ]);

    result.map(
      (res) => res[0] && console.log('\x1B[36m%s\x1B[0m', '找到了' + res[1])
    );
  }
};

const FiveMinutesHot = (timeStamp: number) => {
  return axios
    .get(
      'http://q.jrjimg.cn/?q=cn%7Cs%7Csa&c=s,ta,tm,sl,cot,cat,ape,min5pl&n=hqa&o=min5pl,d&p=1020&_dc=' +
        timeStamp
    )
    .then((res) => res.data);
};

const Each = (code: string, timeStamp: number) =>
  axios
    .get(
      `https://stock.xueqiu.com/v5/stock/chart/kline.json?symbol=${code}&begin=${timeStamp}&period=day&type=before&count=-1&indicator=kline,pe,pb,ps,pcf`,
      {
        headers: {
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8,zh-TW;q=0.7',
          'cache-control': 'max-age=0',
          'sec-fetch-dest': 'document',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-site': 'none',
          'sec-fetch-user': '?1',
          'upgrade-insecure-requests': '1',
          cookie:
            'xq_a_token=328f8bbf7903261db206d83de7b85c58e4486dda; xqat=328f8bbf7903261db206d83de7b85c58e4486dda; xq_r_token=22ab4927b9acb2a02a4efefe14ccbbc589e007cb; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTU5MTg0Mjc0NiwiY3RtIjoxNTg5ODE3NjY1OTc0LCJjaWQiOiJkOWQwbjRBWnVwIn0.a-1inHegH8Wd2JsA41dleYUDvp9pKAVMyNucsU2n38vcaEkD-VkRZouytc0J8yzkWhoUhF13q1hxEolEsQCHbWvOmp6VreXTOeL8KcGBdM4-sRPDNt5spHEudgeRS9QlFlovzcZclp9LBheeGA97ydXq2s8scQRoWKGzUHIAFHH0IPQxi5MrTvy2SPjesrLakM96ag02rgPfYCkyhXXrXo5DM0JRgvJv39CNqmP9rJi1MnuqWoQiI1A1oyRZod6B0vJxzu9_q7f4UWben0Mm-lRazcJIwtKvwf-7lx4g0sr-heZ0PZcZxfuthNkZOr3LGglsn1Q21A5i9iVOVcDqJQ; u=881589817711687; device_id=24700f9f1986800ab4fcc880530dd0ed; s=ci11j7mx6c; Hm_lvt_1db88642e346389874251b5a1eded6e3=1589817714,1589819613; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1589819613',
        },
        method: 'GET',
      }
    )
    .then((cc) => cc.data.data as any[]);

setInterval(() => Start(), 2000);
