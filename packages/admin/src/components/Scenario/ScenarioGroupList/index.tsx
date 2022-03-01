import { ScenarioType } from "@shared/types";
import { useQuery } from "src/hooks";
import { getScenarioGroups } from "src/lib/scenario";
import getStyle from "./style";
import ScenarioList from "../ScenarioList";

interface Props {
  scenarios: ScenarioType[];
}

function ScenarioGroupList({ scenarios }: Props) {
  const query = useQuery();
  const style = getStyle();
  const stateQuery = query.get("state") || "all";
  const groupQuery = query.get("group") || "all";

  const getFilteredScenarios = (group?: string) => {
    return scenarios
      .filter((scenario) => {
        if (stateQuery === "all") return true;
        return scenario.state === stateQuery;
      })
      .filter((scenario) => {
        if (!group) return true;
        return scenario.group === group;
      });
  };

  if (getScenarioGroups(scenarios).length === 0)
    return <ScenarioList scenarios={getFilteredScenarios()} />;

  return (
    <>
      {getScenarioGroups(scenarios)
        .filter((group) => groupQuery === "all" || groupQuery === group)
        .map((group) => {
          const scenarios = getFilteredScenarios(group);
          if (scenarios.length === 0) return <></>;
          return (
            <div className={style.groupContainer} key={group}>
              <h2 className={style.groupTitle}>{group}</h2>
              <ScenarioList scenarios={scenarios} />
            </div>
          );
        })}
    </>
  );
}

export default ScenarioGroupList;
