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
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog from './pages/Blog/Blog'

function App() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setDark(theme)
  }, [])

  return (
    <div className={`App ${dark && 'bg-dark text-light'}`} id='main'>
      <ToastContainer />
      <Header
        dark={dark}
        setDark={setDark}
      />
      <Routes>
        <Route path="/" element={<Home dark={dark} />} />
        <Route path="/home" element={<Home dark={dark} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addItems" element={<RequireAuth>
          <AddItems />
        </RequireAuth>} />
        <Route path="/inventory/:itemId" element={<RequireAuth>
          <InventoryItem />
        </RequireAuth>} />
        <Route path="/manageInventory" element={<RequireAuth>
          <ManageItems dark={dark} />
        </RequireAuth>} />
        <Route path="/myItems" element={<RequireAuth>
          <MYItems dark={dark} />
        </RequireAuth>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
