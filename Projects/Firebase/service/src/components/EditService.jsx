const updateService = async (id, updatedData) => {
  try {
    await updateDoc(doc(fireDb, "Services", id), updatedData);

    toast.success("Service updated successfully ✏️");
    fetchServices();
    setEditService(null);
  } catch (error) {
    toast.error("Failed to update service ❌");
    console.error(error);
  }
};
