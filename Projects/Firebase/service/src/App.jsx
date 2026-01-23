import { useState } from "react";
import ServiceList from "./components/ServiceList";
import AddService from "./components/AddService";
import EditService from "./components/EditService";
import CategoryFilter from "./components/CategoryFilter";


function App() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Services</h1>
        <button className="add-btn" onClick={() => setShowAddForm(true)}>
          + Add Service
        </button>
      </div>

      <CategoryFilter />
      <ServiceList />

      {showAddForm && <AddService closeForm={() => setShowAddForm(false)} />}
      <EditService />
    </div>
  );
}

export default App;
