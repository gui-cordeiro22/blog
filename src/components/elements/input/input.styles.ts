// Dependencies
import styled from "styled-components";

export const InputField = styled.input`
  font-size: 16px;
  width: 100%;
  background-color: transparent;
  color: #000;

  &::placeholder {
    color: #ddd6cd;
  }
`;

export const InputWrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #aaa;
  padding: 6px;
  width: 100%;
`;

export const ErrorMessageWrapper = styled.div`
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 6px;
  padding: 6px;
`;

export const ErrorMessage = styled.small`
  color: #721c24;
`;
