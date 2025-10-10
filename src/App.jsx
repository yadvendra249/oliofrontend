import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import BlogDetail from './components/BlogDetail';
import './App.css';
import Login from './login';
import Register from './registration';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BlogDetail from "./BlogDetail";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/blog/:id" element={<BlogDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
