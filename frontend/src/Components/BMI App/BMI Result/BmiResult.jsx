/* eslint-disable react/prop-types */
import styles from "./BmIResult.module.css";

const BmiResult = ({ result }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Your BMI is {result.bmi}</h1>
      <div className={styles.container}>
        <h2 className={styles.feedbackHeader}>Food Recommendations</h2>
        <p id={styles.intro}>{result.recommendedDiet.intro}</p>
        <div className="row" style={{ justifyContent: "center" }}>
          {result.recommendedDiet.foods.map((food) => (
            <div
              className={`card ${styles.foodCard}`}
              style={{
                width: "18rem",
                backgroundColor: "#252A34",
                color: "#08D9D6",
                borderRadius: "20px",
                padding: "1.5rem",
                margin: "20px",
                fontFamily: "'Roboto', sans-serif",
              }}
              key={food.id}
            >
              <img
                src={food.img}
                className={`card-img-top ${styles.foodImage}`}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text">{food.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p id={styles.outro}>{result.recommendedDiet.outro}</p>
      </div>
    </>
  );
};

export default BmiResult;
