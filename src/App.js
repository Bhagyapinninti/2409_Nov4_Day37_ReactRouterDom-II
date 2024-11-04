import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Menu from './components/Menu';
import Messenger from './components/Messenger';
import Notifications from './components/Notifications';
import Account from './components/Account';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/messenger" element={<Messenger/>}></Route>
        <Route path="/notifications" element={<Notifications/>}></Route>
        <Route path="/account" element={<Account/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
