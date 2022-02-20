import { useState } from "react";
import "./profile.scss";

const Profile = ({ setContactActive, setProfileActive }) => {
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (success) {
      setProfileActive(false);
      setContactActive(true);
    }
    setSuccess(true);
  };
  return (
    <div className="profile">
      <div className="container">
        <div className="profileTxt">Profile</div>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <label htmlFor="name" className="form-label">
              Legal Business Name*
            </label>
            <input
              type="text"
              placeholder="Bob Prints"
              className="form-control form-control-sm shadow-none"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="industry" className="form-label">
              Industry
            </label>
            <select
              name="industry"
              id=""
              className="form-select form-select-sm shadow-none"
              required
            >
              <option value=""></option>
              <option value="digitalService">Digital Service</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="desc" className="form-label">
              Description*
            </label>
            <input
              type="text"
              placeholder="Bob Prints"
              className="form-control form-control-sm shadow-none"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="size" className="form-label">
              Staff Size
            </label>
            <select
              name="size"
              id=""
              className="form-select form-select-sm shadow-none"
              required
            >
              <option value=""></option>
              <option value="digitalService">Digital Service</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="reg" className="form-label">
              Registration Type
            </label>
            <select
              name="reg"
              id=""
              className="form-select form-select-sm shadow-none"
              required
            >
              <option value=""></option>
              <option value="cac">CAC</option>
            </select>
            <label htmlFor="learn" className="form-label">
              Registration documents required.{" "}
              <span>
                <a href="/"> Learn more</a>
              </span>
            </label>
          </div>
          <button className="submit" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
