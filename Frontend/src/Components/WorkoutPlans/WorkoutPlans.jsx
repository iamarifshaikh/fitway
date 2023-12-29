import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./WorkoutPlans.scss";

const WorkoutPlans = () => {
  return (
    <div>
      <Navbar hasFitnessData={false}/>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis text-bold">
              FitWay's Best Workout Plans
            </h1>
            <br />
            <p className="lead">Our Workout Plans</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                style={{
                  backgroundColor: "#e12866",
                  outline: "none",
                  border: "none",
                  color: "white",
                  padding: "1rem 1.2rem",
                  marginTop: "1rem",
                  borderRadius: "0.4rem",
                  cursor: " pointer",
                  fontSize: "1rem",
                }}
                className="explore-button"
              >
                Explore
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-5 float-right mx-auto img-fluid"
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Workout Plan"
            />
          </div>
        </div>
      </div>

      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal text-body-emphasis">Gym Membership Pricing</h1>
        <p className="fs-5 text-body-secondary">
          We strive to provide our customers with an overall best experience in
          multiple pricing packages
        </p>
      </div>
      <div className="container">
        <div className="container row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Basic</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ₹1000
                  <small className="text-body-secondary fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Gym membership</li>
                  <li>Access to all equipment</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Signup Now
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Premium</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ₹2000
                  <small className="text-body-secondary fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Premium membership</li>
                  <li>Personal Trainer</li>
                  <li>Email support</li>
                  <li>Exclusive access</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Signup Now
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Ultra</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ₹3000
                  <small className="text-body-secondary fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Ultra membership</li>
                  <li>Personal Trainer</li>
                  <li>Exclusive support</li>
                  <li>Exclusive access</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Signup Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkoutPlans;
