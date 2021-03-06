import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter/AppRouter";

class App extends Component {
  state = {
    data: null
  };
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header />
          <main>
            <AppRouter />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
