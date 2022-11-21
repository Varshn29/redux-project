import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import RouterApp from './router/router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <RouterApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
