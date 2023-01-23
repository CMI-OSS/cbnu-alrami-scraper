const { boardTree } = require("../../../../../../shared/src/board-tree/board-tree.generated");
const 국어국문학과 = require("./국어국문학과");

const script = {
  url: "http://humanum.chungbuk.ac.kr/german/selectBbsNttList.do?bbsNo=149&key=506",
  site_id: boardTree.전공.인문대학.독일언어문화학과.공지사항.id,
  site: "독일언어문화학과",
  category: "공지사항",
};

module.exports = { ...국어국문학과, ...script };
