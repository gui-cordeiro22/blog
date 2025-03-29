// Dependencies
import styled, { css } from "styled-components";

type LinkElementStyleProps = {
  isActive: boolean;
};

export const LinkElement = styled.a<LinkElementStyleProps>`
  padding: 6px 10px;
  background-color: transparent;
  border-radius: 8px;
  color: #000;

  ${({ isActive }) =>
    !!isActive &&
    css`
      background-color: #000;
      color: #fff;
    `}
`;
