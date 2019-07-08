import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import * as Data from "./data/data.json";

import Header from "./components/header";
import ListLayout from "./components/listLayout";
import PostLayout from "./components/postLayout";
import Footer from "./components/footer";

import Wrapper from "./sharedComponents/wrapper";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Wrapper>
          <Route path="/" exact render={() => <ListLayout posts={Data} />} />
          <Route
            path="/post/:id?"
            render={routeProps => <PostLayout posts={Data} {...routeProps} />}
          />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
