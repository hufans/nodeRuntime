import * as Koa from 'koa';
import axios from 'axios';

axios
  .get(
    'http://q.jrjimg.cn/?q=cn%7Cs%7Csa&c=s,ta,tm,sl,cot,cat,ape,min5pl&n=hqa&o=min5pl,d&p=1020&_dc=1589813822047'
  )
  .then((res) => console.log(res.data));

axios
  .get(
    'https://stock.xueqiu.com/v5/stock/chart/kline.json?symbol=SZ000651&begin=1589904255563&period=day&type=before&count=-3&indicator=kline,pe,pb,ps,pcf',
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
  .then((cc) => console.log(cc.data.data.item[0], '00000'))
  .catch((e) => console.log(e));
