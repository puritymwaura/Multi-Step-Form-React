// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// function PersonalInfo({ formData, setFormData }) {
//   const [errors, setErrors] = useState({ name: '', email: '', phoneNumber: '' });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });

//     // validation logic for each input field
//     switch (name) {
//       case 'name':
//         setErrors({ ...errors, name: value.length < 3 ? 'Name must be at least 3 characters long' : '' });
//         break;
//       case 'email':
//         setErrors({ ...errors, email: !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '' });
//         break;
//       case 'phoneNumber':
//         setErrors({ ...errors, phoneNumber: !/^\d{10}$/.test(value) ? 'Phone number must be 10 digits long' : '' });
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="personal-info-container">
//       {/* display error messages alongside the input fields */}
//       {errors.name && <span className="error-message">{errors.name}</span>}
//       <input type="text" placeholder=" Name..." name="name" value={formData.name} onChange={handleInputChange} />

//       {errors.email && <span className="error-message">{errors.email}</span>}
//       <input type="text" placeholder="email..." name="email" value={formData.email} onChange={handleInputChange} />

//       {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
//       <input type="text" placeholder="Phonenumber..." name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
//     </div>
//   );
// }

// export default PersonalInfo;

import React from "react";

function PersonalInfo({ formData, setFormData, validationErrors }) {
  console.log(validationErrors);
  return (
    <div className="personal-info-container">
      {validationErrors.name.legnth > 0 && (
        <span className="error-message"></span>
      )}
      <input
        // className="error-input"
        type="text"
        placeholder=" Name..."
        value={formData.Name}
        onChange={(e) => {
          console.log("name", e.target.value);
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="email..."
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Phonenumber..."
        value={formData.Phonenumber}
        onChange={(e) => {
          setFormData({ ...formData, Phonenumber: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;
