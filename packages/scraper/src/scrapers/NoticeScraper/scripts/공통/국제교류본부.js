const script = {
  url: "https://cia.chungbuk.ac.kr/board/notice/lists/key/180",
  site_id: 140101,
  site: "국제교류본부",
  category: "공지사항",
  noticeListSelector: ".adm_table tr",
  noticeContentsSelector: ".board_content",
  getNoticeList: function () {
    const list = document.querySelectorAll(this.noticeListSelector);
    return Array.from(list)
      .map((item) => {
        const row = item.querySelectorAll("td");

        if (!row || row.length == 0) return null;

        return {
          site: this.site,
          category: this.category,
          site_id: this.site_id,
          title: row[1].querySelector("a").innerText.trim(),
          url: row[1].querySelector("a").href.trim(),
          date: row[2].innerText.trim(),
        };
      })
      .filter(Boolean);
  },
  getContentsHtml: function () {
    return document.querySelector(this.noticeContentsSelector).outerHTML;
  },
};

module.exports = script;
