import React from 'react';
import { StyledButton } from 'assets/global/styled';
import {
  StyledFeedback,
  StyledFeedbackContent,
  StyledFeedbackMessage
} from './styled';

const FeedbackMessage = ({
  setFormSubmitSuccessful,
  handleCancel
}) => {
  return (
    <StyledFeedback>
      <StyledFeedbackContent>
        <StyledFeedbackMessage>
          Sua inscrição foi realizada com sucesso! Em breve, o Julio
          entrará em contato com você :)
        </StyledFeedbackMessage>
        <StyledButton
          onClick={() => {
            setFormSubmitSuccessful(false);
            handleCancel();
          }}
        >
          Voltar
        </StyledButton>
      </StyledFeedbackContent>
    </StyledFeedback>
  );
};

export default FeedbackMessage;
