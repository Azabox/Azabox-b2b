import "./completeProfile.scss";
import { useState } from "react";
import Account from "../../components/account/Account";
import Contact from "../../components/contact/Contact";
import Profile from "../../components/profile/Profile";

const CompleteProfile = () => {
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

  return (
    <div className="complete">
      <div className="container">
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

export default CompleteProfile;
