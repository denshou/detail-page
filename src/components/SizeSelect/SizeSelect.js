import React from "react";
import { styled } from "styled-components";

const SizeSelect = () => {
  return (
    <SizeForm>
      <Row>
        <SizeBtn>
          <SizeInput type="radio" name="size" value="ssm" id="ssm" />
          <SizeLabel htmlFor="ssm">SSM</SizeLabel>
        </SizeBtn>
        <SizeBtn>
          <SizeInput type="radio" name="size" value="sm" id="sm" />
          <SizeLabel htmlFor="sm">SM</SizeLabel>
        </SizeBtn>
        <SizeBtn>
          <SizeInput type="radio" name="size" value="s" id="s" />
          <SizeLabel htmlFor="s">S</SizeLabel>
        </SizeBtn>
        <SizeBtn>
          <SizeInput type="radio" name="size" value="m" id="m" />
          <SizeLabel htmlFor="m">M</SizeLabel>
        </SizeBtn>
      </Row>

      <Row>
        <SizeBtn>
          <SizeInput type="radio" name="size" value="l" id="l" />
          <SizeLabel htmlFor="l">L</SizeLabel>
        </SizeBtn>

        <SizeBtn>
          <SizeInput type="radio" name="size" value="xl" id="xl" />
          <SizeLabel htmlFor="xl">XL</SizeLabel>
        </SizeBtn>
        <SizeBtn>
          <SizeInput type="radio" name="size" value="xxl" id="xxl" />
          <SizeLabel htmlFor="xxl">XXL</SizeLabel>
        </SizeBtn>
        <SizeBtn>
          <SizeInput type="radio" name="size" value="xxxl" id="xxxl" />
          <SizeLabel htmlFor="xxxl">XXXL</SizeLabel>
        </SizeBtn>
      </Row>
    </SizeForm>
  );
};

export default SizeSelect;

const SizeForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.3rem;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 26rem;
  justify-content: space-between;
`;
const SizeBtn = styled.div`
  width: 5.5rem;
  height: 4.5rem;
  border: 1px solid #eae7e7;
  border-radius: 10px;
`;
const SizeInput = styled.input`
  display: none;

  &:checked + label {
    border: 1px solid #184da0;
  }
`;
const SizeLabel = styled.label`
  display: block;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  height: 4.5rem;
  line-height: 4.5rem;

  &:hover {
    color: #666;
  }
`;
