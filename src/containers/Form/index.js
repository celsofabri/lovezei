import React, {useState} from 'react';

const Form = ({env}) => {
  const [feedback, setFeedback] = useState("")
  const [fullName, setFullName] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false)

  const senderEmail = "celso.fabri@gmail.com"

  const handleCancel = () => {
    setFeedback("")
    setFullName("")
  }

  const handleSubmit = event => {
    event.preventDefault()

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: templateId,
      REACT_APP_EMAILJS_USERID: user,
    } = process.env

    sendFeedback({
      templateId,
      senderEmail,
      receiverEmail,
      fullName,
      feedback,
      user,
    })

    setFormSubmitted(true)
  }

  const sendFeedback = ({
    templateId,
    senderEmail,
    receiverEmail,
    fullName,
    feedback,
    user,
  }) => {
    window.emailjs
      .send(
        "service_sn6pbze",
        templateId,
        {
          senderEmail,
          receiverEmail,
          fullName,
          feedback,
        },
        user
      )
      .then(res => {
        if (res.status === 200) {
          setFormSubmitSuccessful(true)
        }
      })
      .catch(err => console.error("Failed to send feedback. Error: ", err))
  }

  if (formSubmitted && formSubmitSuccessful) {
    return <h2>Thank You! Your submission was sent.</h2>
  }

  return(
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h1>Your Feedback</h1>
      <input
        className="text-input"
        id="fullname-entry"
        name="fullname-entry"
        onChange={(event) => {
          setFullName(event.target.value)
        }}
        placeholder="Enter your fullname here"
        required
        value={fullName}
      />
      <textarea
        className="text-input"
        id="feedback-entry"
        name="feedback-entry"
        onChange={(event) => {
          setFeedback(event.target.value)
        }}
        placeholder="Enter your feedback here"
        required
        value={feedback}
      />
      <div className="btn-group">
        <button className="btn btn--cancel" onClick={handleCancel}>
          Cancel
        </button>

        <input type="submit" value="Submit" className="btn btn--submit" />
      </div>
    </form>
  );
}

export default Form;
