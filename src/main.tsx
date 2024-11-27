import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import ListUser from './pages/listuser.tsx';
import Createuser from './pages/Createuser.tsx';
import Header from './components/header.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/create" element={<Createuser />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
