import "../styles/App.scss";
import Nav from "../views/Nav.js";
import Register from "../views/Register";
import Login from "../views/Login.js";
import { ToastContainer } from "react-toastify";
import ForgotPass from "./ForgotPass";
import "react-toastify/dist/ReactToastify.css";
import Information from "../components/Information";
import Shopping from "./Shopping";
import DetailItem from "../components/DetaiItem";
import Cart from "./Cart";
import OrderDetail from "../components/OrderDetail";
import CheckOut from "./CheckOut";
import Home from "./Home";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Personal from "./Personal";
import { AuthProvider } from "../stores/AuthContext";
import { IconButton } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";
import SuccessOrder from "./SuccessOrder";
import Footer from "../components/Footer";
import { handleTop } from "../assets/action/Action";

function App() {
  const [isLog, setIsLog] = useState(false);
  const [btn, setbtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setbtn(true);
      } else {
        setbtn(false);
      }
    });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav value={isLog} />
            {btn ? (
              <div
                style={{
                  position: "fixed",
                  right: 30,
                  bottom: 50,
                  background: "red",
                  borderRadius: 30,
                }}
              >
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => handleTop()}
                >
                  <NorthIcon fontSize="inherit" style={{ color: "white" }} />
                </IconButton>
              </div>
            ) : (
              <></>
            )}
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/home" exact>
                <Personal />
              </Route>
              <Route path="/Register">
                <Register />
              </Route>
              <Route path="/Login">
                <Login isLog={isLog} setIsLog={setIsLog} />
              </Route>
              <Route path="/SuccessOrder">
                <SuccessOrder />
              </Route>
              <Route path="/ForgotPass">
                <ForgotPass />
              </Route>
              <Route path="/Info">
                <Information />
              </Route>
              <Route path="/Shopping" exact>
                <Shopping />
              </Route>
              <Route path="/Shopping/:id">
                <DetailItem />
              </Route>

              <Route path="/OrderDetail/:id" component={OrderDetail} />

              <Route path="/Cart">
                <Cart />
              </Route>

              <Route
                path="/Checkout"
                render={(props) => <CheckOut {...props} />}
              />
            </Switch>
          </header>

          {/* foooter */}
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
