import React, { useState } from "react";

const DynamicForm = () => {
  const [fields, setFields] = useState([
    { id: "name", label: "Name", value: "", required: true },
    { id: "email", label: "Email", value: "", required: true },
  ]);

 
  const addField = () => {
    setFields((prevFields) => [
      ...prevFields,
      { id: Date.now(), label: `Field ${prevFields.length + 1}`, value: "", required: false },
    ]);
  };

  const removeField = (id) => {
    setFields((prevFields) => prevFields.filter((field) => field.id !== id));
  };

  const handleInputChange = (id, newValue) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, value: newValue } : field
      )
    );
  };

  // Handle label changes
  const handleLabelChange = (id, newLabel) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, label: newLabel } : field
      )
    );
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const hasEmptyRequiredFields = fields.some(
      (field) => field.required && !field.value.trim()
    );

    if (hasEmptyRequiredFields) {
      alert("Please fill in all required fields (Name and Email).");
      return;
    }

    console.log("Form Data:", fields);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Dynamic Form Builder</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={field.id} style={{ marginBottom: "15px" }}>
            <input
              type="text"
              value={field.label}
              onChange={(e) =>
                !field.required && handleLabelChange(field.id, e.target.value)
              }
              placeholder={`Label for Field ${index + 1}`}
              style={{ marginRight: "10px", padding: "10px" }}
              readOnly={field.required} 
            />
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              placeholder={field.label}
              style={{ marginRight: "10px", padding: "10px" }}
            />
            {!field.required && (
              <button
                type="button"
                onClick={() => removeField(field.id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  padding: "10px",
                }}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addField}
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginRight: "10px",
            padding: "10px",
          }}
        >
          Add Field
        </button>
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
            padding: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;