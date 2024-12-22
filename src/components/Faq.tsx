import React from "react";
import faq from "/faq.png"
const Faq: React.FC = () => {
  return <div className="faq-wrapper">
    <h5 className="faq-heading">Get Your Answer</h5>
    <p className="faq-sub-heading">Frequently Asked Questions</p>
    <div className="faq-section">
      <div className="left-section">
        <img src={faq} alt="faq" />
      </div>
      <div className="right-section">
        <ul className="faqs">
          <li>Why choose our medical for your family?</li>
          <li>Why we are different from others?</li>
          <li>Trusted & experience senior care & love</li>
          <li>How to get appointment for emergency cases?</li>
        </ul>
      </div>
    </div>
  </div>;
};

export default Faq;
