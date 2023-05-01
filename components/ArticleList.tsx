import { useEffect, useState } from "react";
import { useDatabase } from "../hooks/useDatabase";

export const ArticleList: React.FC = () => {
    const { db, getArticles } = useDatabase();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        (async () => {
            const articles = await getArticles();
            setArticles(Object.values(articles));
        })();
    }, [db]);

    console.log(articles);

    return (
        <section>
            <h2>Schrijfsels</h2>
            <ul></ul>
        </section>
    );
};
