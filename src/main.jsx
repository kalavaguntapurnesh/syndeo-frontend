import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StrictMode } from 'react'
// import { Provider } from "react-redux";
// import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  // </Provider>
);
