import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
      </Switch>
    </Router>
  );
}

export default App;
