import React, { useState } from 'react';
import FeedbackMessage from 'components/FeedbackMessage';
import Input from 'components/Form/Input';
import TextArea from 'components/Form/TextArea';
import { masks } from 'helpers/masks';
import {
  StyledWrapper,
  StyledTitle,
  StyledButton
} from 'assets/global/styled';
import {
  StyledSubscription,
  StyledForm,
  StyledFormGroup,
  StyledFormItem
} from './styled';

const Form = ({ env }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [sign, setSign] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [telegram, setTelegram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(
    false
  );

  const senderEmail = 'celso.fabri@gmail.com';

  const handleCancel = () => {
    setFullName('');
    setEmail('');
    setCity('');
    setState('');
    setBirthdate('');
    setSign('');
    setWhatsapp('');
    setTelegram('');
    setFacebook('');
    setInstagram('');
    setTwitter('');
    setMessage('');
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
      email,
      city,
      state,
      birthdate,
      sign,
      whatsapp,
      telegram,
      facebook,
      instagram,
      twitter,
      message,
      user
    });

    setFormSubmitted(true);
  };

  const sendFeedback = ({
    templateId,
    senderEmail,
    receiverEmail,
    fullName,
    email,
    city,
    state,
    birthdate,
    sign,
    whatsapp,
    telegram,
    facebook,
    instagram,
    twitter,
    message,
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
          email,
          city,
          state,
          birthdate,
          sign,
          whatsapp,
          telegram,
          facebook,
          instagram,
          twitter,
          message
        },
        user
      )
      .then((res) => {
        if (res.status === 200) {
          setFormSubmitSuccessful(true);
        }
      })
      .catch((err) =>
        console.error('Failed to send message. Error: ', err)
      );
  };

  if (formSubmitted && formSubmitSuccessful) {
    return (
      <FeedbackMessage
        setFormSubmitSuccessful={setFormSubmitSuccessful}
        handleCancel={handleCancel}
      />
    );
  }

  return (
    <StyledSubscription>
      <StyledWrapper>
        <StyledTitle>Quero participar!</StyledTitle>

        <StyledForm onSubmit={handleSubmit}>
          <StyledFormGroup>
            <StyledFormItem>
              <Input
                name="fullname"
                type="text"
                onChange={(event) => {
                  setFullName(event.target.value);
                }}
                placeholder="Nome completo"
                value={fullName}
                required
              />
            </StyledFormItem>
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledFormItem>
              <Input
                name="email"
                type="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder="Email"
                value={email}
                required
              />
            </StyledFormItem>
          </StyledFormGroup>

          <StyledFormGroup column={true}>
            <StyledFormItem>
              <Input
                name="city"
                type="text"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
                placeholder="Cidade"
                value={city}
                required
              />
            </StyledFormItem>
            <StyledFormItem>
              <Input
                name="state"
                type="text"
                onChange={(event) => {
                  setState(event.target.value);
                }}
                placeholder="Estado"
                value={state}
                required
              />
            </StyledFormItem>
          </StyledFormGroup>

          <StyledFormGroup column={true}>
            <StyledFormItem>
              <Input
                name="birthdate"
                type="tel"
                onChange={(event) => {
                  setBirthdate(masks.date(event.target.value));
                }}
                placeholder="Data de Nascimento"
                value={birthdate}
                required
              />
            </StyledFormItem>
            <StyledFormItem>
              <Input
                name="sign"
                type="text"
                onChange={(event) => {
                  setSign(event.target.value);
                }}
                placeholder="Signo"
                value={sign}
                required
              />
            </StyledFormItem>
          </StyledFormGroup>

          <StyledFormGroup column={true}>
            <StyledFormItem>
              <Input
                name="whatsapp"
                onChange={(event) => {
                  setWhatsapp(masks.phone(event.target.value));
                }}
                placeholder="WhatsApp"
                value={whatsapp}
              />
            </StyledFormItem>
            <StyledFormItem>
              <Input
                name="telegram"
                type="text"
                onChange={(event) => {
                  setTelegram(event.target.value);
                }}
                placeholder="Telegram"
                value={telegram}
              />
            </StyledFormItem>
          </StyledFormGroup>

          <StyledFormGroup column={true}>
            <StyledFormItem>
              <Input
                name="facebook"
                type="text"
                onChange={(event) => {
                  setFacebook(event.target.value);
                }}
                placeholder="Facebook"
                value={facebook}
              />
            </StyledFormItem>
            <StyledFormItem>
              <Input
                name="instagram"
                type="text"
                onChange={(event) => {
                  setInstagram(event.target.value);
                }}
                placeholder="Instagram"
                value={instagram}
              />
            </StyledFormItem>
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledFormItem>
              <Input
                name="twitter"
                type="text"
                onChange={(event) => {
                  setTwitter(event.target.value);
                }}
                placeholder="Twitter"
                value={twitter}
              />
            </StyledFormItem>
          </StyledFormGroup>

          <StyledFormGroup>
            <StyledFormItem>
              <TextArea
                name="message"
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                placeholder="Deixe uma mensagem"
                value={message}
                required
              />
            </StyledFormItem>
          </StyledFormGroup>
          <div className="btn-group">
            <StyledButton type="submit">Inscrever-se</StyledButton>
          </div>
        </StyledForm>
      </StyledWrapper>
    </StyledSubscription>
  );
};

export default Form;
