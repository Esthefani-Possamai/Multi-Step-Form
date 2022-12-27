import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Page1 } from './pages/page1/Page1'
import { Page2 } from './pages/page2/Page2'
import { Page3 } from './pages/page3/Page3'
import { Page4 } from './pages/page4/Page4'
import { FormProvider } from './contexts/FormContext'
import { Footer } from './components/theme/styles'

function App() {
  return (
    <div>
      <FormProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
            <Route path='/page3' element={<Page3 />} />
            <Route path='/page4' element={<Page4 />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
      <Footer>Desenvolvido com ❤️ por Esthéfani Possamai</Footer>
    </div>
  );
}

export default App;
