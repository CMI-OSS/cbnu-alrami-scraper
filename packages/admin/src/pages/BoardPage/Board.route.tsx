import { Route, Routes } from "react-router-dom";

import PageLayout from "src/components/Layout/Page/Page.view";

import Article from "./Article/Article";
import ArticleList from "./ArticleList/ArticleList";
import ArticleWrite from "./ArticleWrite/ArticleWrite";

// `/board/*`
export default function BoardRoute() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/list" element={<ArticleList />} />
        <Route path="/write" element={<ArticleWrite />} />
        <Route path="/edit/articles/:articleId" element={<ArticleWrite />} />
        <Route path="/articles/:articleId" element={<Article />} />
      </Routes>
    </PageLayout>
  );
}