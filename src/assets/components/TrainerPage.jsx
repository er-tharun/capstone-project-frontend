import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TrainerPage.css';
const baseurl = 'http://localhost:5000';
    
function TrainerPage() {
  const [trainers, setTrainers] = useState([]);
  const [addForm, setAddForm] = useState(false);

  useEffect(() => {
    getTrainerData();
  }, []);

  const getTrainerData = async () => {
    try {
      const res = await axios.get(`${baseurl}/trainer`);
      const data = await res.json();
      setTrainers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTrainerData = async (obj) => {
    try {
      const res = await axios.post(`${baseurl}/trainer/add`, obj);
      const res2 = await res.json();
      alert('Trainer Added Successfully.');
      getTrainerData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTrainerData = async (id) => {
    try {
      const res = await axios.delete(`${baseurl}/trainer/delete/${id}`);
      alert('Trainer data Deleted Successfully');
      getTrainerData();
    } catch (error) {
      console.log('Error While deleting Trainer');
    }
  };

  const handleAddForm = () => {
    setAddForm(!addForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const image = document.getElementById('image').value;
    const price = document.getElementById('price').value;
    const specialization = document.getElementById('specialisation').value;
    const obj = {
      name,
      age,
      gender,
      image,
      price,
      specialization: specialization.split(','),
    };
    addTrainerData(obj);
    setAddForm(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-3xl text-center">All Trainers</h1>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddForm}
      >
        Add Trainer
      </button>
      {addForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Enter Trainer Name"
            required
            className="block w-full p-2 pl-10 text-sm text-gray-700"
          />
          <br />
          <input
            type="text"
            id="age"
            placeholder="Enter Age"
            required
            className="block w-full p-2 pl-10 text-sm text-gray-700"
          />
          <br />
          <input
            type="text"
            id="gender"
            placeholder="Enter Gender"
            required
            className="block w-full p-2 pl-10 text-sm text-gray-700"
          />
          <br />
          <input
            type="url"
            id="image"
            placeholder="Enter Image Address"
            required
            className="block w-full p-2 pl-10 text-sm text-gray-700"
          />
          <br />
          <input
            type="number"
            id="price"
            placeholder="Enter Price of Trainer"
            required
            className="block w-full p-2 pl-10 text-sm text-gray-700"
          />
          <br />
          <input
            type="text"
            id="specialisation"
            placeholder="Enter Trainer Specialization"
            required
            className="block w-full p-2 pl-10 text-sm text-gray-700"
          />
          <br />
          <input
            type="submit"
            value="Submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          />
        </form>
      )}
      <div className="flex flex-wrap justify-center">
        {trainers.map((trainer) => (
          <div key={trainer._id} className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <img
              src={trainer.image}
              alt="trainer"
              className="w-full h-48 object-cover rounded"
            />
            <div className="p-4">
              <h2 className="text-lg">{trainer.name}</h2>
              <h3>Age: {trainer.age}</h3>
              <h3>Gender: {trainer.gender}</h3>
              <h4>Specialization: {trainer.specialization.join(', ')}</h4>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => deleteTrainerData(trainer._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainerPage;