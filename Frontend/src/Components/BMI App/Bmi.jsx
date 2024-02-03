import styles from "./Bmi.module.css";

import { useNavigate } from "react-router-dom";

const Bmi = () => {
  const navigateTo = useNavigate();
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/01/shdgxsxsefgxfcxdddcccscsd-1673530998.jpg"
            className={`d-block mx-lg-auto img-fluid ${styles.bmiHeroImage}`}
            alt="Bootstrap Themes"
            style={{ objectFit: "cover", height: "18rem", width: "30rem" }}
            // width="700"
            // height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Personalized BMI, Nutrition, and Health Tips
          </h1>
          <p className="lead">
            Welcome to MindScale, your personalized wellness companion. Measure
            your BMI with precision, and unlock tailored food recommendations
            and health tips crafted just for you. Our platform is designed to
            cater to your unique needs, guiding you towards a healthier
            lifestyle. Discover the power of personalized nutrition and
            well-being insights. Your journey to a fitter, more nourished you
            starts here at MindScale.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              onClick={() => {
                navigateTo("/bmi");
              }}
            >
              Calculate BMI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
