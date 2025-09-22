import React from 'react'
import axios from 'axios';
import { useState } from 'react';
// import express from 'express';
const Add = () => {
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[age,setage]=useState("");
  const[percentage,setpercentage]=useState("");
  const handlesubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post("http://localhost:5000/students/add",{
        name,email,age,percentage
      });
      console.log(res.data);
       alert("Data Added Successfully");
       setname("");
       setemail("");
       setage("");
       setpercentage("");
    }catch(err){
      console.error("Error:", err.response?.data || err.message);
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  }
  return (
    <div className='flex flex-col space-y-4 border border-gray-400 p-4 rounded w-1/3'>
      <form className='m-3 bg-slate-500'>
        <div className='m-2 p-2'>
        <label  className='m-3 text-xl font-semibold mr-3'>Name</label>
        <input className='border border-gray-200 p-1 rounded outline-none' type="text" placeholder='Enter the name' value={name} onChange={(e)=>{
          setname(e.target.value)
        }} required></input>
        </div>
        <div className='m-2 p-2'>
        <label className='m-3 text-xl font-semibold mr-3'>Email</label>
        <input className='border border-gray-200 p-1 rounded outline-none' type="email" placeholder='Enter the email' value={email} onChange={(e)=>{
          setemail(e.target.value)
        }} required></input>
        </div>
        <div className='m-2 p-2'>
        <label className='m-3 text-xl font-semibold mr-3'>Age</label>
        <input className='border border-gray-200 p-1 rounded outline-none' type="number" placeholder="Age" value={age} onChange={(e)=>{
          setage(e.target.value)
        }}></input>
        </div>
        <div className='m-2 p-2'>
        <label className='m-3 text-xl font-semibold mr-3'>Percentage</label>
        <input className='border border-gray-200 p-1 rounded outline-none' type="number" placeholder='Percentage' value={percentage} onChange={(e)=>{
          setpercentage(e.target.value)
        }} required></input>
        </div>
        
        <div className='m-2 p-2 flex justify-center'>
        <button type='submit' className="bg-blue-500 text-white flex flex-center px-4 py-2 rounded" onClick={handlesubmit}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Add
