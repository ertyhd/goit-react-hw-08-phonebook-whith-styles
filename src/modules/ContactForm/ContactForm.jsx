import React, { useState } from 'react';
import PropTypes from 'prop-types';
import initialState from './initialState';
import contactForm from './contactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const hendleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const hendleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setState({ ...initialState });
  };
  const { name, number } = state;
  return (
    <form className={contactForm.form} onSubmit={hendleSubmit}>
      <h1 className={contactForm.headerContact}>Contacts</h1>
      <label className={contactForm.label}>
        Name
        <input
          className={contactForm.inputField}
          onChange={hendleChange}
          type="text"
          name="name"
          value={name}
          placeholder="input name"
        />
      </label>
      <label className={contactForm.label}>
        Number
        <input
          className={contactForm.inputField}
          onChange={hendleChange}
          type="text"
          name="number"
          value={number}
          placeholder="input number"
        />
      </label>

      <button className={contactForm.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
