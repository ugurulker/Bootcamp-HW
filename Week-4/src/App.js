import React from "react";
import "./App.css";
import SıgnIn from "./Components/SıgnIn";
import SignUp from "./Components/SignUp";
import { Routes, Route } from 'react-router-dom';
import NotFound from "./Components/NotFound";
import TodoForm from "./Components/TodoForm";
import EditCategory from "./Components/EditCategory";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SıgnIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<TodoForm />} />
        <Route path="/editcategory" element={<EditCategory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
