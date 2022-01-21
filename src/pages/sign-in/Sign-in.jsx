import "./sign-in.scss";
import { useState } from "react";

export default function SignIn() {
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitLog = (e) => {
    e.preventDefault();
    window.location.replace("/verify");
  };

  const handleSubmitReg = (e) => {
    e.preventDefault();
    window.location.replace("/verify");
  };

  return (
    <div className="sign">
      <div className="left">
        <img src="assets/img/Azabox 1.png" alt="" />
      </div>
      <div className="right">
        <div
          className="login"
          style={signIn ? { display: "block" } : { display: "none" }}
        >
          <div className="container">
            <div
              className="signUp"
              onClick={() => setSignUp(!signUp) || setSignIn(!signIn)}
            >
              Sign Up
            </div>
            <div className="signIn">Sign In</div>
          </div>

          <h2>Welcome back to Azabox </h2>
          <p>Sign in to pick up where you left off</p>

          <form className="row g-3" onSubmit={handleSubmitLog}>
            <div className="top">
              <div className="col-md-4">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="form-control shadow-none"
                />
              </div>
              <div className="col-md-4 rg">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Password(min of 6 characters)"
                  minLength={6}
                  className="form-control shadow-none"
                  value={value}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mid">
              <div className="col-md-4">
                <input type="checkbox" className="check bg-success" />
                <label htmlFor="check" className="form-label checkbox">
                  Never sign me out of this{" "}
                  <span style={{ fontWeight: "700" }}>PC</span>{" "}
                </label>
              </div>
            </div>
            <div className="bottom">
              <div className="col-md-4">
                <button
                  className="form-control shadow-none bg"
                  type="submit"
                  disabled={!value}
                >
                  Sign in
                </button>
              </div>
              <p>or</p>
              <div className="col-md-4 rg">
                <button
                  className="form-control shadow-none bg-transparent"
                  type="submit"
                >
                  <img src="assets/img/flat-color-icons_google.png" alt="" />{" "}
                  Sign in with google
                </button>
              </div>
            </div>
          </form>
        </div>

        <div
          className="register"
          style={signUp ? { display: "block" } : { display: "none" }}
        >
          <div className="container">
            <div className="signUp">Sign Up</div>
            <div
              className="signIn"
              onClick={() => setSignIn(!signIn) || setSignUp(!signUp)}
            >
              Sign In
            </div>
          </div>

          <h3>Azabox for busineses </h3>
          <p>
            Let’s get you all set up so you can verify your account and begin
            setting up your profile
          </p>

          <form className="row g-3" onSubmit={handleSubmitReg}>
            <div className="top">
              <div className="col-md-4">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="form-control shadow-none"
                />
              </div>
              <div className="col-md-4 rg">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="form-control shadow-none"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="form-control shadow-none"
                />
              </div>
              <div className="col-md-4 rg">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  required
                  className="form-control shadow-none"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  minLength={6}
                  required
                  className="form-control shadow-none"
                />
                <label htmlFor="passwordSecure" className="secureLabel">
                  6 Characters is good but longer is better
                </label>
              </div>
              <div className="col-md-4 rg">
                <label htmlFor="confrimPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  className="form-control shadow-none"
                />
                <label htmlFor="passwordSecure" className="secureLabel">
                  Passwords must match
                </label>
              </div>
            </div>
            <div className="mid">
              <div className="col-md-4">
                <input type="checkbox" className="check" />
                <label htmlFor="check" className="form-label checkbox">
                  Yes, I want to receive emails related to Azabox
                </label>
              </div>
              <div className="col-md-4">
                <input type="checkbox" className="check" />
                <label htmlFor="check" className="form-label checkbox">
                  I agree to all the{" "}
                  <a href="/" style={{ fontWeight: "700" }}>
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="/" style={{ fontWeight: "700" }}>
                    {" "}
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>
            <div className="bottom">
              <div className="col-md-4">
                <button className="form-control shadow-none bg" type="submit">
                  Get started with Azabox
                </button>
              </div>
              <p>or</p>
              <div className="col-md-4 rg">
                <button
                  className="form-control shadow-none bg-transparent"
                  type="submit"
                >
                  <img src="assets/img/flat-color-icons_google.png" alt="" />{" "}
                  Sign up with google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
