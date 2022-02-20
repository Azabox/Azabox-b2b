import SignIn from "./pages/sign-in/Sign-in";
import Verify from "./pages/verify/Verify";
import Business from "./pages/business/Business";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Question from "./pages/question/Question";
import Success from "./pages/success/Success";
import ProfileDashboard from "./pages/profileDashboard/ProfileDashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/business">
          <Business />
        </Route>
        <Route path="/verify">
          <Verify />
        </Route>
        <Route path="/question">
          <Question />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/profile-dashboard">
          <ProfileDashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
