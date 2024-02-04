import styles from "./Contact.module.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form");
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h1 style={{ textAlign: "center" }}>Get In Touch</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
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
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
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
  );
};

export default Contact;
