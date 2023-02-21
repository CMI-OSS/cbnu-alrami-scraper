import { Link } from "react-router-dom";

import { Plus } from "@components/atoms/icon";
import SubscriptionNoticeGroup from "@components/shared/SubscriptionNoticeGroup";
import { useSubscribeBoardsQuery } from "@hooks/api/board";
import { useSetRecoilState } from "recoil";
import guideEmptySubscriptionSetting from "src/assets/guide_empty_subscription_setting.png";
import SettingTemplate from "src/page/Setting/SettingTemplate";
import { boardOriginStatus } from "src/states";

import $ from "./style.module.scss";

function Board() {
  const { data: subscribeBoardsData } = useSubscribeBoardsQuery();
  const setBoardOrigin = useSetRecoilState(boardOriginStatus);

  const handlePlusClick = () => {
    setBoardOrigin("setting");
  };

  if (!subscribeBoardsData?.length) {
    return (
      <SettingTemplate
        title="구독/알림"
        right={
          <Link to="/board" onClick={handlePlusClick}>
            <Plus size={16} stroke="#AAAAAA" />
          </Link>
        }
      >
        <div className={$["empty-subscription"]}>
          <img
            src={guideEmptySubscriptionSetting}
            width={283}
            alt="구독중인 공지사항 없음"
          />
        </div>
      </SettingTemplate>
    );
  }

  return (
    <SettingTemplate
      title="구독/알림"
      right={
        <Link to="/board" onClick={handlePlusClick}>
          <Plus size={16} stroke="#AAAAAA" />
        </Link>
      }
    >
      <div className={$.subscription}>
        {subscribeBoardsData?.map((subscribeBoardData) => {
          const { id, combinedName, isNotice, isSubscribe } =
            subscribeBoardData;
          return (
            <div className={$.item}>
              <span>{combinedName}</span>
              <SubscriptionNoticeGroup
                className={$.buttons}
                id={id}
                isNotice={isNotice ?? false}
                isSubscribe={isSubscribe ?? false}
              />
            </div>
          );
        })}
      </div>
    </SettingTemplate>
  );
}

export default Board;