import { useState } from "react";
import { useService } from "../context/ServiceContext";

function AddService({ closeForm }) {
  const { addService } = useService();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    duration: "",
    image: "",
    description: ""
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    addService(form);
    closeForm();
  };

  return (
    <div className="modal">
      <form className="service-form" onSubmit={handleSubmit}>
        <h3>Add Service</h3>

        <div className="form-grid">
          <input name="name" placeholder="Name" onChange={handleChange} required />
          <input name="price" placeholder="Price" onChange={handleChange} required />

          <select name="category" onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="IT Services">IT Services</option>
          </select>

          <input name="duration" placeholder="Duration" onChange={handleChange} />
          <input name="image" placeholder="Image URL" onChange={handleChange} />
        </div>

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <div className="service-actions">
          <button type="submit" className="edit-btn">Save</button>
          <button type="button" className="delete-btn" onClick={closeForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddService;
