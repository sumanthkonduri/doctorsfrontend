import React, {useState}from 'react';
import axios from 'axios';

const PatientForm = () => {
  const [patientData,setPatientData]=useState({
    name:"",
    weight:"",
    gender:"",
    age:"",
    disease:"",
    doctorid: null,

  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({...patientData,[name]: value });
  };
  const handleSubmit = async(e)=> {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://backendhospital-ji3g.onrender.com/patients',patientData);
      console.log('Patient created:',response.data);
    } catch (error) {
      console.error('Error creating patient:',error)
    }
  };
  return (
    <center>
    <div>
      <h1>Create New Patient</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={patientData.name} onChange={handleChange} required/>
        </label>
        <br/>
        <label>
          Weight:
          <input type="number" name="weight" value={patientData.weight} onChange={handleChange} required/>
        </label>
        <br/>
        <label>
          Gender:
          <input type="text" name="gender" value={patientData.gender} onChange={handleChange} required/>
        </label>
        <br/>
        <label>
          Age:
          <input type="number" name="age" value={patientData.age} onChange={handleChange} required/>
        </label>
        <br/>
        <label>
          Disease:
          <input type="text" name="disease" value={patientData.disease} onChange={handleChange} required/>
        </label>
        <br/>
        <label>
          Doctor ID:
          <input type="text" name="doctor id" value={patientData.doctorid} onChange={handleChange} required/>
        </label>
        <br/>
        <button type="submit">Create Patient</button>
      </form>
      
    </div>
    </center>
  )
}

export default PatientForm
