import { useService } from "../context/ServiceContext";

function ServiceCard({ service }) {
  const { deleteService, setEditService } = useService();

  return (
    <div className="service-card">
      {service.image && <img src={service.image} alt={service.name} />}

      <h4>{service.name}</h4>
      <p>{service.category}</p>
      <p>₹{service.price}</p>
      <p>{service.duration}</p>

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
