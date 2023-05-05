import { Page } from "../../components/layout/Page";
import { TArticle } from "../../typings/article";
import { Db } from "../../stores/Db";
import { EditButton } from "../../components/EditButton";

export async function getServerSideProps(context: any) {
    const db = new Db();
    const article = await db.getArticle(context.params.slug);

    return {
        props: { post: article },
    };
}

export default function Post({ post }: { post: TArticle }) {
    if (!post) {
        return null;
    }
    return (
        <Page header={post.header}>
            <h1>{post.header}</h1>
            <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="w-full my-4 sm:whitespace-nowrap"
                style={{ minHeight: "40vh" }}
            />
            <EditButton slug={post.slug} />
        </Page>
    );
}
