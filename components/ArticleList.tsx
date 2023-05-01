import { useEffect, useState } from "react";
import { useDatabase } from "../hooks/useDatabase";
import { observer } from "mobx-react";
import { useAdmin } from "../hooks/useAdmin";
import { useRouter } from "next/router";
import { TArticle } from "../typings/article";
import Link from "next/link";

export const ArticleList: React.FC<{ onlyLatest?: boolean }> = observer(({ onlyLatest }) => {
    const { db } = useDatabase();
    const { isAdmin } = useAdmin();
    const router = useRouter();
    const [articles, setArticles] = useState<TArticle[]>([]);

    useEffect(() => {
        if (!db) {
            return;
        }
        (async () => {
            const articles = onlyLatest ? await db.getLatestArticles() : await db.getArticles();
            setArticles(Object.values((articles as TArticle[]) || []).reverse());
        })();
    }, [db]);

    return (
        <section className="w-full">
            {onlyLatest ? <h2>laatste schrijfsels</h2> : <h1>Schrijfsels</h1>}
            {isAdmin && (
                <div className="w-full">
                    <button type="button" onClick={() => router.push("/schrijven")}>
                        Schrijven
                    </button>
                </div>
            )}
            <ul>
                {articles.map((a) => (
                    <li key={a.slug} className="list-disc mx-4 my-2" style={{ fontSize: onlyLatest ? null : "1.25rem" }}>
                        <Link href={`schrijfsels/${a.slug}`}>{a.header}</Link>
                    </li>
                ))}
            </ul>
            {onlyLatest && (
                <button type="button" onClick={() => router.push("/schrijfsels")} className="my-10">
                    Alle schrijfsels
                </button>
            )}
        </section>
    );
});
