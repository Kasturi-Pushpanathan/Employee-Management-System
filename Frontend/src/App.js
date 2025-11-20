import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/noMatch/NoMatch';
import Employee from './pages/employee/PostUser';
import UpdateUser from './pages/employee/UpdateUser';

function App() {
  return (
    <>
      <Header />
      <h1 className="text-center">Welcome to Employee Management System</h1>
     <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NoMatch />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/update/:id" element={<UpdateUser />} />
     </Routes>
    </>
  );
}

export default App;
