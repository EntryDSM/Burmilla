import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import RootRouter from "./route";
import { Provider } from "react-redux";
import { store } from "./data/modules/store";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RootRouter />
    </Provider>
  );
};

export default App;
