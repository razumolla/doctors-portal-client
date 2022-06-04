import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<RequireAuth> <Appointment /> </RequireAuth>} />

        <Route path="/dashboard" element={<RequireAuth>  <Dashboard /> </RequireAuth>} >
          <Route index element={<MyAppointment />} />
          <Route path="review" element={<MyReview />} />
          <Route path="history" element={<MyHistory />} />
          <Route path="users" element={<RequireAdmin> <Users /> </RequireAdmin>} />
          <Route path="addDoctor" element={<RequireAdmin> <AddDoctor /> </RequireAdmin>} />
          <Route path="manageDoctor" element={<RequireAdmin> <ManageDoctor /> </RequireAdmin>} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
