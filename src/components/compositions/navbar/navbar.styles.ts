// Dependencies
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
  background-color: #fff;
  width: 100%;
  padding: 8px 32px;
  top: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1366px;
`;

export const Logo = styled.img``;

export const LinksCompositionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
