import { ScraperType } from "src/store/scraperType";
import { useAppDispatch, useAppSelector } from "src/store";
import { setScraper, view } from "src/store/viewSlice";
import { cx } from "@emotion/css";
import getStyle from "./style";

export default function Natigation() {
  const { scraper } = useAppSelector(view);
  const dispatch = useAppDispatch();

  const style = getStyle();
  const sidebarMenus = [
    ScraperType.Notice,
    ScraperType.StudentRestaurant,
    ScraperType.DomitoryRestaurant,
    ScraperType.CollegeSchedule,
  ];

  return (
    <nav className={style.Navigation}>
      <ul className={style.sideNavUl}>
        <li className={style.logo}>CMI</li>
        {sidebarMenus.map((item) => (
          <li key={item} className={style.sideNavLi}>
            <button
              type="button"
              onClick={() => dispatch(setScraper(item))}
              className={cx(style.insideBtn, {
                [style.activated]: item === scraper,
              })}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
