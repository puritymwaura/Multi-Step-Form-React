import React from "react";

function PickAddOns({ formData, setFormData }) {
  return (
    <div className="pic-add-ons-container">
      <input
        type="text"
        placeholder="Online service..."
        value={formData.onlineService}
        onChange={(event) =>
          setFormData({ ...formData, onlineService: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Larger storage..."
        value={formData.largerStorage}
        onChange={(event) =>
          setFormData({ ...formData, largerStorage: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="...Customize profile"
        value={formData.customizeProfile}
        onChange={(event) =>
          setFormData({ ...formData, customizeProfile: event.target.value })
        }
      />
    </div>
  );
}

export default PickAddOns;