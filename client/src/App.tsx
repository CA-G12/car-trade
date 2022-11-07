import { Outlet } from 'react-router-dom';
import Footer from './components/footer/footer';
import NavBar from './components/NavBar';
import UserInfoProvider from './context';

function App() {
  return (
    <div>
      <UserInfoProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </UserInfoProvider>
    </div>
  );
}

export default App;
