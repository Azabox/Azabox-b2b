import { useState } from "react";
import "./invoice.scss";

const InvoicePop = ({ invoice, setInvoice, success, setSuccess }) => {
  const [invoiceContinue, setInvoiceContinue] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="invoicePop">
      <form
        className={"row g-3 " + (invoiceContinue && "inactive")}
        onSubmit={handleSubmit}
      >
        <i class="bi bi-x-lg cancel" onClick={() => setInvoice(!invoice)}></i>
        <div className="col-md-4">
          <label htmlFor="email" className="form-label">
            Customer’s Email Address{" "}
          </label>
          <input type="email" className="form-control shadow-none" />
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input shadow-none"
              checked
            />
            <label htmlFor="check" className="form-check-label">
              Save as customer
            </label>
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="₦0.00"
          />
          <label htmlFor="invoiceAmount" className="form-label down">
            You can send invoices as low as ₦100{" "}
          </label>
        </div>
        <div className="col-md-4">
          <label htmlFor="invoice" className="form-label">
            Invoice Note
          </label>
          <input type="text" className="form-control shadow-none" />
        </div>
        <button
          className="submit"
          type="submit"
          onClick={() => setInvoiceContinue(!invoiceContinue)}
        >
          Continue
        </button>
      </form>

      <div
        className={
          success
            ? "confirmation "
            : "confirmation " + (invoiceContinue && "active")
        }
      >
        <i
          className="bi bi-x-lg cancel"
          onClick={() => setInvoice(!invoice)}
        ></i>
        <p>
          Request <span>₦50,000.00</span> from{" "}
          <span>Productbob21@gmail.com?</span>
        </p>
        <button
          className="submit"
          type="submit"
          onClick={() => setSuccess(!success)}
        >
          Continue
        </button>
        <button
          className="submit edit"
          onClick={() => setInvoiceContinue(!invoiceContinue)}
        >
          Edit Invoice
        </button>
      </div>

      <div className={"successPop " + (success && "active")}>
        <i
          className="bi bi-x-lg cancel"
          onClick={() => setInvoice(!invoice)}
        ></i>
        <p>
          <span>Invoice Sent! </span>
          <br />
          You sent an invoice of <span> ₦50,000</span> to{" "}
          <span> Productbob21@gmail.com</span>.
        </p>
      </div>
    </div>
  );
};

export default InvoicePop;
