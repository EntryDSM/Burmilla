import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

// import Login from "./page/Login";
// import Main from "./page/Main";
// import Applicant from "./page/Applicant";
// import Admission from "./page/Admission";
import CheckToken from "./components/Common/CheckToken";
import { useFooter, useHeader } from "./hooks/default";

function App() {
  const Header = useHeader();
  const Footer = useFooter();
  return (
    <BrowserRouter>
      {Header}
      <Switch>
        {/* <Route exact path="/login" component={() => <Login />} /> */}
        <CheckToken>
          {/* <Route exact path="/" component={() => <Main />} />
          <Route exact path="/applicant" component={() => <Applicant />} />
          <Route exact path="/admission" component={() => <Admission />} /> */}
          <Route component={() => <Redirect to="/" />} />
        </CheckToken>
      </Switch>
      {Footer}
    </BrowserRouter>
  );
}

export default App;
