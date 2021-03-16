import React, { useState } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactSuccess from '../../components/ContactForm/ContactSuccses';
import Footer from '../../components/Footer/Footer';
import '../../components/ContactForm/Form.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  function submitForm() {
    setLoading(true);
  }

  return (
    <>
      <div className="form-container">
        {/* <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship" />
        </div> */}
        {!loading ? (
          <ContactForm submitForm={submitForm} />
        ) : (
          <ContactSuccess />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
