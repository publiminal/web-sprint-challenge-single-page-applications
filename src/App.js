import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import OrderForm from "./components/OrderForm";
// import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/pizza/'>
          {/* <MovieCard titlePage={setDocTitle}  /> */}
          <OrderForm />
        </Route>

        <Route path='/'>
          <Home  /* titlePage={setDocTitle} */ ></Home>
        </Route>       
      </Switch>
 

    </>
  );
};
export default App;
