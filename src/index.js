import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import theme from "./Utils/theme";
import GloblaStyles from "./Utils/global";

import store from "./store";
import Loader from "./components/Ui/Loader/Loader";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const root = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <Wrapper>
        <Loader />
      </Wrapper>

      <GloblaStyles />
    </>
  </ThemeProvider>,
  root
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            <App />
            <GloblaStyles />
          </>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,

    root
  );
});
