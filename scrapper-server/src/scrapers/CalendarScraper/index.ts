import Scraper from "@src/scrapers/Scraper";
import { CalendarScript } from "@src/interfaces";
import { Scenario } from "../Scenario";
import ArrayToDate from "./ArrayToDate";

class CalendarScraper extends Scraper<CalendarScript> {
  constructor() {
    super(__dirname + "/scripts");
  }

  async scrapping(scenario: Scenario<CalendarScript>) {
    if (this.scraper === null) {
      throw Error("크롤러 없음");
    }

    const { jsScript: calendarScript } = scenario;

    if (calendarScript === undefined) {
      throw Error("스크립트 없음");
    }

    const refinedData = [];

    for (let i = 0; i < calendarScript.scripts.length; i++) {
      await this.scraper.goto(
        calendarScript.url + calendarScript.scripts[i].key,
      );
      await this.scraper.waitForSelector(calendarScript.waitCalendarSelector);
      await this.evaluateScript(calendarScript);
      const mockData = await this.scraper.evaluate("script.getSchedules()");
      for (let j = 0; j < mockData.length; j++) {
        refinedData.push({
          ...ArrayToDate(calendarScript.scripts[i].year, mockData[j][0]),
          content: mockData[j][1],
        });
      }
    }
    console.log(refinedData);
  }
}

export default new CalendarScraper();
