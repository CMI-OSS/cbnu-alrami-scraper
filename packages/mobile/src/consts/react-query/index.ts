import { CafeteriaMenu } from "@shared/swagger-api/generated";

export const queryKey = {
  article: (articleId: req.Article["articleId"]) => {
    return [ "article", articleId ];
  },
  boardArticles: (boardId: req.Article["boardId"]) => {
    return [ "boardArticles", boardId ];
  },
  bookmarkArticles: [ "bookmarkArticles" ],
  newArticles: [ "newArticles" ],
  popularArticles: [ "popularArticles" ],
  boardTrees: [ "boardTrees" ],
  boardTree: (boardId: req.BoardTree["boardId"]) => {
    return [ "boardTree", boardId ];
  },
  bookmarkSchedules: [ "bookmarkSchedules" ],
  subscribeBoards: [ "subscribeBoards" ],
  weathers: [ "weathers" ],
  schedules: [ "schedules" ],
  cafeteria: (name: CafeteriaMenu["name"], date: CafeteriaMenu["date"]) => {
    return [ "cafeteria", name, date ];
  },
  schools: [ "schools" ],
  school: (placeId: req.School["placeId"]) => {
    return [ "school", placeId ];
  },
};
