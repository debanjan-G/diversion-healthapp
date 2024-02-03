import { useNavigate } from "react-router-dom";
import styles from "./InvalidRoute.module.css";

const InvalidRoute = () => {
  const navigateTo = useNavigate();
  return (
    <div className={styles.container}>
      <p className={styles.msg}>ERROR 404: Page Not Found</p>
      <img
        src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"
        alt=""
        className={styles.errorImg}
      />
      <button
        className={styles.btn}
        onClick={() => {
          navigateTo("/");
        }}
      >
        HOME
      </button>
    </div>
  );
};

export default InvalidRoute;
