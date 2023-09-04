import { StyledTitle } from "./Input.styled";

export const InputWrapper = ({ title, children }) => {
  return (
    <div>
      <label>
        <StyledTitle>{title}</StyledTitle>
        {children}
      </label>
    </div>
  );
};