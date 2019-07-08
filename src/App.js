import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import * as Data from "./data/data.json";

import MainNav from "./components/mainNav";
import Header from "./components/header";
import ListLayout from "./components/listLayout";
import PostLayout from "./components/postLayout";
import RandomPostLayout from "./components/randomPost";
import Footer from "./components/footer";

import Wrapper from "./sharedComponents/wrapper";

const routesArray = [
  { linkRoutes: "/", linkName: "Homepage" },
  { linkRoutes: "/random", linkName: "Random" },
  { linkRoutes: "/contact", linkName: "Contact" }
];

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav routes={routesArray} />

        <Header />
        <Wrapper>
          <Route path="/" exact render={() => <ListLayout posts={Data} />} />
          <Route
            path="/post/:id?"
            render={routeProps => <PostLayout posts={Data} {...routeProps} />}
          />
          <Route
            path="/random/"
            render={routeProps => (
              <RandomPostLayout posts={Data} {...routeProps} />
            )}
          />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
