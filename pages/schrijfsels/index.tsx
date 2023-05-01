import { ArticleList } from "../../components/ArticleList";
import { Page } from "../../components/layout/Page";

export default function ArticleIndex() {
    return (
        <Page header="Schrijfsels">
            <ArticleList />
        </Page>
    );
}
