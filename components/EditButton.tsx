import { observer } from "mobx-react";
import { useAdmin } from "../hooks/useAdmin";
import { useRouter } from "next/router";

export const EditButton: React.FC<{ slug: string }> = observer(({ slug }) => {
    const { isAdmin } = useAdmin();
    const router = useRouter();

    if (!isAdmin) {
        return null;
    }
    return (
        <button type="button" onClick={() => router.push(`/schrijfsels/aanpassen/${slug}`)}>
            Aanpassen
        </button>
    );
});
