import express from "express";
import Student from "../Models/Student.js";  // adjust import (named export)

const router = express.Router();

// Create a new student
router.post("/add", async (req, res) => {
    try {
        const { name, email, age, percentage } = req.body;

        const newStudent = new Student({ name, email, age, percentage });
        await newStudent.save();

        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get("/view", async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.delete("/delete/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const delstud=await Student.findByIdAndDelete(id);
        if(!delstud){
            return res.status(404).json({message:"Student not found"});
        }
        res.status(200).json({message:"Student deleted successfully"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});
router.put("/update/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const updatedStudent = await Student.findByIdAndUpdate(
        id,
        req.body,
      { new: true }      // return updated doc
    );
        if(!updatedStudent){
            return res.status(404).json({message:"Student not found"});
        }
        res.status(200).json({message:"Student updated successfully"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
})
export default router;
