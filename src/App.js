import logo from './logo.svg';
// import './App.css';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './index.css'
import Main from './components/main/Main';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      {/* <Link to={'header'}><h1>hader</h1></Link> */}
     <Header/>
     <Main/>
      <Routes>
        <Route path='header' element={<Header/>}></Route>
      </Routes>
      </BrowserRouter>
{/* <h1 className='text-4xl text-fuchsia-600 bg-slate-900'>hfdsfi</h1> */}
   </div>
  )
}

export default App;
