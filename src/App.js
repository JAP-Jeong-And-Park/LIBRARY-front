import './App.css';
import './cssItems.css'

import { Route,Routes } from 'react-router-dom';

import Main from './main/Main';
import SignIn from './signin/SignIn';
// import SignIn from './signin/testSignIn';
import SignUp from './signup/SignUp';
import NotFound from './notfound/NotFound';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil"

// import {testRecoil} from "./state"

function App() {
  // const [test,setTest] = useRecoilState(testRecoil)
  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/signin/*" element={<SignIn/>}></Route>
      <Route path="/signup/*" element={<SignUp/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
      </Routes>

      {/* {test} */}
    </div>
  );
}

export default App;
