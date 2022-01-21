import "./question.scss";

export default function Question() {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.replace("/success");
  };
  return (
    <div className="question">
      <div className="left">
        <img src="assets/img/Azabox 1.png" alt="" />
      </div>
      <div className="right">
        <h2>Get a personalized Azabox dashboard</h2>
        <h3>What do you want to use Azabox for?</h3>
        <p>Select one or more options to get a personalized Azabox dashboard</p>

        <div className="container">Keep financial record</div>
        <div className="container">Track business expenses</div>
        <div className="container">
          Create and track Invoices sent to customers{" "}
        </div>
        <div className="container">
          Find out if you are making profits or losses in your business
        </div>

        <button className="form-control shadow-none bg" onClick={handleClick}>
          Continue
        </button>
        <button className="form-control shadow-none bg-transparent mt-0">
          Skip
        </button>
      </div>
    </div>
  );
}
