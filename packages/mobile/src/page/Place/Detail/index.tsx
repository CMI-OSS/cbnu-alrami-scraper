import { NavLink } from "react-router-dom";

import { LeftArrow } from "@components/atoms/icon";
import ChipGroup from "@components/molecules/ChipGroup";
import BorderBox from "src/components/atoms/BorderBox";
import useSearch from "src/hooks/useSearch";
import { useAppDispatch } from "src/store";
import { setHashMenu } from "src/store/placeSlice";

import { imageList, menuList } from "../../../__mocks__/index";
import $ from "./style.module.scss";

function PlaceDetail() {
  const dispatch = useAppDispatch();
  const position = useSearch({ target: "position" })!;

  const handleMenu = () => {
    dispatch(setHashMenu({ hashString: position }));
  };

  const checkMenu = (position: string) => {
    switch (position) {
      case "all":
        return 0;
      case "north":
        return 1;
      case "east":
        return 2;
      case "south":
        return 3;
      default:
        return 0;
    }
  };

  return (
    <>
      <div className={$.header}>
        <NavLink to="/map" className={$.link}>
          <LeftArrow stroke="#aaa" size={16} />
          <span className="blind">뒤로가기</span>
        </NavLink>
        <h1 className={$.title}>캠퍼스맵</h1>
        <NavLink to="/call" className={$.place_link}>
          제보하기
        </NavLink>
      </div>
      <ChipGroup
        list={menuList}
        handleSelectMenu={handleMenu}
        selectedMenu={checkMenu(position)}
      />
      <BorderBox className={$.tooltip} style={{ width: "auto" }}>
        <span className={$.tooltip_title}>
          식사는 현재 베타버전으로, 다양한 맛집이 더 추가될 예정입니다.
        </span>
      </BorderBox>
      <div className={$.content}>
        <div className={$.image_list}>
          {imageList.map((item, idx) => {
            return (
              <NavLink
                to={`/place/school/detail/${idx + 1}`}
                className={$.item}
                key={item.id}
              >
                <img
                  className={$.school_image}
                  src={item.src}
                  alt={item.name}
                />
                <div className={$.summary}>
                  <strong className={$.summary_title}>{item.name}</strong>
                  <span className={$.summary_description}>
                    {item.description}
                  </span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PlaceDetail;