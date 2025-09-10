import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const View = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const fetchstud = async () => {
            try {
                const res = await axios.get("http://localhost:5000/students/view");
                setStudents(res.data);
                console.log(res.data);
            } catch (err) {
                console.error("Error:", err.response?.data || err.message);
            }
        }
        fetchstud();
    }, [])
    return (
    <div>
      {/* <div className='text-center font-bold text-2xl'>View Students</div> */}
      {/* Table */}
      <table className='min-w-full border-collapse border border-gray-300'>
        <thead>
          <tr>
            <th className='border border-gray-300 p-2'>Name</th>
            <th className='border border-gray-300 p-2'>Email</th>
            <th className='border border-gray-300 p-2'>Age</th>
            <th className='border border-gray-300 p-2'>Percentage</th>
          </tr>
        </thead>
        <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-4">No students found.</td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student._id}>
                  <td className='border border-gray-300 p-2'>{student.name}</td>
                  <td className='border border-gray-300 p-2'>{student.email}</td>
                  <td className='border border-gray-300 p-2'>{student.age}</td>
                  <td className='border border-gray-300 p-2'>{student.percentage}%</td>
                  <td className='border border-gray-300 p-2'>
                    <Link to={`/students/update/${student._id}`}>
                      <button className='bg-yellow-500 text-white px-3 py-1 rounded m-3'>Update</button>
                    </Link>
                    
                    <Link to={`/students/delete/${student._id}`}>
                      <button className='bg-red-500 text-white px-2 py-1 rounded'>Delete</button>
                    </Link>
                  </td>
                </tr>
              ))
            )}
        </tbody>
      </table>
    </div>
  )
}

export default View
