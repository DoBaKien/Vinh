import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./views/App";
import axios from "axios";

axios.defaults.baseURL = "https://kltnhk2023server-production.up.railway.app/";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
