import React from "react";
import styled from "styled-components";

export default function RecommendItem({
  sickNm,
  userKeyword
}: {
  sickNm: string;
  userKeyword: string;
}) {
  const restTextArr = sickNm.split(new RegExp(`${userKeyword}`, "gi"));

  return (
    <RecommendItemContainer>
      {restTextArr.map((it, idx) => {
        if (it.length > 0) {
          return <span key={idx}>{it}</span>;
        } else {
          return <HighLightSpan key={idx}>{userKeyword}</HighLightSpan>;
        }
      })}
    </RecommendItemContainer>
  );
}

const RecommendItemContainer = styled.li`
  width: 100%;
  border: 0;
  border-radius: 3rem;
  text-align: center;
  font-size: 1.8rem;
  background-color: #fff;
`;

const HighLightSpan = styled.span`
  font-weight: 700;
`;
