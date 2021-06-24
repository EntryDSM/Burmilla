import * as React from "react";

import * as S from "./style";
import { Checkbox } from "../../../Common";
import { useApplicant } from "../../../../hooks/applicant";

function Filter() {
  const {
    applicantStore: { filters },
    setFilter,
  } = useApplicant();

  const checkLists = [
    { content: "대전", value: "is_daejeon" },
    { content: "전국", value: "is_nationwide" },
    { content: "원서 미도착", value: "is_arrived" },
    { content: "미납자", value: "is_paid" },
    { content: "일반 전형", value: "is_common" },
    { content: "마이스터 전형", value: "is_meister" },
    { content: "사회통합 전형", value: "is_social" },
  ];

  const handleChangeFilter = (value: string) => {
    let newFilter = { index: 1 };

    if (value === "is_daejeon" && !filters[value] && filters["is_nationwide"]) {
      newFilter["is_daejeon"] = true;
      newFilter["is_nationwide"] = null;
    } else if (
      value === "is_nationwide" &&
      !filters[value] &&
      filters["is_daejeon"]
    ) {
      newFilter["is_nationwide"] = true;
      newFilter["is_daejeon"] = null;
    } else if (value === "is_paid" || value === "is_arrived") {
      newFilter[value] = filters[value] === false ? null : false;
    } else {
      newFilter[value] = !filters[value] || null;
    }

    setFilter(newFilter);
  };

  const checkIsChecked = React.useCallback(
    (value: string) => {
      if (
        (value === "is_paid" || value === "is_arrived") &&
        filters[value] === false
      ) {
        return true;
      } else {
        return filters[value];
      }
    },
    [filters]
  );

  return (
    <S.FilterWrapper>
      {checkLists.map((item) => (
        <S.FilterItemContainer
          key={item.value}
          onClick={() => handleChangeFilter(item.value)}
        >
          <Checkbox isChecked={checkIsChecked(item.value)} />
          <p>{item.content}</p>
        </S.FilterItemContainer>
      ))}
    </S.FilterWrapper>
  );
}

export default Filter;
