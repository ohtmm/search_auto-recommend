import React from "react";
import { useState } from "react";
import styled from "styled-components";
import RecommendList from "./RecommendList";

export default function Search(): React.ReactElement {
  const [userKeyword, setUserKeyword] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserKeyword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 데이터 배열 중 sickNm에서 keyword가 있는 데이터만 노출
  };

  return (
    <SearchWrapper>
      <Title>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </Title>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBar
          type="text"
          placeholder="질환명을 입력해주세요"
          onChange={handleChange}
        />
        <SearchButton>찾기</SearchButton>
      </SearchForm>
      <RecommendList userKeyword={userKeyword} />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 5rem;
  background-color: ${(props) => props.theme.color.primary};
`;

const Title = styled.h1`
  line-height: 5rem;
  padding: 2rem 0;
  font-size: 3.5rem;
  text-align: center;
  font-weight: 900;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const SearchBar = styled.input`
  width: 30rem;
  border: 0;
  border-radius: 3rem 0 0 3rem;
  font-size: 1.7rem;
  padding: 1.7rem 1rem 1.7rem 5rem;
`;

const SearchButton = styled.button`
  border: 0;
  font-size: 1.7rem;
  font-weight: 700;
  background-color: ${(props) => props.theme.color.second};
  color: ${(props) => props.theme.color.white};
  border-radius: 0 3rem 3rem 0;
`;
