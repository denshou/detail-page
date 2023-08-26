import React from 'react';
import { styled } from 'styled-components';

const Description = () => {
    return (
        <Details>
          <h1>Basic Tee 6-Pack</h1>
          <p>
            촘촘하게 짜여진 면 100% 코마사 16수 싱글 저지 원단을 사용해 편안한
            착용감을 제공한다. 적당한 폭과 깊이의 네크라인은 텐션과 복원력을
            갖춘 스판 립 원단을 바디 원단과 밸런스를 맞춰 사용했다. 적당히
            드롭된 어깨선과 여유 있는 릴렉스 핏으로 트렌디한 실루엣을 연출하며
            여섯 장을 하나에 구성해 활용도가 높은 제품이다.
          </p>
          <h2>상세 설명</h2>
          <p>-1 </p>
          <p>-2 </p>
          <p>-3 </p>
          <p>-4</p>
        </Details>
    );
};

export default Description;

const Details = styled.div`
  text-align: left;
  margin-left: 3rem;

  height: 33rem;
`;