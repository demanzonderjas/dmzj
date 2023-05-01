import { useEffect, useState } from "react";
import { DatabaseContext } from "../../hooks/useDatabase";
import { Db } from "../../stores/Db";

export const DataProvider: React.FC<{ children: any }> = ({ children }) => {
    const [db, setDb] = useState<Db>(null);

    useEffect(() => {
        setDb(new Db());
    }, []);

    return <DatabaseContext.Provider value={db}>{children}</DatabaseContext.Provider>;
};
