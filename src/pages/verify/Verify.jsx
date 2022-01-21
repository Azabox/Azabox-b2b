import "./verify.scss";

export default function Verify() {
  const handleInput = (e) => {
    e.preventDefault();
    window.location.replace("/business");
  };
  return (
    <div className="verify">
      <div className="left">
        <img src="assets/img/Azabox 1.png" alt="" />
      </div>
      <div className="right">
        <h3>Verify your Email</h3>
        <p>
          A 6 digit-code was sent to your shadesbybob@gmail.com for your
          verification and security
        </p>

        <form className="row g-3">
          <div className="col-md-4">
            <input
              type="tel"
              className="form-control shadow-none"
              maxLength={1}
            />
          </div>
          <div className="col-md-4">
            <input
              type="tel"
              className="form-control shadow-none"
              maxLength={1}
            />
          </div>
          <div className="col-md-4">
            <input
              type="tel"
              className="form-control shadow-none"
              maxLength={1}
            />
          </div>
          <div className="col-md-4">
            <input
              type="tel"
              className="form-control shadow-none"
              maxLength={1}
            />
          </div>
          <div className="col-md-4">
            <input
              type="tel"
              className="form-control shadow-none"
              maxLength={1}
            />
          </div>
          <div className="col-md-4">
            <input
              type="tel"
              className="form-control shadow-none"
              maxLength={1}
              onInput={handleInput}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
