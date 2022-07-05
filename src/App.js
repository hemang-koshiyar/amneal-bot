import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Page from "./pages/Page";

const App = () => {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Page />}></Route>
        <Route path="/page/:botId" element={<Page />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
