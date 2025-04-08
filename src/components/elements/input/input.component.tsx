// Dependencies
import React, { Fragment, FunctionComponent } from "react";

// Styles
import {
  ErrorMessage,
  ErrorMessageWrapper,
  InputField,
  InputWrapper,
} from "./input.styles";

// Types
import { InputFieldProps } from "./input.types";
import { ConditionallyRender } from "../../utilities/conditionally-render";

export const Input: FunctionComponent<InputFieldProps> = ({
  errorMessage,
  ...defaultProps
}) => {
  return (
    <Fragment>
      <InputWrapper>
        <InputField {...defaultProps} />
      </InputWrapper>

      <ConditionallyRender
        shouldRender={!!errorMessage}
        content={
          <ErrorMessageWrapper>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </ErrorMessageWrapper>
        }
      />
    </Fragment>
  );
};
