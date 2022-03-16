import './App.css';
import './cssItems.css'

import { Route,Routes } from 'react-router-dom';

import Main from './main/Main';
import SignIn from './signin/SignIn';
// import SignIn from './signin/testSignIn';
import SignUp from './signup/SignUp';
import NotFound from './notfound/NotFound';
import MyBookCase from './my/MyBookCase';
import Search from './search/Search';
import Recent from './recent/Recent';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil"


function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path='/recent' element={<Recent/>}></Route>
      <Route path="/signin/*" element={<SignIn/>}></Route>
      <Route path="/signup/*" element={<SignUp/>}></Route>
      <Route path="/my/*" element={<MyBookCase/>} />
      <Route path='/search' element={<Search/>}/>
      <Route path="/*" element={<NotFound/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
