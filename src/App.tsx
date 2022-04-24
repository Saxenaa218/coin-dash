import React from "react";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./redux";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
