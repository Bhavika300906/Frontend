import { useService } from "../context/ServiceContext";
import ServiceCard from "./ServiceCard";

function ServiceList() {
  const { services, loading } = useService();

  console.log("🔥 Firebase services:", services);

  if (loading) return <p>Loading services...</p>;

  return (
    <div className="services-grid">
      {services.length === 0 && <p>No services found</p>}

      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}

export default ServiceList;
