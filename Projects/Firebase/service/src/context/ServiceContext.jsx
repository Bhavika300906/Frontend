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

/* 🌍 CONTEXT */
const ServiceContext = createContext();

/* 🧠 PROVIDER */
export function ServiceProvider({ children }) {

    /* ✅ STATES */
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState("All");
    const [editService, setEditService] = useState(null);

    /* 🔄 READ */
    const fetchServices = async () => {
        const snapshot = await getDocs(collection(fireDb, "services"));
        const data = snapshot.docs.map(docu => ({
            id: docu.id,
            ...docu.data()
        }));
        setServices(data);
    };

    /* ➕ CREATE */
    const addService = async (serviceData) => {
        await addDoc(collection(fireDb, "services"), {
            ...serviceData,
            status: "active",
            time: new Date()
        });
        fetchServices();
    };

    /* ❌ DELETE */
    const deleteService = async (id) => {
        await deleteDoc(doc(fireDb, "services", id));
        fetchServices();
    };

    /* ✏️ UPDATE */
    const updateService = async (id, updatedData) => {
        await updateDoc(doc(fireDb, "services", id), updatedData);
        fetchServices();
        setEditService(null);
    };

    useEffect(() => {
        fetchServices();
    }, []);

    /* ✅ RETURN MUST BE INSIDE FUNCTION */
    return (
        <ServiceContext.Provider
            value={{
                services,
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

/* 🔥 CUSTOM HOOK */
export const useService = () => useContext(ServiceContext);
