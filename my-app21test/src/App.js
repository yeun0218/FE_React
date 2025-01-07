import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Page from './pages/Page';
//<Route path='/list' element={<List />} />
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/page' element={<Page/>} />
       
      </Routes>
    </div>
  );
}

export default App;
