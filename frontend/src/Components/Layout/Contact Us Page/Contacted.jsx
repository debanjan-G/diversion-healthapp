import styles from "./Contacted.module.css";

function Contacted() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Thank you for reaching out to us! </h1>
      <img
        className={styles.img}
        src="https://www.shutterstock.com/image-vector/checkmark-green-vector-isolated-icon-600nw-1504889324.jpg"
        alt="Contacted"
      />
      <p className={styles.msg}>
        We appreciate your interest and will get back to you as soon as
        possible. Please check your email for a confirmation and further
        details.
      </p>
    </div>
  );
}

export default Contacted;
