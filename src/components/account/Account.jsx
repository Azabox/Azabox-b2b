import { useState } from "react";
import "./account.scss";

const Account = ({ setProfileActive, setAccountActive }) => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (success) {
      setAccountActive(false);
      setProfileActive(true);
    }
    setSuccess(true);
  };
  return (
    <div className="account">
      <div className="container">
        <div className="accountTxt">Account</div>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <label htmlFor="name" className="form-label">
              Bank Name*
            </label>
            <input
              type="text"
              className="form-control form-control-sm shadow-none"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="desc" className="form-label">
              Account Number*
            </label>
            <input
              type="text"
              className="form-control form-control-sm shadow-none"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="reg" className="form-label">
              Name on Account*
            </label>
            <input
              type="text"
              className="form-control form-control-sm shadow-none"
              required
            />
          </div>
          <button className="submit" type="submit">
            Continue
          </button>
          {success && (
            <span
              style={{ color: "green", fontSize: "14px", textAlign: "center" }}
            >
              Registration completed successfully!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Account;
