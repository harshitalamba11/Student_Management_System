import './App.css'
import Add from './Pages/Add'
import View from './Pages/View'
import Delete from './Pages/Delete'
import Update from './Pages/Update'
import { Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App flex flex-col space-y-4 items-center p-4">
      <h1 className='font-bold text-3xl m-6 text-center'>Students Record</h1>
      
      <div className='m-3 space-x-4'>
        <Link to="/add"><button className='bg-blue-500 text-white px-4 py-2 rounded'>Add Student</button></Link>
        <Link to="/view"><button className='bg-green-500 text-white px-4 py-2 rounded'>View Students</button></Link>
      </div>

      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<View />} />
        <Route path="/students/delete/:id" element={<Delete />} />
        <Route path="/students/update/:id" element={<Update />} />
      </Routes>
    </div>
  )
}

export default App
