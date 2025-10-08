import React from "react";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./redux";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Home />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
