// @ts-nocheck
const fs = require("fs");
const path = require("path");

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */

  myJob: {
    task: ({ strapi }) => {
      //   Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
      // get last year
      let year = new Date().getFullYear() - 1;
      arrangeData(year.toString()).then((data) => {
        // console.log(data);
        const service = strapi.entityService;
        service
          .findMany("api::financial-report.financial-report", {
            filters: {
              year: data.year,
            },
          })
          .then((res) => {
            let serv =
              strapi.services["api::financial-report.financial-report"];
            if (res.length === 0) {
              serv.create({ data });
            } else {
              serv.update(res[0].id, { data });
            }
          });
      });
    },
    options: {
      rule: "0 0 0 * * *", // Every day at 00:00
      tz: "Asia/Tokyo",
      // start 10 seconds from now
      // start: new Date(Date.now() + 10000),
      // end 20 seconds from now
      // end: new Date(Date.now() + 2000),
    },
  },
};

// 공지사항, 보도자료 마이그레이션 전용 함수. 데이터베이스에 데이터를 넣습니다.
// Migrate("api::notice.notice", "notice.json");
// Migrate("api::press.press", "press.json");
async function Migrate(db_name, file_name) {
  const url = path.join(__dirname, "..", "public", "migrate", file_name);
  const json = fs.readFileSync(url, "utf8");
  const datas = JSON.parse(json);
  const service = strapi.entityService;

  if (datas.length) {
    datas.forEach((data) => {
      service
        .findMany(db_name, {
          filters: {
            title: data.title,
          },
        })
        .then((res) => {
          let serv = strapi.services[db_name];
          if (res.length === 0) {
            serv.create({ data });
          } else {
            serv.update(res[0].id, { data });
          }
        });
    });
  }
}

// 제무제표

/*
1분기보고서 : 11013
반기보고서 : 11012
3분기보고서 : 11014
사업보고서 : 11011
*/
async function getData(year) {
  const url = "https://opendart.fss.or.kr/api/fnlttSinglAcntAll.json";
  const param = {
    crtfc_key: "86252bea0cdeb028b25c3b340422cc1b66fe45dc",
    corp_code: "00547510", // toolgen code
    reprt_code: "11011",
    fs_div: "OFS",
    bsns_year: year,
  };
  let parse = `${url}?${Object.entries(param)
    .map((a) => a.join("="))
    .join("&")}`;

  let res;
  try {
    res = await fetch(parse);
  } catch (e) {
    res = await fetch("/dummy/data.json");
  }
  const data = await res.json();
  return data;
}
function extractData(data, accountName) {
  if (!data) return { current: null };
  for (let item of data) {
    if (item.account_nm === accountName) {
      return {
        current: item.thstrm_amount || null,
      };
    }
  }
  return {
    current: null,
  };
}

async function arrangeData(year) {
  const res = await getData(year);
  const data = res.list;
  // 데이터를 추출하는 함수를 정의합니다.

  // 요청한 항목을 추출합니다.
  let totalAssets = extractData(data, "자산총계");
  let totalLiab = extractData(data, "부채총계");
  let totalEquity = extractData(data, "자본총계");
  let totalRevenue = extractData(data, "매출액");
  let operatingIncome = extractData(data, "영업이익(손실)");
  let netIncome = extractData(data, "당기순이익(손실)");

  // 결과를 출력합니다.
  const output = {
    year,
    data: [
      ["자산총계", totalAssets.current],
      ["부채총계", totalLiab.current],
      ["자본총계", totalEquity.current],
      ["매출액", totalRevenue.current],
      ["영업이익(손실)", operatingIncome.current],
      ["당기순이익(손실)", netIncome.current],
    ],
  };
  return output;
}
