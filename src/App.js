import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home";
import DataForm from "./components/dataForm";
import Programs from "./components/programs";
import Program from "./components/program";
import SharedLayout from "./sharedLayout";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/uni-quest' element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path='data-form' element={<DataForm />} />
          <Route path='programs' element={<Programs />} />
          <Route path='program' element={<Program />} />
          {/* <Route component={NotFound} /> */}
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
