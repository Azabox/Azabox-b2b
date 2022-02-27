import { Link } from "react-router-dom";
import "./success.scss";

export default function Success() {
  return (
    <div className="success">
      <div className="left">
        <img src="assets/img/Azabox 1.png" alt="" />
      </div>
      <div className="right">
        <div className="container">
          <h2>You have successfully created your Azabox Business Account</h2>
          <p>Get ready to scale your business with Azabox</p>

          <div className="container">
            <img
              src="assets/img/undraw_finish_line_katerina_limpitsouni_xy20 1.png"
              alt=""
            />
          </div>

          <Link to="/profile-dashboard" className="link">
            Jump into your dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
