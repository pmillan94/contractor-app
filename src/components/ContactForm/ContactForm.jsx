import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const ContactForm = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get Started with us today! Contact us and let us build your dream
          home.
        </h1>
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="company" className="form-label">
            Company Name
          </label>
          <input
            id="company"
            type="text"
            name="company"
            className="form-input"
            placeholder="Enter your Company Name"
            value={values.company}
            onChange={handleChange}
          />
          {errors.company && <p>{errors.company}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <input
            id="message"
            type="text"
            name="message"
            className="form-input"
            placeholder="Enter your message"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Send
        </button>
        {/* <span className="form-input-clicked">Message Not Sent</span> */}
      </form>
    </div>
  );
};

export default ContactForm;
