import { useService } from "../context/ServiceContext";

function ServiceCard({ service }) {
  const { deleteService, setEditService } = useService();

  const name = service.name || service.Name;
  const price = service.price || service.Price;
  const category = service.category || service.Category;
  const duration = service.duration || service.Duration;
  const image = service.image || service.Image;

  return (
    <div className="service-card">
      {image && <img src={image} alt={name} />}

      <h4>{name}</h4>
      <p>{category}</p>
      <p>₹{price}</p>
      <p>{duration}</p>

      <div className="service-actions">
        <button
          className="edit-btn"
          onClick={() => setEditService(service)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteService(service.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
