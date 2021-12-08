import NoticeCardList from "src/components/Scenario/NoticeCardList";
import { ScraperType } from "src/store/scraperType";
import { ScenarioConfig } from "@shared/types";
import {
  noticeScenariosMockData,
  studentRestaurantScenariosMockData,
  domitoryRestaurantScenariosMockData,
  colleageScheduleMockData,
} from "src/__mockData__";
import { useEffect, useState } from "react";
import { useAppSelector } from "src/store";
import { view } from "src/store/viewSlice";
import CardList from "../CardList";
import getStyle from "./style";

export default function CardListContainer() {
  const [ isNoticeScraper, setIsNoticeScraper ] = useState(false);
  const [ scenario, setScenario ] = useState<ScenarioConfig[]>([]);
  const { scraper, group, status } = useAppSelector(view);

  useEffect(() => {
    if (scraper === ScraperType.Notice) {
      setIsNoticeScraper(true);
      setScenario(noticeScenariosMockData);
      return;
    }
    if (scraper === ScraperType.StudentRestaurant) {
      setIsNoticeScraper(false);
      setScenario(studentRestaurantScenariosMockData);
      return;
    }
    if (scraper === ScraperType.DomitoryRestaurant) {
      setIsNoticeScraper(false);
      setScenario(domitoryRestaurantScenariosMockData);
      return;
    }
    if (scraper === ScraperType.CollegeSchedule) {
      setIsNoticeScraper(false);
      setScenario(colleageScheduleMockData);
    }
  }, [ scenario, isNoticeScraper, scraper ]);

  const style = getStyle();

  if (isNoticeScraper)
    return <NoticeCardList {...{ style, group, scenario, status }} />;
  return <CardList {...{ style, group, scenario, status }} />;
}
