import { useState } from "react";
import Account from "../../components/account/Account";
import Contact from "../../components/contact/Contact";
import Profile from "../../components/profile/Profile";
import Sidebar from "../../components/sidebar/Sidebar";
import Top from "../../components/top/Top";
import "./profileDashboard.scss";

const ProfileDashboard = () => {
  //left side(sidebar)
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

  //right side(profile components)
  const [profileActive, setProfileActive] = useState(true);
  const [contactActive, setContactActive] = useState(false);
  const [accountActive, setAccountActive] = useState(false);
  const [documentActive, setDocumentActive] = useState(false);

  const profileActiveClick = () => {
    if (!profileActive) {
      setProfileActive(true);
      setContactActive(false);
      setAccountActive(false);
      setDocumentActive(false);
    }
  };
  const contactActiveClick = () => {
    if (!contactActive) {
      setProfileActive(false);
      setContactActive(true);
      setAccountActive(false);
      setDocumentActive(false);
    }
  };
  const accountActiveClick = () => {
    if (!accountActive) {
      setProfileActive(false);
      setContactActive(false);
      setAccountActive(true);
      setDocumentActive(false);
    }
  };
  const documentActiveClick = () => {
    if (!documentActive) {
      setProfileActive(false);
      setContactActive(false);
      setAccountActive(false);
      setDocumentActive(true);
    }
  };

  //sideMenu for mobile
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="profileDashboard">
      <div className="left">
        <div className="logo">
          <img src="assets/img/Azabox Logo.png" alt="" />
        </div>
        <div
          className={dashboard ? "active" : "dashboard"}
          onClick={dashboardClick}
        >
          <i className="bi bi-grid"></i>
          <div className="text">Dashboard</div>
        </div>
        <div
          className={profile ? "active" : "dashboard"}
          onClick={profileClick}
        >
          <i className="bi bi-person-circle"></i>
          <div className="text">Complete Profile</div>
        </div>
        <p>Invoices</p>
        <div
          className={invoice ? "active" : "dashboard"}
          onClick={invoiceClick}
        >
          <img src="assets/img/note-favorite.png" alt="" />
          <div className="text">My Invoices</div>
        </div>
        <div
          className={customer ? "active" : "dashboard"}
          onClick={customerClick}
        >
          <i className="bi bi-people"></i>
          <div className="text">My Customers</div>
        </div>
        <p>Accounting</p>
        <div
          className={transaction ? "active" : "dashboard"}
          onClick={transactionClick}
        >
          <img src="assets/img/card-edit.png" alt="" />
          <div className="text">Transactions</div>
        </div>
        <div className={chart ? "active" : "dashboard"} onClick={chartClick}>
          <img src="assets/img/cards.png" alt="" />
          <div className="text">Charts of Account</div>
        </div>
        <p>Payroll</p>
        <div className={payroll ? "active" : "dashboard"} onClick={payClick}>
          <img src="assets/img/receipt-2.png" alt="" />
          <div className="text">Run Payroll</div>
        </div>
        <p>Banks</p>
        <div
          className={connected ? "active" : "dashboard"}
          onClick={connectClick}
        >
          <img src="assets/img/receipt-edit.png" alt="" />
          <div className="text">Connected Accounts</div>
        </div>
        <p>Chequebooks</p>
        <div
          className={balance ? "active" : "dashboard"}
          onClick={balanceClick}
        >
          <img src="assets/img/bank.png" alt="" />
          <div className="text">Balance Chequebooks</div>
        </div>
        <p>Settings</p>
        <div className="dashboard">
          <i className="bi bi-gear"></i>
          <div className="text">Settings</div>
        </div>
        <p className="switch">Switch account</p>
      </div>

      <div className="right">
        <Top />
        <div className="sideIcon" onClick={() => setSideMenu(!sideMenu)}>
          <i
            className={
              sideMenu ? "bi bi-caret-down-fill" : "bi bi-caret-up-fill"
            }
          ></i>
        </div>
        <div className={"sideMenu " + (sideMenu && "active")}>
          <Sidebar sideMenu={sideMenu} setSideMenu={setSideMenu} />
        </div>
        <div className="content">
          <div className="name">Hello Martins</div>
          <p>Complete registration to use Azabox exclusive features</p>
          <div className="details">
            <div className="leftD">
              <div className="items" onClick={profileActiveClick}>
                <img
                  src={
                    profileActive
                      ? "assets/img/active.png"
                      : "assets/img/inactive.png"
                  }
                  alt=""
                />
                <div className={profileActive ? "active" : "txt"}>Profile</div>
              </div>
              <div className="items" onClick={contactActiveClick}>
                <img
                  src={
                    contactActive
                      ? "assets/img/active.png"
                      : "assets/img/inactive.png"
                  }
                  alt=""
                />
                <div className={contactActive ? "active" : "txt"}>Contacts</div>
              </div>
              <div className="items" onClick={accountActiveClick}>
                <img
                  src={
                    accountActive
                      ? "assets/img/active.png"
                      : "assets/img/inactive.png"
                  }
                  alt=""
                />
                <div className={accountActive ? "active" : "txt"}>Account</div>
              </div>
              <div className="items" onClick={documentActiveClick}>
                <img
                  src={
                    documentActive
                      ? "assets/img/active.png"
                      : "assets/img/inactive.png"
                  }
                  alt=""
                />
                <div className={documentActive ? "active" : "txt"}>
                  Documents
                </div>
              </div>
            </div>
            <div className="rightD">
              <div className={profileActive ? "container" : "inactive"}>
                <Profile
                  setContactActive={setContactActive}
                  setProfileActive={setProfileActive}
                />
              </div>
              <div className={contactActive ? "container" : "inactive"}>
                <Contact
                  setAccountActive={setAccountActive}
                  setContactActive={setContactActive}
                />
              </div>
              <div className={accountActive ? "container" : "inactive"}>
                <Account
                  setProfileActive={setProfileActive}
                  setAccountActive={setAccountActive}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
