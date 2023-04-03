import React from "react";

function SelectYourPlan({ formData, setFormData }) {
  return (
    <div className="select-your-plan">
      <input
        type="text"
        placeholder="Arcade..."
        value={formData.arcade}
        onChange={(event) =>
          setFormData({ ...formData, arcade: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Advanced..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, advanced: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Pro..."
        value={formData.pro}
        onChange={(event) =>
          setFormData({ ...formData, pro: event.target.value })
        }
      />
    </div>
  );
}

export default SelectYourPlan;