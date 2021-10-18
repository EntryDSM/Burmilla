import styled from 'styled-components';
import {color, pxToRem} from "../../styles"

export const StatisticsPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: ${pxToRem(1320)}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color.lightPrimaryColor};
  position: relative;
  padding-top: 60px;
`;

export const StatisticsContainer = styled.div`
  width: 70%;
  height: 150vh;
  padding-top: ${pxToRem(80)}rem;
  padding-bottom: ${pxToRem(80)}rem;
  background: ${color.backgorund};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.16);
`;

export const StatisticsBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;  

export const StatisticsTitle = styled.h1`
  font-size: 52px;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
  color: ${color.primaryTextColor};
`;

export const StatisticsSubTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${color.darkBorderColor};
  letter-spacing: 2px;
`;

export const CompetitionTableTitle = styled.h1`
  width: 58%;
  margin-top: ${pxToRem(104)}rem;
  font-size: 28px;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
  color: ${color.primaryTextColor};
`;

export const CompetitionTableWrapper = styled.div`
  width: 58%;
  height: 45%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-top: 3%;

  > table.common_score-table {
    width: 33%;
    border-spacing: 0;
    border-collapse: collapse;
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif !important;
    font-weight: 500;
    color: ${color.primaryTextColor};
    padding: 0;
    text-align: center;
  }
  > table.meister_score-table {
    width: 45%;
    border-spacing: 0;
    border-collapse: collapse;
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif !important;
    font-weight: 500;
    color: ${color.primaryTextColor};
    padding: 0;
    text-align: center;
  }

  > tr, td {
    border: 0.2px solid #909090;
    height: 22px;
  }

  > tr, td.table-applicant_title {
    font-size: 14px;
    font-weight: bold;
    color: ${color.darkBorderColor};
  }

  > tr, td.table-color_background {
    background-color: ${color.lightPrimaryColor};
  }

  > tr, td.table-border-top {
    border-top: 1.7px solid ${color.primaryTextColor}
  }

  > tr, td.table-border-left {
    border-left: none;
    border-right: none;
  }

  > tr, td.table-border-right {
    border-right: none;
  }

  > tr, td.table-border-bottom {
    border-bottom: 1.7px solid ${color.primaryTextColor}
  }
`;

export const TotalScore = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
`;

export const CompetitionViewWrapper = styled.table`
  width: 30%;
  font-size: 24px;
  margin-top: 40px;
  tr:last-child {
    width: 100%;
  }

  tr {
    display: flex;
    justify-content: space-evenly;
    line-height: 45px;
  }
`;

export const CompetitionViewTH = styled.th`
  width: 65%;
  text-align: left;
  font-weight: bold;
  color: ${color.primaryTextColor};
`;

export const CompetitionViewTD = styled.td`
  width: 35%;
  text-align: right;
  font-weight: bold;
  color: ${color.primaryTextColor};

  > b {
    font-weight: bold;
    font-family: 'Noto Sans KR-Bold', sans-serif !important;
    color: ${color.lightBorderColor};
  }
`;

export const CompetitionTotalGraphWrapper = styled.div`
  width: 68%;
  margin-top: 1%;
  margin-right: 10%;
`;

export const CompetitionFreshmanTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${color.primaryTextColor};
  text-align: right;
  font-weight: bold;

  > span {
    margin-left: 2%;
  }
`;

export const TotalApplicantScore = styled.div`
  color: ${color.primaryTextColor};
  text-align: right;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
  margin-left: 0.6%;
`;

export const TotalCompetitionRate = styled.div`
  color: ${color.primaryTextColor};
  text-align: right;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
  margin-left: 0.6%;
`;

export const CompetitionGraphContainer = styled.div`
  width: 100%;
  margin: 1rem 0 1.7rem;
`;

export const GraphWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${pxToRem(14)}rem;
`;

export const GraphTitle = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.primaryTextColor};
  font-weight: bold;
  font-size: 15px;
`;

export const GraphChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  height: ${pxToRem(42)}rem;
  padding-right: 1rem;
  background-color: ${color.light};
`;

export const CommonGraphBar = styled.div<{isWidthOfCommonGraphBar}>` 
  width: ${({isWidthOfCommonGraphBar}) => (isWidthOfCommonGraphBar ? isWidthOfCommonGraphBar : "0")}%;
  height: 42px;
  background-image: linear-gradient(to bottom,#f57278,#ff897b);
  border-radius: 0 25px 25px 0;
  animation: CommonGraphOpa 1.5s ease-in Alternate;

  @keyframes CommonGraphOpa{
    from { // same 0%
      width: 0%;
    }

    to { // same 100%
      width: ${({isWidthOfCommonGraphBar}) => (isWidthOfCommonGraphBar ? isWidthOfCommonGraphBar : "0")}%;
    }
  }
`;

export const MeisterGraphBar = styled.div<{isWidthOfMeisterGraphBar}>` 
  width: ${({isWidthOfMeisterGraphBar}) => (isWidthOfMeisterGraphBar ? isWidthOfMeisterGraphBar : "0")}%;
  height: 42px;
  background-image: linear-gradient(to bottom,#f57278,#ff897b);
  border-radius: 0 25px 25px 0;
  animation: MeisterGraphOpa 1.5s ease-in Alternate;

  @keyframes MeisterGraphOpa{
    from { // same 0%
      width: 0%;
    }

    to { // same 100%
      width: ${({isWidthOfMeisterGraphBar}) => (isWidthOfMeisterGraphBar ? isWidthOfMeisterGraphBar : "0")}%;
    }
  }
`;

export const SocialGraphBar = styled.div<{isWidthOfSocialGraphBar}>` 
  width: ${({isWidthOfSocialGraphBar}) => (isWidthOfSocialGraphBar ? isWidthOfSocialGraphBar : "0")}%;
  height: 42px;
  background-image: linear-gradient(to bottom,#f57278,#ff897b);
  border-radius: 0 25px 25px 0;
  animation: SocialGraphOpa 1.5s ease-in Alternate;

  @keyframes SocialGraphOpa{
    from { // same 0%
      width: 0%;
    }

    to { // same 100%
      width: ${({isWidthOfSocialGraphBar}) => (isWidthOfSocialGraphBar ? isWidthOfSocialGraphBar : "0")}%;
    }
  }
`;

export const GraphBarContentText = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 96%;
  height: 100%;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
`;

export const GraphCompetitionRate = styled.div`
  color: #5a5a5a;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
  letter-spacing: 0.5px;
`;

export const GraphRateBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 76%;
  padding-left: 14.5%;
`;

export const GraphItemBox = styled.div`
  display: flex;
  color: #5a5a5a;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Noto Sans KR-Bold', sans-serif !important;
`;
