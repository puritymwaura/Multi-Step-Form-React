import React from "react";

function FinishingUp({ formData, setFormData }) {
  return (
    <div className="finishing-up-container">
      <input
        type="text"
        placeholder="Arcade monthly..."
        value={formData.arcade}
        onChange={(e) => {
          setFormData({ ...formData, arcade: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Online service ..."
        value={formData.onlineService}
        onChange={(e) => {
          setFormData({ ...formData, onlineService: e.target.value });
        }}
      />
       <input
        type="text"
        placeholder="larger storage ..."
        value={formData.largerStorage}
        onChange={(e) => {
          setFormData({ ...formData, largerStorage: e.target.value });
        }}
      />
    </div>
  );
  

}

export default FinishingUp;
