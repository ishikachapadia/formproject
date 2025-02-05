"use client";

import { useState } from "react";
import "../styles/form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    day: "",
    month: "",
    year: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    guardianName: "",
    guardianEmail: "",
    guardianPhone: "",
    isUnder16: false,
    consentRules: false,
    consentCommunications: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [showGuardianForm, setShowGuardianForm] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isRulesPopupVisible, setIsRulesPopupVisible] = useState(false);

  const handleCheckboxClick = () => {
    setIsRulesPopupVisible(!isRulesPopupVisible);
  };
  
  const handleHeaderClick = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "isUnder16") {
      setShowGuardianForm(checked);
    }
  };

  const namePattern = /^[a-zA-Z]+$/; 
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const postalCodePattern = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/; 
  const phonePattern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/; 

  const validateForm = () => {
    const errors = {};
  if (!formData.firstName.trim()) {
  errors.firstName = "First name is required.";
} else if (!namePattern.test(formData.firstName)) {
  errors.firstName = "First name must contain only letters.";
}

if (!formData.lastName.trim()) {
  errors.lastName = "Last name is required.";
} else if (!namePattern.test(formData.lastName)) {
  errors.lastName = "Last name must contain only letters.";
}

if (!formData.email.trim()) {
  errors.email = "Email address is required.";
} else if (!emailPattern.test(formData.email)) {
  errors.email = "Please enter a valid email address.";
}

if (!formData.day) {
  errors.day = "Day is required.";
} else if (formData.day < 1 || formData.day > 31) {
  errors.day = "Please enter a valid day (1-31).";
}

if (!formData.month) {
  errors.month = "Month is required.";
} else if (formData.month < 1 || formData.month > 12) {
  errors.month = "Please enter a valid month (1-12).";
}

if (!formData.year) {
  errors.year = "Year is required.";
} else if (formData.year < 1900 || formData.year > new Date().getFullYear()) {
  errors.year = "Please enter a valid year.";
}

if (!formData.address.trim()) {
  errors.address = "House address is required.";
}

if (!formData.city.trim()) {
  errors.city = "City is required.";
}

if (!formData.province.trim()) {
  errors.province = "Province is required.";
}

if (!formData.postalCode.trim()) {
  errors.postalCode = "Postal code is required.";
} else if (!postalCodePattern.test(formData.postalCode)) {
  errors.postalCode = "Please enter a valid postal code.";
}

if (showGuardianForm) {
  if (!formData.guardianName.trim()) {
    errors.guardianName = "Guardian name is required.";
  } else if (!namePattern.test(formData.guardianName)) {
    errors.guardianName = "Guardian's name must contain only letters.";
  }

  if (!formData.guardianEmail.trim()) {
    errors.guardianEmail = "Guardian email is required.";
  } else if (!emailPattern.test(formData.guardianEmail)) {
    errors.guardianEmail = "Please enter a valid email address.";
  }

  if (!formData.guardianPhone.trim()) {
    errors.guardianPhone = "Guardian phone number is required.";
  } else if (!phonePattern.test(formData.guardianPhone)) {
    errors.guardianPhone = "Please enter a valid phone number.";
  }
}

if (!formData.consentRules) {
  errors.consentRules = "You must agree to the rules.";
}
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    setFormErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted:", formData);
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <div className="form-wrapper">
      <div className="header" onClick={handleHeaderClick}>
        <h1>PARTICIPATION INSTRUCTIONS</h1>
        <p>Click to read the instructions</p>
      </div>
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>How to Participate</h2>
            <ol> <li>	<b>Fill out the form:</b> Enter your name, email, birthdate, and address.</li>
                <li><b> Upload your photo:</b> Take a fun photo with milk or milk products in the photobooth. Add stickers and filters! </li> 
                <li><b> Submit your entry:</b> Complete the form, answer the skill-testing question, and submit. </li>
                <li><b> Win & Be Featured:</b> Every week, a winner will be chosen, and their photo will be featured as "Winning Image of the Week." </li>	
                <li><b>Agree to the rules:</b> Make sure you read and agree to the rules before entering. If you're under 16, have a guardian’s consent. </li>
            </ol>
            <div className="submitButton">
            <button onClick={() => setIsPopupVisible(false)} className="close-btn">
              Back
            </button>
            </div>
          </div>
        </div>
      )}

      {showGuardianForm ? (
        <div className="form-container">
          <div className="form-group">
            <label>Guardian Name:</label>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              className="form-input"
              required
            />
            {formErrors.guardianName && <span className="error">{formErrors.guardianName}</span>}
          </div>
          <div className="form-group">
            <label>Guardian Email:</label>
            <input
              type="email"
              name="guardianEmail"
              value={formData.guardianEmail}
              onChange={handleChange}
              className="form-input"
              required
            />
              {formErrors.guardianEmail && <span className="error">{formErrors.guardianEmail}</span>}
          </div>
          <div className="form-group">
            <label>Guardian Phone Number:</label>
            <input
              type="tel"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleChange}
              className="form-input"
              required
            />
            {formErrors.guardianPhone && <span className="error">{formErrors.guardianPhone}</span>}
          </div>

          <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="consentRules"
              checked={formData.consentRules}
              onChange={handleChange}
              className="form-checkbox"
              required
            />
            I agree to the contest rules and regulations.
          </label>
          {formErrors.consentRules && <span className="error">{formErrors.consentRules}</span>}
        </div>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="consentCommunications"
              checked={formData.consentCommunications}
              onChange={handleChange}
              className="form-checkbox"
            />
            I consent to receiving communications about milk products and sponsors.
          </label>
        </div>

          <div className="guardianButton">
          <button type="button" onClick={() => setShowGuardianForm(false)} className="guardian-submit">
              BACK
            </button>
            <button type="submit" onClick={handleSubmit}  className="guardian-submit">
              SUBMIT
            </button>
          </div>
        </div>
      ) : (

<form onSubmit={handleSubmit} className="form-container">

  <div className="name-group">
    <div className="input-group">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="form-input"
        required
      />
      {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
    </div>
    
    <div className="input-group">
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="form-input"
        required
      />
      {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
    </div>
  </div>

  <div className="form-group">
    <label htmlFor="email">Email Address</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="form-input"
      required
    />
    {formErrors.email && <span className="error">{formErrors.email}</span>}
  </div>

  <div className="form-group date-row">
    <div className="input-group">
      <label htmlFor="day">Day</label>
      <input
        type="number"
        id="day"
        name="day"
        value={formData.day}
        onChange={handleChange}
        className="form-input"
        required
        min="1"
        max="31"
      />
      {formErrors.day && <span className="error">{formErrors.day}</span>}
    </div>
    <div className="input-group">
      <label htmlFor="month">Month</label>
      <input
        type="number"
        id="month"
        name="month"
        value={formData.month}
        onChange={handleChange}
        className="form-input"
        required
        min="1"
        max="12"
      />
      {formErrors.month && <span className="error">{formErrors.month}</span>}
    </div>
    <div className="input-group">
      <label htmlFor="year">Year</label>
      <input
        type="number"
        id="year"
        name="year"
        value={formData.year}
        onChange={handleChange}
        className="form-input"
        required
        min="1900"
        max={new Date().getFullYear()}
      />
      {formErrors.year && <span className="error">{formErrors.year}</span>}
    </div>
  </div>

  <div className="form-group">
    <label>House Address</label>
    <input
      type="text"
      name="address"
      value={formData.address}
      onChange={handleChange}
      className="form-input"
      required
    />
  </div>

  <div className="form-group address-row">
    <div className="form-item">
      <label>City:</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="form-input"
        required
      />
    </div>
    <div className="form-item">
      <label>Province</label>
      <input
        type="text"
        name="province"
        value={formData.province}
        onChange={handleChange}
        className="form-input"
        required
      />
    </div>
    <div className="form-item">
      <label>Postal Code</label>
      <input
        type="text"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleChange}
        className="form-input"
        required
      />
      {formErrors.postalCode && <span className="error">{formErrors.postalCode}</span>}
    </div>
  </div>

  <div className="checkbox-group">
    <label>
      <input
        type="checkbox"
        name="isUnder16"
        checked={formData.isUnder16}
        onChange={handleChange}
        className="form-checkbox"
      />
      Check this box if you're below 16 years old.
    </label>
  </div>
  <div className="checkbox-group">
    <label>
      <input
        type="checkbox"
        name="consentRules"
        checked={formData.consentRules}
        onChange={handleChange}
        className="form-checkbox"
        required
      />
          <span className="clickToRead" onClick={handleCheckboxClick}> Click to read. </span> 
I agree to the contest rules and regulations.
    </label>
    {formErrors.consentRules && <span className="error">{formErrors.consentRules}</span>}

          {isRulesPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <h2>Contest Rules & Terms</h2>
              <ol> <li>	<b>Eligibility:</b> Open to Canadian residents aged 16+. Under 16 requires guardian consent.</li>
                <li><b> Photo Use:</b> By entering, you allow us to use your photo in marketing materials.</li> 
                <li><b> Prizes:</b> Winners are drawn randomly, must answer a skill-testing question, and prizes are non-transferable.</li>
                <li><b> Data Use:</b> Your personal info will be used only for contest purposes. You can opt out anytime.</li>	
                <li><b>Communications:</b> By entering, you agree to receive updates about milk products and promotions.</li>
                <li><b>Contest Changes:</b> We reserve the right to modify or cancel the contest at any time.</li>
            </ol>
              
              <div className="submitButton">
              <button onClick={() => setIsRulesPopupVisible(false)} className="close-btn">
                Close
              </button>
              </div>

            </div>
          </div>
        )}
  </div>
  
  <div className="checkbox-group">
    <label>
      <input
        type="checkbox"
        name="consentCommunications"
        checked={formData.consentCommunications}
        onChange={handleChange}
        className="form-checkbox"
      />
      I consent to receiving communications regarding milk products and sponsors.
    </label>
  </div>

<div className="submitButton">
  <button type="submit" className="form-submit">
    SUBMIT
  </button>
  </div>
</form>
      )}
    </div>
  );
}
