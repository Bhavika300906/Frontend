import { createContext, useContext, useEffect, useState } from "react";
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc
} from "firebase/firestore";
import { fireDb } from "../Firebase/Firebase";
import { toast } from "react-toastify";


/* =========================
   CONTEXT CREATION
========================= */
const ServiceContext = createContext();

/* =========================
   PROVIDER
========================= */
export function ServiceProvider({ children }) {

    /* 🔹 STATES */
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState("All");
    const [editService, setEditService] = useState(null);
    const [loading, setLoading] = useState(true);

    /* =========================
       READ (FETCH ALL SERVICES)
    ========================= */
    const fetchServices = async () => {
        try {
            const snapshot = await getDocs(collection(fireDb, "Services"));

            const data = snapshot.docs.map(docu => {
                const d = docu.data();

                return {
                    id: docu.id,

                    // 🔥 normalize fields (THIS IS THE KEY)
                    name: d.name || d.Name || "",
                    price: d.price || d.Price || "",
                    category: d.category || d.Category || "",
                    duration: d.duration || d.Duration || "",
                    image: d.image || d.Image || "",
                    description: d.description || d.Description || "",
                    status: d.status || "active"
                };
            });

            setServices(data);
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    /* =========================
       CREATE (ADD SERVICE)
    ========================= */
    const addService = async (serviceData) => {
        try {
            await addDoc(collection(fireDb, "Services"), {
                ...serviceData,
                status: "active",
                createdAt: new Date()
            });

            toast.success("Service added successfully ✅");
            fetchServices();
        } catch (error) {
            toast.error("Failed to add service ❌");
            console.error(error);
        }
    };


    /* =========================
       DELETE SERVICE
    ========================= */
    const deleteService = async (id) => {
        try {
            await deleteDoc(doc(fireDb, "Services", id));

            toast.success("Service deleted successfully 🗑️");
            fetchServices();
        } catch (error) {
            toast.error("Failed to delete service ❌");
            console.error(error);
        }
    };


    /* =========================
       UPDATE SERVICE
    ========================= */
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


    /* =========================
       INITIAL FETCH
    ========================= */
    useEffect(() => {
        fetchServices();
    }, []);

    /* =========================
       PROVIDER RETURN
    ========================= */
    return (
        <ServiceContext.Provider
            value={{
                services,
                loading,
                category,
                setCategory,
                addService,
                deleteService,
                updateService,
                editService,
                setEditService
            }}
        >
            {children}
        </ServiceContext.Provider>
    );
}

/* =========================
   CUSTOM HOOK
========================= */
export const useService = () => useContext(ServiceContext);
