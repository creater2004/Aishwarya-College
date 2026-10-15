import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./screens/Dashboard";
import StudentScreen from "./screens/StudentScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="student" element={<StudentScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
