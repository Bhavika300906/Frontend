import { useEffect, useState } from "react";
import { useService } from "../context/ServiceContext";

function EditService() {
  const { editService, updateService, setEditService } = useService();
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (editService) {
      setForm(editService);
    }
  }, [editService]);

  if (!editService || !form) return null;

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    updateService(editService.id, form);
  };

  return (
    <div className="modal">
      <form className="service-form" onSubmit={handleSubmit}>
        <h3>Edit Service</h3>

        <div className="form-grid">
          <input name="name" value={form.name} onChange={handleChange} />
          <input name="price" value={form.price} onChange={handleChange} />
          <input name="category" value={form.category} onChange={handleChange} />
          <input name="duration" value={form.duration} onChange={handleChange} />
          <input name="image" value={form.image} onChange={handleChange} />
        </div>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
        />

        <div className="service-actions">
          <button className="edit-btn">Update</button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => setEditService(null)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditService;
