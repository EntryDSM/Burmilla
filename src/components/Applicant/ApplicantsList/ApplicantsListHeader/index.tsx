import * as React from 'react';

import * as S from '../style';

function ApplicantsList() {
  return (
    <S.ListHeader className="no-select">
      <tr>
        <S.TH>접수번호</S.TH>
        <S.TH>이름</S.TH>
        <S.TH>지역</S.TH>
        <S.TH>전형</S.TH>
        <S.TH>원서 도착 여부</S.TH>
        <S.TH>납부 여부</S.TH>
        <S.TH>최종제출</S.TH>
      </tr>
    </S.ListHeader>
  );
}

export default ApplicantsList;
