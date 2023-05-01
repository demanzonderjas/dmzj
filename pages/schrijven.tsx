import { useRouter } from "next/router";
import { Page } from "../components/layout/Page";
import { useDatabase } from "../hooks/useDatabase";
import { slugify } from "../utils/formatting";
import { useState } from "react";
import { RichTextField } from "../components/RichTextField";

export default function Schrijven() {
    const { db } = useDatabase();
    const router = useRouter();
    const [value, setValue] = useState("");

    const save = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { header } = Object.fromEntries(formData) as { [k in string]: string };
        if (!header) {
            return;
        }
        const slug = slugify(header);

        await db.saveArticle({ header, content: value, slug });
        router.push(`schrijfsels/${slug}`);
    };

    return (
        <Page header="Schrijven">
            <form className="flex flex-col gap-5 w-full" onSubmit={save}>
                <input name="header" />
                {/* <RichTextField value={value} setValue={setValue} /> */}
                <button type="submit">Opslaan</button>
            </form>
        </Page>
    );
}
