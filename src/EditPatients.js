import React,{useState,useEffect }from 'react';
import axios from 'axios';

const EditPatients = ({ patientId,onClose,onUpdate }) => {
  const [patientData,setPatientData]=useState({});
  useEffect(() =>{
    //get
    const fetchPatientData = async () => {
      try{
        const response = await axios.get(`https://backendhospital-ji3g.onrender.com/patients/${patientId}`);
        setPatientData(response.data);
      }catch (error) {
        console.error('Error fetching patient data for editing:',error);
      }
    }
    fetchPatientData();
  })
  const handleUpdate =async () => {
    try{
      await axios.put(`https://backendhospital-ji3g.onrender.com/patients/${patientId}`,patientData);
      onClose();
      onUpdate();

    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };
  const handleChange = (e) =>{
    const { name, value }= e.target;
    setPatientData({...patientData,[name]: value});
  };

  return (
    <div>
      <h2>Edit Patient</h2>
      <label> Name: </label>
          <input type="text" name="name" value={patientData.name|| ''} onChange={handleChange} required/>
       
        
        <label>Weight:</label>
          <input type="number" name="weight" value={patientData.weight || ''} onChange={handleChange} required/>
        
        
        <label>Gender: </label>
          <input type="text" name="gender" value={patientData.gender || ''} onChange={handleChange} required/>
       
        
        <label> Age: </label>
          <input type="number" name="age" value={patientData.age || ''} onChange={handleChange} required/>
        
        
        <label> Disease:</label>
          <input type="text" name="disease" value={patientData.disease || ''} onChange={handleChange} required/>
        
        
        {/* <label> Doctor ID:</label>
          <input type="text" name="doctor id" value={patientData.doctorid} onChange={handleChange} required/> */}

          <button onClick={handleUpdate}>Update</button>
          <button onClick={onClose}>cancel</button>
        
       
      
    </div>
  )
}

export default EditPatients
