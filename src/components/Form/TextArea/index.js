import React from 'react';
import { StyledField, StyledTextArea } from './styled';

const TextArea = React.forwardRef(({ ...props }, ref) => {
  return (
    <StyledField>
      <StyledTextArea ref={ref} {...props} />
    </StyledField>
  );
});

export default TextArea;
