import React, { useContext } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { UserContext } from '../../App';
import { config } from '../../config';

export default function ContactForm() {
    const { language } = useContext(UserContext);
    const [state, handleSubmit] = useForm(config.contactForm);

  if (state.succeeded) {
      return <h3>{language === "fr" ? 
        "Merci pour votre message, nous vous contacterons dans les plus brefs délais" : 
        "Thanks for your message, we'll be in touch as soon as possible"}</h3>;
  }

  return (
    <form onSubmit={handleSubmit} id="contact-form" className='form'>
      <label htmlFor="email">
        {language === "fr" ? "Adresse Email" : "Email Address"}
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}