import React, { FC } from "react";
import * as S from "./style";
import { GetApplicantsListPayload } from "../../../../data/api/apiTypes";

interface Props {
  searchProgressImg: string;
  searchIcon: string;
  filters: GetApplicantsListPayload;
  setFilter: (payload: GetApplicantsListPayload) => void;
  getApplicantsList: (payload: GetApplicantsListPayload) => void;
}

const SearchBar: FC<Props> = ({
  searchProgressImg,
  searchIcon,
  filters,
  setFilter,
  getApplicantsList,
}) => {
  const categoryList = [
    { content: "전화번호", id: "telephone" },
    { content: "이름", id: "name" },
    { content: "접수번호", id: "receipt_code" },
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
        [selectedCategory.id]: null,
        [category.id]: keyword,
      });
      setSelectedCategory(category);
      console.log(selectedCategory.id);
    },
    [selectedCategory, keyword]
  );

  const handleChangeKeyword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
      setFilter({
        [selectedCategory.id]: e.currentTarget.value || null,
      });
      getApplicantsList(filters);
      console.log(e.target.value);
      console.log("test", filters);
    },
    [keyword]
  );

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
        <img src={searchIcon} alt={"searchIcon"} />
      </S.SearchInputContainer>
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
