import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import AddItems from './pages/AddItems/AddItems';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './shared/RequireAuth/RequireAuth';
import ManageItems from './pages/ManageItems/ManageItems';
import InventoryItem from './pages/InventoryItem/InventoryItem';
import MYItems from './pages/MyItems/MyItems'

function App() {
  return (
    <div className="App" id='main'>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addItems" element={<RequireAuth>
          <AddItems />
        </RequireAuth>} />
        <Route path="/inventory/:itemId" element={<RequireAuth>
          <InventoryItem />
        </RequireAuth>} />
        <Route path="/manageInventory" element={<RequireAuth>
          <ManageItems />
        </RequireAuth>} />
        <Route path="/myItems" element={<RequireAuth>
          <MYItems />
        </RequireAuth>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
