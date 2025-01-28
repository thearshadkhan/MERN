import React, { useState } from "react";

const EditableList = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Item 1", description: "Description 1" },
    { id: 2, title: "Item 2", description: "Description 2" },
  ]);

  // Function to handle edits
  const handleEdit = (id, field, value) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Function to add a new item
  const addItem = () => {
    const newItem = {
      id: Date.now(),
      title: "New Item",
      description: "New Description",
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Function to delete an item
  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col p-4 max-w-2xl mx-auto">
      <h1 className="mt-10 text-2xl font-bold text-center mb-4">Editable List</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow-md bg-white flex flex-col space-y-2"
          >
            <input
              type="text"
              value={item.title}
              onChange={(e) => handleEdit(item.id, "title", e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Title"
            />
            <textarea
              value={item.description}
              onChange={(e) =>
                handleEdit(item.id, "description", e.target.value)
              }
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Description"
            />
            <button
              onClick={() => deleteItem(item.id)}
              className="text-red-500 hover:underline self-center"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={addItem}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition self-center"
      >
        Add Item
      </button>
    </div>
  );
};

export default EditableList;
