import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { useDatabase } from "@/hooks/useDatabase";
import { useEffect, useState } from "react";
import { useAdmin } from "@/hooks/useAdmin";
import { RichTextField } from "./RichTextField";

export const EditArticleForm: React.FC = observer(() => {
    const { db } = useDatabase();
    const { isAdmin } = useAdmin();
    const router = useRouter();
    const [article, setArticle] = useState(null);
    const [value, setValue] = useState("");
    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
        if (!isAdmin) {
            return;
        }
        (async () => {
            const article = await db.getArticle(router.query.slug as string);
            setArticle(article);
            setValue(article.content);
        })();
    }, [isAdmin]);

    const update = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { header } = Object.fromEntries(formData) as { [k in string]: string };

        await db.updateArticle(article.key, { header, content: value, slug: article.slug });
        router.push(`/schrijfsels/${article.slug}`);
    };

    const deleteArticle = async () => {
        await db.deleteArticle(article.key);
        router.push(`/schrijfsels`);
    };

    if (!article) {
        return null;
    }

    return (
        <form className="flex flex-col gap-5 w-full" onSubmit={update}>
            <input name="header" defaultValue={article.header} />
            {/* <RichTextField value={value} setValue={setValue} /> */}
            <div className="flex justify-between">
                {!confirm && (
                    <button type="button" onClick={() => setConfirm(true)}>
                        Verwijderen
                    </button>
                )}
                {confirm && (
                    <button type="button" onClick={() => setConfirm(false)}>
                        Cancel
                    </button>
                )}
                {confirm && (
                    <button type="button" onClick={deleteArticle}>
                        Bevestigen
                    </button>
                )}
                <button type="submit">Opslaan</button>
            </div>
        </form>
    );
});
