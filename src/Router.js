import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import List from './features/List/List';
import Detail from './features/Detail/Detail';
import Write from './features/Write/Write';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
