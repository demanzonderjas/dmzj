import { useEffect, useState } from "react";
import { useDatabase } from "../hooks/useDatabase";
import { observer } from "mobx-react";
import { useAdmin } from "../hooks/useAdmin";
import { useRouter } from "next/router";

export const ArticleList: React.FC = observer(() => {
    const { db } = useDatabase();
    const { isAdmin } = useAdmin();
    const router = useRouter();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        if (!db) {
            return;
        }
        (async () => {
            const articles = await db.getArticles();
            setArticles(Object.values(articles));
            console.log(articles);
        })();
    }, [db]);

    return (
        <section className="w-full">
            <h2>Schrijfsels</h2>
            <ul></ul>
            {isAdmin && (
                <button type="button" onClick={() => router.push("/schrijven")}>
                    Schrijven
                </button>
            )}
        </section>
    );
});
