// Dependencies
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1920px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 22px 32px;
  width: 360px;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #aaa;
  padding: 6px;
  width: 100%;
`;

export const Input = styled.input`
  font-size: 16px;
  background-color: transparent;
  width: 100%;
`;

export const ErrorMessageWrapper = styled.div`
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 6px;
  padding: 6px;
`;

export const ErrorMessage = styled.p`
  color: #721c24;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  background-color: #1a8918;
  color: #fff;
  border-radius: 8px;
  padding: 6px 10px;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: #0f730c;
  }
`;
