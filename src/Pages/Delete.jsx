import React from 'react'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Delete = () => {
    const id = useParams().id;
    const navigate=useNavigate();
    console.log(id);
    const handlesubmit=async()=>{
        try{
            const res=await axios.delete(`http://localhost:5000/students/delete/${id}`);
            
            console.log(res.data);
             alert("Data Deleted Successfully");
             navigate("/view");
        }
        catch(err){
            console.error("Error:", err.response?.data || err.message);
            alert("Error: " + (err.response?.data?.message || err.message));
        }
    }
    return (
        <div>
            <h2 className='font-bold text-2xl m-4'>Delete Student</h2>
            <p>Are you sure you want to delete this student?</p>
            <div className='flex space-x-4 m-3'>
                <button onClick={handlesubmit} className='bg-red-500 text-white px-4 py-2 rounded'>Delete</button>
                <Link to="/view"><button className='bg-gray-300 text-black px-4 py-2 rounded font-serif'>Cancel</button></Link>
            </div>
        </div>
    )
}


export default Delete
