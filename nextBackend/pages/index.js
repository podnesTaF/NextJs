/** @format */

import { useRef, useState } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const [feedback, setFeedback] = useState([]);

  function submitFormHandler(event) {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const feedback = feedbackInputRef.current.value;

    console.log(email);

    const post = {
      email,
      text: feedback,
    };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then((res) => res.json())
      .then((data) => {
        setFeedback(data.feedback);
      });
  }

  return (
    <div>
      <div>
        <h1>The Home Page</h1>
      </div>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea
            type="email"
            id="feedback"
            rows="5"
            ref={feedbackInputRef}
          ></textarea>
        </div>
        <button type="submit">Send feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedback.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
