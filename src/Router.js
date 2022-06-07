import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Schema from './pages/Schema';
import TermsUse from './pages/TermsUse';
import Computers from './pages/Computers';
import Navbar from './components/Navbar';
import ComputerDetails from './pages/ComputerDetails';


export default function Router() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Computers />} />
          <Route path='/normas-uso' element={<TermsUse />} />
          <Route path='/plano' element={<Schema />} />
          <Route path='/computadoras/:id' element={<ComputerDetails />} />
          <Route path='/*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}