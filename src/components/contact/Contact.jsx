import { useState } from "react";
import "./contact.scss";

const Contact = ({ setContactActive, setAccountActive }) => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (success) {
      setAccountActive(true);
      setContactActive(false);
    }
    setSuccess(true);
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contactTxt">Contacts</div>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <label htmlFor="name" className="form-label">
              Business Email*
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
              Phone Number*
            </label>
            <input
              type="number"
              placeholder="+2348154970417"
              className="form-control form-control-sm"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="desc" className="form-label">
              Website
            </label>
            <input
              type="text"
              placeholder="www.Bobprints.com"
              className="form-control shadow-none form-control-sm"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="size" className="form-label">
              Country*
            </label>
            <select
              name="size"
              id=""
              className="form-select shadow-none form-select-sm"
              required
            >
              <option value=""></option>
              <option value="nigeria">Nigeria</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="reg" className="form-label">
              State or Region*
            </label>
            <input
              type="text"
              placeholder="Oyo State"
              className="form-control form-control-sm shadow-none"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="office" className="form-label">
              Office Address*
            </label>
            <input
              type="text"
              placeholder="No 10, Figma Avenue, Ibadan"
              className="form-control form-control-sm shadow-none"
              required
            />
          </div>
          <button className="submit" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
