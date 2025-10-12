import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import BlogDetail from './components/BlogDetail';
import './App.css';
import Login from './login';
import Register from './registration';
import ProtectedLayout from './utils/ProtectedLayout';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/blog/:id" element={<RoleRoute element={BlogDetail} allowedRoles={["user", "admin"]} />    } />
        <Route path="/home" element={ <RoleRoute element={Home} allowedRoles={["user", "admin"]} />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;


