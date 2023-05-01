import { useDatabase } from "./useDatabase";

export function useAdmin() {
    const { db } = useDatabase();

    return {
        isAdmin: !!db && !!db.user,
    };
}
