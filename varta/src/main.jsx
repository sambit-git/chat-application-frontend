import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RouterMain from "./routes/RouterMain.jsx";
import { Provider } from "react-redux";
import store from "./redux-store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterMain />
    </Provider>
  </React.StrictMode>
);
