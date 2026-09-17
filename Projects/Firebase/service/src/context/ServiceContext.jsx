import React, { createContext, useState, useEffect, useContext } from 'react';
import { db } from '../Firebase/Firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const ServiceContext = createContext();

export const useServices = () => useContext(ServiceContext);

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // FIX 1: Change "services" to "Services" (Capital S)
  const servicesCollectionRef = collection(db, "Services");

  const getServices = async () => {
    setLoading(true);
    try {
      const data = await getDocs(servicesCollectionRef);
      setServices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.error(err);
      toast.error("Error fetching data!");
    }
    setLoading(false);
  };

  const addService = async (newService) => {
    try {
      await addDoc(servicesCollectionRef, newService);
      getServices();
      toast.success("Service Added Successfully!");
    } catch (err) {
      toast.error("Failed to add service.");
    }
  };

  const deleteService = async (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      try {
        // FIX 2: Change "services" to "Services" here too
        const serviceDoc = doc(db, "Services", id);
        await deleteDoc(serviceDoc);
        getServices();
        toast.info("Service Deleted");
      } catch (err) {
        toast.error("Failed to delete.");
      }
    }
  };

  const updateService = async (id, updatedService) => {
    try {
      // FIX 3: And here
      const serviceDoc = doc(db, "Services", id);
      await updateDoc(serviceDoc, updatedService);
      getServices();
      toast.success("Service Updated!");
    } catch (err) {
      toast.error("Update failed.");
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <ServiceContext.Provider value={{ services, loading, addService, deleteService, updateService }}>
      {children}
    </ServiceContext.Provider>
  );
};