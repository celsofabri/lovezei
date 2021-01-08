import React from 'react';
import { StyledFeedback, StyledFeedbackMessage } from './styled';

const FeedbackMessage = () => {
  return (
    <StyledFeedback>
      <StyledFeedbackMessage>
        Seus dados foram enviados com sucesso!
      </StyledFeedbackMessage>
    </StyledFeedback>
  );
};

export default FeedbackMessage;
