import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Projects from "./components/Projects";
import Invoices from "./components/Invoices";
import Reports from "./components/Reports";

ReactDOM.render(
<Router>
  <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/projects" element={<Projects/>}></Route>
    <Route path="/invoices" element={<Invoices/>}></Route>
    <Route path="/reports" element={<Reports/>}></Route>
    
  </Routes>
</Router>
  
,document.getElementById("root")
);
