import { createContext, useContext } from "react";
import { get, child, Database, ref } from "firebase/database";

export const DatabaseContext = createContext<Database>(null);

export const useDatabase = () => {
    const db = useContext(DatabaseContext);
    const dbRef = ref(db);

    const getArticles = async () => {
        const snapshot = await get(child(dbRef, "articles"));
        return snapshot.val();
    };

    return {
        db,
        getArticles,
    };
};
