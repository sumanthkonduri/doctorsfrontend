import React, { useState, useEffect} from 'react';
import axios from 'axios';


const Doctorr = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    //GET
    const fetchDoctors = async () => {
      try{
        const response = await axios.get('https://backendhospital-ji3g.onrender.com/doctors');
        setDoctors(response.data);

      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  },[]);
  return (
    <div>
      <center>
      <h1>Doctorr</h1>
      {
        doctors.map(doctor => (
          <div key={doctor.id}>
            <p><strong>{doctor.name}</strong> - {doctor.specialization}</p>
            <p>Doctor ID : {doctor.id}</p>

          </div>
        ))
      }
     </center>
    </div>
  )
}

export default Doctorr;
