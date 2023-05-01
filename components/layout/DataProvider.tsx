import { database } from "../../config/database";
import { DatabaseContext } from "../../hooks/useDatabase";

export const DataProvider: React.FC<{ children: any }> = ({ children }) => {
    return <DatabaseContext.Provider value={database}>{children}</DatabaseContext.Provider>;
};
