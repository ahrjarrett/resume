import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { GlobalStyles } from "styled/GlobalStyles"
import { theme } from "styled/theme"
import * as S from "styled"

import Print from "components/Print"
import Paper from "components/Paper"

import * as serviceWorker from "serviceWorker"

ReactDOM.render(
  <Router>
    <Switch>
      <ThemeProvider theme={theme}>
        <S.Styled>
          <GlobalStyles />
          <Route exact path="/" component={Paper} />
          <Route path="/make-pdf" render={() => <Print makePdf={true} />} />
        </S.Styled>
      </ThemeProvider>
    </Switch>
  </Router>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
