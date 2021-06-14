import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

// import Login from "./page/Login";
// import Applicant from "./page/Applicant";
// import Message from "./page/Message";
import { MainContainer, ScheduleContainer } from "./containers";
import CheckToken from "./components/Common/CheckToken";
import { useHeader } from "./hooks/default";

function App() {
  const Header = useHeader();
  return (
    <BrowserRouter>
      {Header}
      <Switch>
        {/* <Route exact path="/login" component={() => <Login />} /> */}
        <CheckToken>
          <Route exact path="/" component={MainContainer} />
          {/*<Route exact path="/applicant" component={MainContainer} />*/}
          <Route exact path="/schedule" component={ScheduleContainer} />
          {/*<Route exact path="/message" component={MainContainer} />*/}
          <Route component={() => <Redirect to="/" />} />
        </CheckToken>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
