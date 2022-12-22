import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Page1 } from './pages/page1/Page1'
import { Page2 } from './pages/page2/Page2'
import { Page3 } from './pages/page3/Page3'
import { FormProvider } from './contexts/FormContext'

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;
