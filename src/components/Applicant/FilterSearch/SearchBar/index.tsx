import React, { FC } from "react";
import * as S from "./style";
import { Button } from "../../../Common";
import { useApplicant } from "../../../../hooks/applicant";
import { downloadExcel } from "../../../../utils/download";
import { downloadApplicantsListExcel } from "../../../../data/api/index";

interface Props {
  searchProgressImg: string;
}

const SearchBar: FC<Props> = ({ searchProgressImg }) => {
  const { setFilter } = useApplicant();

  const categoryList = [
    { content: "접수번호", id: "receipt_code" },
    { content: "전화번호", id: "applicant_tel" },
    { content: "이메일", id: "email" },
    { content: "이름", id: "name" },
    { content: "학교명", id: "school_name" },
  ];

  const [keyword, setKeyword] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState(
    categoryList[0]
  );
  const [isOpened, setIsOpened] = React.useState(false);

  const handleClickDropdown = React.useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  const handleSelectItem = React.useCallback(
    (category: { content; id }) => {
      setFilter({
        index: 1,
        [selectedCategory.id]: null,
        [category.id]: keyword,
      });
      setSelectedCategory(category);
    },
    [selectedCategory, keyword]
  );

  const handleChangeKeyword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
      setFilter({
        index: 1,
        [selectedCategory.id]: e.currentTarget.value || null,
      });
    },
    [selectedCategory, keyword]
  );
  const handleDownloadExcel = React.useCallback(async () => {
    await downloadExcel(downloadApplicantsListExcel, "지원자목록");
  }, []);

  return (
    <S.SearchBarWrapper>
      {isOpened ? (
        <S.CategoryDropdownOpened onClick={handleClickDropdown}>
          <li>
            {selectedCategory.content}
            <img src={searchProgressImg} alt="details arrow" />
          </li>
          {categoryList.map((content) => (
            <li key={content.id} onClick={() => handleSelectItem(content)}>
              {content.content}
            </li>
          ))}
        </S.CategoryDropdownOpened>
      ) : (
        <S.CategoryDropdownClosed onClick={handleClickDropdown}>
          {selectedCategory.content}
          <img src={searchProgressImg} alt="details arrow" />
        </S.CategoryDropdownClosed>
      )}
      <S.SearchInputContainer>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={keyword}
          onChange={handleChangeKeyword}
        />
      </S.SearchInputContainer>
      <Button
        className="applicant-list__excel-btn"
        onClick={handleDownloadExcel}
      >
        Excel 출력
      </Button>
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
