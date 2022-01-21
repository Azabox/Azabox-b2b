import { useState } from "react";
import { Link } from "react-router-dom";
import "./business.scss";

export default function Business() {
  const [value, setValue] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.replace("/question");
  };

  return (
    <div className="business">
      <div className="left">
        <img src="assets/img/Azabox 1.png" alt="" />
      </div>
      <div className="right">
        <div className="register">
          <div className="container">
            <div className="signUp">Sign Up</div>
            <Link to="/" className="signIn">
              Sign In
            </Link>
          </div>
        </div>

        <h3>Azabox for busineses </h3>
        <p>
          Let’s get you all set up so you can verify your account and begin
          setting up your profile
        </p>
        <h2>What best describes your business</h2>

        <div className="box">
          <div className="container">
            <h2>Unregistered Business</h2>
            <p>Made for sole traders, online stores and social media vendors</p>
          </div>
          <div className="container rg">
            <h2>Registered Business</h2>
            <p>
              Made for Businesses and companies that are registered under CAC in
              Nigeria
            </p>
          </div>
        </div>

        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <label htmlFor="name" className="form-label">
              Business Name
            </label>
            <input
              type="text"
              className="form-control form-control-sm shadow-none"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="industry" className="form-label">
              Industry
            </label>
            <select
              onChange={handleChange}
              name="industry"
              id=""
              className="form-select form-select-sm mb-3 shadow-none"
              aria-label=".form-select-lg example"
            >
              <option defaultValue="">Select an option</option>
              <option value="1">one</option>
              <option value="2">two</option>
            </select>
            <div className="col-md-4">
              <button className="btn" type="submit" disabled={!value}>
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
