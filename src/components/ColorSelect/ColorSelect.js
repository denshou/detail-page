import React from "react";
import { styled } from "styled-components";

const ColorSelect = () => {
  return (
    <FormColor>
      <RadioBtn>
        <ColorRadioInput
          className="color-radio-white"
          type="radio"
          name="color"
          value="white"
          id="white"
        />
        <LabelWhite htmlFor="white"></LabelWhite>
      </RadioBtn>
      <RadioBtn>
        <ColorRadioInput
          className="color-radio-gray"
          type="radio"
          name="color"
          value="gray"
          id="gray"
        />
        <LabelGray htmlFor="gray"></LabelGray>
      </RadioBtn>
      <RadioBtn>
        <ColorRadioInput
          className="color-radio-black"
          type="radio"
          name="color"
          value="black"
          id="black"
        />
        <LabelBlack htmlFor="black"></LabelBlack>
      </RadioBtn>
    </FormColor>
  );
};

export default ColorSelect;

const FormColor = styled.div`
  display: flex;
`;
const RadioBtn = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 1rem;
`;
const ColorRadioInput = styled.input`
  display: none;

  &:checked + label {
    border: 2px solid rgb(61, 61, 61);
  }
`;
const LabelWhite = styled.label`
  background-color: white;
  border: 1px solid gray;
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
const LabelGray = styled.label`
  background-color: gray;
  border: 1px solid gray;
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
const LabelBlack = styled.label`
  background-color: black;
  border: 1px solid gray;
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
