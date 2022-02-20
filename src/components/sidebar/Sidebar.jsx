import { useState } from "react";
import "./sidebar.scss";

const Sidebar = ({ sideMenu, setSideMenu }) => {
  const [dashboard, setDashboard] = useState(true);
  const [profile, setProfile] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [chart, setChart] = useState(false);
  const [payroll, setPayroll] = useState(false);
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState(false);

  const dashboardClick = () => {
    if (!dashboard) {
      setDashboard(true);
      setProfile(false);
      setInvoice(false);
      setCustomer(false);
      setTransaction(false);
      setChart(false);
      setPayroll(false);
      setConnected(false);
      setBalance(false);
    }
  };
  const profileClick = () => {
    if (!profile) {
      setProfile(true);
      setDashboard(false);
      setInvoice(false);
      setCustomer(false);
      setTransaction(false);
      setChart(false);
      setPayroll(false);
      setConnected(false);
      setBalance(false);
    }
  };
  const invoiceClick = () => {
    if (!invoice) {
      setInvoice(true);
      setDashboard(false);
      setProfile(false);
      setCustomer(false);
      setTransaction(false);
      setChart(false);
      setPayroll(false);
      setConnected(false);
      setBalance(false);
    }
  };
  const customerClick = () => {
    if (!customer) {
      setCustomer(true);
      setInvoice(false);
      setDashboard(false);
      setProfile(false);
      setTransaction(false);
      setChart(false);
      setPayroll(false);
      setConnected(false);
      setBalance(false);
    }
  };
  const transactionClick = () => {
    if (!transaction) {
      setTransaction(true);
      setCustomer(false);
      setInvoice(false);
      setDashboard(false);
      setProfile(false);
      setChart(false);
      setPayroll(false);
      setConnected(false);
      setBalance(false);
    }
  };
  const chartClick = () => {
    if (!chart) {
      setChart(true);
      setTransaction(false);
      setCustomer(false);
      setInvoice(false);
      setDashboard(false);
      setProfile(false);
      setPayroll(false);
      setConnected(false);
      setBalance(false);
    }
  };
  const payClick = () => {
    if (!payroll) {
      setPayroll(true);
      setChart(false);
      setTransaction(false);
      setCustomer(false);
      setInvoice(false);
      setDashboard(false);
      setProfile(false);
      setConnected(false);
      setBalance(false);
    }
  };
  const connectClick = () => {
    if (!connected) {
      setConnected(true);
      setPayroll(false);
      setChart(false);
      setTransaction(false);
      setCustomer(false);
      setInvoice(false);
      setDashboard(false);
      setProfile(false);
      setBalance(false);
    }
  };
  const balanceClick = () => {
    if (!balance) {
      setBalance(true);
      setConnected(false);
      setPayroll(false);
      setChart(false);
      setTransaction(false);
      setCustomer(false);
      setInvoice(false);
      setDashboard(false);
      setProfile(false);
    }
  };

  return (
    <div className="sideB">
      <div className="logo">
        <img src="assets/img/Azabox Logo.png" alt="" />
      </div>
      <div
        className={dashboard ? "active" : "dashboard"}
        onClick={dashboardClick}
      >
        <i className="bi bi-grid" onClick={() => setSideMenu(!sideMenu)}></i>
        <div className="text" onClick={() => setSideMenu(!sideMenu)}>
          Dashboard
        </div>
      </div>
      <div className={profile ? "active" : "dashboard"} onClick={profileClick}>
        <i
          className="bi bi-person-circle"
          onClick={() => setSideMenu(!sideMenu)}
        ></i>
        <div className="text" onClick={() => setSideMenu(!sideMenu)}>
          Complete Profile
        </div>
      </div>
      <p>Invoices</p>
      <div className={invoice ? "active" : "dashboard"} onClick={invoiceClick}>
        <img
          src="assets/img/note-favorite.png"
          alt=""
          onClick={() => setSideMenu(!sideMenu)}
        />
        <div className="text" onClick={() => setSideMenu(!sideMenu)}>
          My Invoices
        </div>
      </div>
      <div
        className={customer ? "active" : "dashboard"}
        onClick={customerClick}
      >
        <i className="bi bi-people" onClick={() => setSideMenu(!sideMenu)}></i>
        <div className="text" onClick={() => setSideMenu(!sideMenu)}>
          My Customers
        </div>
      </div>
      <p>Accounting</p>
      <div
        className={transaction ? "active" : "dashboard"}
        onClick={transactionClick}
      >
        <img
          src="assets/img/card-edit.png"
          alt=""
          onClick={() => setSideMenu(!sideMenu)}
        />
        <div className="text" onClick={() => setSideMenu(!sideMenu)}>
          Transactions
        </div>
      </div>
      <div className={chart ? "active" : "dashboard"} onClick={chartClick}>
        <img
          src="assets/img/cards.png"
          alt=""
          onClick={() => setSideMenu(!sideMenu)}
        />
        <div className="text" onClick={() => setSideMenu(!sideMenu)}>
          Charts of Account
        </div>
      </div>
      <p>Payroll</p>
      <div className={payroll ? "active" : "dashboard"} onClick={payClick}>
        <img
          src="assets/img/receipt-2.png"
          alt=""
          onClick={() => setSideMenu(!sideMenu)}
        />
        <div className="text" onClick={() => setSideMenu(!sideMenu)}>
          Run Payroll
        </div>
      </div>
      <p>Banks</p>
      <div
        className={connected ? "active" : "dashboard"}
        onClick={connectClick}
      >
        <img
          src="assets/img/receipt-edit.png"
          alt=""
          onClick={() => setSideMenu(!sideMenu)}
        />
        <div className="text" onClick={() => setSideMenu(!sideMenu)}>
          Connected Accounts
        </div>
      </div>
      <p>Chequebooks</p>
      <div className={balance ? "active" : "dashboard"} onClick={balanceClick}>
        <img
          src="assets/img/bank.png"
          alt=""
          onClick={() => setSideMenu(!sideMenu)}
        />
        <div className="text" onClick={() => setSideMenu(!sideMenu)}>
          Balance Chequebooks
        </div>
      </div>
      <p>Settings</p>
      <div className="dashboard">
        <i className="bi bi-gear" onClick={() => setSideMenu(!sideMenu)}></i>
        <div className="text" onClick={() => setSideMenu(!sideMenu)}>
          Settings
        </div>
      </div>
      <p className="switch" onClick={() => setSideMenu(!sideMenu)}>
        Switch account
      </p>
    </div>
  );
};

export default Sidebar;
