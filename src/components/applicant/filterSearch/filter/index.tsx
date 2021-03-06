import React, { FC } from "react";
import * as S from "./style";
import { Button } from "../../../common";
import { Checkbox } from "../../../common";
import { useSchedule } from "src/hooks/schedule";
import { APPLICATION_PERIOD } from "../../../../data/modules/redux/reducer/schedule/scheduleConstance";
import { downloadExcel } from "../../../../utils/download";
import {
  downloadApplicantsListExcel,
  downloadAdmissionExcel,
} from "../../../../data/api/index";
import { GetApplicantsListPayload } from "../../../../data/api/apiTypes";

interface Props {
  filters: GetApplicantsListPayload;
  isDeleteTableModalSwitch: boolean;
  setFilter: (payload: GetApplicantsListPayload) => void;
  getApplicantsList: (payload: GetApplicantsListPayload) => void;
  setIsDeleteTableModalSwitch: (payload: boolean) => void;
}

const Filter: FC<Props> = ({
  filters,
  isDeleteTableModalSwitch,
  setFilter,
  getApplicantsList,
  setIsDeleteTableModalSwitch,
}) => {
  const checkLists = [
    { content: "대전", value: "is_daejeon" },
    { content: "전국", value: "is_nationwide" },
    { content: "원서 미도착", value: "is_printed_arrived" },
    { content: "일반 전형", value: "is_common" },
    { content: "마이스터 전형", value: "is_meister" },
    { content: "사회통합 전형", value: "is_social" },
    { content: "정원 내", value: "is_in" },
    { content: "정원 외", value: "is_out" },
  ];
  const { state } = useSchedule();

  React.useEffect(() => {
    getApplicantsList(filters);
  }, [filters]);

  const handleChangeFilter = async (value: string) => {
    let newFilter = { page: 0 };

    if (value === "is_daejeon" && !filters[value] && filters["is_nationwide"]) {
      newFilter["is_daejeon"] = true;
      newFilter["is_nationwide"] = false;
    } else if (
      value === "is_nationwide" &&
      !filters[value] &&
      filters["is_daejeon"]
    ) {
      newFilter["is_nationwide"] = true;
      newFilter["is_daejeon"] = false;
    } else if (value === "is_printed_arrived") {
      newFilter[value] = filters[value] === false ? null : false;
    } else {
      newFilter[value] = !filters[value] || false;
    }

    await setFilter(newFilter);
    getApplicantsList(filters);
  };

  const checkIsChecked = React.useCallback(
    (value: string) => {
      if (value === "is_printed_arrived" && filters[value] === false) {
        return true;
      } else {
        return filters[value];
      }
    },
    [filters]
  );

  const handleDownloadExcel = React.useCallback(async () => {
    await downloadExcel(downloadApplicantsListExcel, "지원자목록");
  }, []);

  const handleDownloadAdmission = React.useCallback(async () => {
    if (state.status === APPLICATION_PERIOD) {
      alert("원서 접수기간이 끝나지 않았습니다.");
    }
    await downloadExcel(downloadAdmissionExcel, "수험표");
  }, []);

  const handleDeleteApplicants = React.useCallback(() => {
    setIsDeleteTableModalSwitch(!isDeleteTableModalSwitch);
  }, []);

  return (
    <S.FilterWrapper>
      <S.FilterSelectBox>
        {checkLists.map((item) => (
          <S.FilterItemContainer
            key={item.value}
            onClick={() => handleChangeFilter(item.value)}
          >
            <Checkbox isChecked={checkIsChecked(item.value)} />
            <p>{item.content}</p>
          </S.FilterItemContainer>
        ))}
      </S.FilterSelectBox>
      <S.FilterButtonContainer>
        <Button
          className="applicant-list__excel-btn"
          onClick={handleDownloadExcel}
        >
          Excel 출력
        </Button>
        <Button
          className="admission-ticket__download-btn"
          onClick={() => handleDownloadAdmission()}
        >
          수험표 출력
        </Button>
        <Button className="delete-all__btn" onClick={handleDeleteApplicants}>
          전체 삭제
        </Button>
      </S.FilterButtonContainer>
    </S.FilterWrapper>
  );
};

export default Filter;
