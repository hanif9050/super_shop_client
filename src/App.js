import { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Order from "./Component/Order/Order";
import Admin from "./Component/Admin/Admin";
import Header from "./Component/Header/Header";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import CheckOut from "./Component/CheckOut/CheckOut";
export const userContext = createContext();
export const dataContext = createContext();
function App() {
  const [loggedIn, setLoggedIn] = useState({});
  // const [data, setData] = useState([]);
  return (
    <userContext.Provider value={[loggedIn, setLoggedIn]}>
      {/* <dataContext.Provider value={[data, setData]}> */}
      <Router>
        {/* <h1>Email: {loggedIn.email}</h1> */}
        <div className="App">
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/checkOut/:id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
      {/* </dataContext.Provider> */}
    </userContext.Provider>
  );
}

export default App;
