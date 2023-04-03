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
