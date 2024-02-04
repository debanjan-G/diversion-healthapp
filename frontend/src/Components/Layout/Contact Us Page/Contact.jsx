import React, { useState } from "react";
import Contacted from "./Contacted";
import styles from "./Contact.module.css";

const Contact = () => {
  const [isFilled, setIsFilled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    query: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFilled(true);
    console.log("Form Data frontend:", formData);
    try {
      const response = await fetch(
        "https://mindscale.onrender.com/contact/sendmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Form data sent successfully");
        // Assuming you want to set isFilled to true when the form is successfully submitted
        setIsFilled(true);
      } else {
        console.error("Failed to send form data");
      }
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      {isFilled ? (
        <Contacted />
      ) : (
        <form className={styles.container} onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center" }}>Get In Touch</h1>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              className="form-control"
              id="exampleFormControlInput1"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Query</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="You can ask anything"
              name="query"
              value={formData.query}
              onChange={handleInputChange}
              style={{ resize: "none" }}
              required
            ></textarea>
          </div>
          <div className={styles.btnContainer}>
            <button type="submit" className={`btn btn-success ${styles.btn}`}>
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
