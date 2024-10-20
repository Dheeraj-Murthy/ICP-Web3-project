import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Dash from './Components/Dash';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dash" element={<Dash />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
