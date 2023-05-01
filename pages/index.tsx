import { AboutMe } from "../components/AboutMe";
import { ArticleList } from "../components/ArticleList";
import { Page } from "../components/layout/Page";

export default function Home() {
    return (
        <Page header="De man zonder jas - inspireer door te onderscheiden">
            <AboutMe />
            <ArticleList onlyLatest={true} />
        </Page>
    );
}
