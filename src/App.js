import './App.css';
import Login from './Component/Login'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import PdfViewer from './Component/PdfViewer';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/PdfViewer" element={<PdfViewer />}/>
      </Routes>
    </div>
  );
}

export default App;
          {/* <Route path="*" element={<NoMatch />} /> */}
