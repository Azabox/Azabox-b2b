import { useState } from "react";
import InvoicePop from "../../components/invoice/Invoice";
import "./invoice.scss";
import { InvoiceData } from "../../dummyData";
import { useEffect } from "react";

const Invoice = () => {
  const [invoice, setInvoice] = useState(false);

  const [success, setSuccess] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    if (InvoiceData.length >= 1) {
      setData(InvoiceData);
    } else {
      return null;
    }
  }, []);

  return (
    <div className="invoice">
      <div className="container">
        <div
          className={success ? "content" : "content " + (invoice && "active")}
        >
          <div className="head">
            <div className="headLeft">
              <div className="title">Invoices</div>
              <div className="cont">Request payment from customers </div>
            </div>
            <div className="rightCont">
              <div className={data.length >= 1 ? "options" : "none"}>
                <img src="assets/img/folder-add.png" alt="" />
                <p>Export as CSV</p>
              </div>
              <div className={data.length >= 1 ? "options" : "none"}>
                <img src="assets/img/filter.png" alt="" />
                <p>October 2020</p>
              </div>

              <button
                className="headRight"
                onClick={() => setInvoice(!invoice)}
                disabled={invoice}
              >
                New Invoice
              </button>
            </div>
          </div>
          <div className={data.length >= 1 ? "none" : "body"}>
            <div className="img">
              <img src="assets/img/invoice.png" alt="" />
            </div>
            <button
              className="create"
              onClick={() => setInvoice(!invoice)}
              disabled={invoice}
            >
              Create Invoice
            </button>
          </div>

          <div className={data ? "table-responsive" : "none"}>
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Customer Email</th>
                  <th scope="col">Invoice No</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Created</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              {data.map((i) => (
                <tbody key={i.id}>
                  <tr>
                    <td>{i.customerEmail}</td>
                    <td>{i.invoiceNo}</td>
                    <td>{i.amount}</td>
                    <td>{i.created}</td>
                    <td className="due">{i.status}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        {/* success */}
        {/* <div className="success">
          <InvoicePop success={success} setSuccess={setSuccess} />
        </div> */}
        <div className={"invoicePopup " + (invoice && "active")}>
          <InvoicePop
            invoice={invoice}
            setInvoice={setInvoice}
            success={success}
            setSuccess={setSuccess}
          />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
