import React from "react";
import {Provider} from "react-redux"; //index.js말고 여기서 해줘도됨!
import store from "./store.js";
import EmployeeSearch from "./EmployeeSearch.js";
import CustomerSearch from "./CustomerSearch.js";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <EmployeeSearch />
      <CustomerSearch />
    </div>
    </Provider>
  );
}

export default App;
