import { createContext, useContext } from "react";
import { Db } from "../stores/Db";

export const DatabaseContext = createContext<Db>(null);

export const useDatabase = () => {
    const db = useContext(DatabaseContext);

    return {
        db,
    };
};
