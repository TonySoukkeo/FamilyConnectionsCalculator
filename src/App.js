import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import Calculator from "./components/Calculator";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
