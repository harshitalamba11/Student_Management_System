import axios from "axios";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ define all fields you need
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    percentage: ""
  });

  const handleSubmit = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/students/update/${id}`, // or `/students/${id}` depending on backend
        formData
      );

      console.log(res.data);
      alert("Data Updated Successfully!");
      navigate("/view");
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">Update Student</h2>

      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}   //..formdata copies other values except name
        className="border p-2 m-2"
      />

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border p-2 m-2"
      />

      <input
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        className="border p-2 m-2"
      />

      <input
        type="number"
        placeholder="Percentage"
        value={formData.percentage}
        onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
        className="border p-2 m-2"
      />


      <div className="flex space-x-4 mt-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>

        <Link to="/view">
          <button className="bg-gray-300 text-black px-4 py-2 rounded">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Update;
