import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router/index.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
