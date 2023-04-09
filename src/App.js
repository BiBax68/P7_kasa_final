import '@/App.css';
import Router from '@/pages/Public/PublicRouter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Router />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
