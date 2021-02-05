import React, { useState } from 'react';
import FeedbackMessage from 'components/FeedbackMessage';
import Input from 'components/Form/Input';
import TextArea from 'components/Form/TextArea';
import {
  StyledSubscription,
  StyledForm,
  StyledFormItem
} from './styled';

const Form = ({ env }) => {
  const [feedback, setFeedback] = useState('');
  const [fullName, setFullName] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(
    false
  );

  const senderEmail = 'celso.fabri@gmail.com';

  const handleCancel = () => {
    setFeedback('');
    setFullName('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: templateId,
      REACT_APP_EMAILJS_USERID: user
    } = process.env;

    sendFeedback({
      templateId,
      senderEmail,
      receiverEmail,
      fullName,
      feedback,
      user
    });

    setFormSubmitted(true);
  };

  const sendFeedback = ({
    templateId,
    senderEmail,
    receiverEmail,
    fullName,
    feedback,
    user
  }) => {
    window.emailjs
      .send(
        'service_sn6pbze',
        templateId,
        {
          senderEmail,
          receiverEmail,
          fullName,
          feedback
        },
        user
      )
      .then((res) => {
        if (res.status === 200) {
          setFormSubmitSuccessful(true);
        }
      })
      .catch((err) =>
        console.error('Failed to send feedback. Error: ', err)
      );
  };

  if (formSubmitted && formSubmitSuccessful) {
    return <FeedbackMessage />;
  }

  return (
    <StyledSubscription>
      <h1>Quero me candidatar</h1>

      <StyledForm onSubmit={handleSubmit}>
        <StyledFormItem>
          <Input
            name="fullname-entry"
            onChange={(event) => {
              setFullName(event.target.value);
            }}
            placeholder="Nome completo"
            value={fullName}
            required
          />
        </StyledFormItem>

        <TextArea
          name="feedback-entry"
          onChange={(event) => {
            setFeedback(event.target.value);
          }}
          placeholder="Enter your feedback here"
          value={feedback}
          required
        />
        <div className="btn-group">
          <button className="btn btn--cancel" onClick={handleCancel}>
            Cancel
          </button>

          <input
            type="submit"
            value="Submit"
            className="btn btn--submit"
          />
        </div>
      </StyledForm>
    </StyledSubscription>
  );
};

export default Form;
