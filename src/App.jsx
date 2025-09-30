import './App.css';
import './style.css';
import Navbar from './Navbar';
import AddDrop from './pages/AddDrop';
import CourseCatalog from './pages/CourseCatalog';
import CreateDelete from './pages/CreateDelete';
import CurrentSchedule from './pages/CurrentSchedule';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<CourseCatalog />} /> {/* Home page */}
          <Route path="/schedule" element={<CurrentSchedule />} />
          <Route path="/add-drop" element={<AddDrop />} />
          <Route path="/create-delete" element={<CreateDelete />} />
          <Route path="/catalog" element={<CourseCatalog />} />
        </Routes>
      </div>
    </>
  )
}

export default App;