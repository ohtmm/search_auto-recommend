import React from "react";
import styled from "styled-components";
import useGetData from "./../../lib/hooks/useGetData";
import RecommendItem from "./RecommendItem";

interface ISickDate {
  sickCd: string;
  sickNm: string;
}

export default function RecommendList({
  userKeyword
}: {
  userKeyword: string;
}) {
  const { data } = useGetData<ISickDate[]>();
  return (
    <RecommendContainer>
      {data?.map((date, index) => {
        if (date.sickNm.includes(userKeyword)) {
          return (
            <RecommendItem
              key={index}
              userKeyword={userKeyword}
              sickNm={date.sickNm}
            />
          );
        } else return null;
      })}
    </RecommendContainer>
  );
}

const RecommendContainer = styled.ul`
  width: 40rem;
  height: 40rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: hidden;
`;
