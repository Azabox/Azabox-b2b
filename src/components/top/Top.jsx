import "./top.scss";
import { useState } from "react";

const Top = () => {
  const [live, setLive] = useState(false);
  return (
    <div className="profileTop">
      <div className="topLeft">
        <form className="row g-3">
          <div className="col-md-4">
            <label htmlFor="search">
              <span>
                <i className="bi bi-search"></i>
              </span>
            </label>
            <input
              className="form-control shadow-none"
              type="text"
              placeholder="Search for recent transactions, invoices and activities"
            />
          </div>
        </form>
      </div>
      <div className="topRight">
        <div className="first">
          <div className="switch">Switch To Live</div>
          <i
            className={live ? "bi bi-toggle-on" : "bi bi-toggle-off"}
            onClick={() => setLive(!live)}
          ></i>
        </div>
        <div className="second">
          <div className="circle">BP</div>
          <div className="bob">Bob Prints</div>
        </div>
      </div>
    </div>
  );
};

export default Top;
