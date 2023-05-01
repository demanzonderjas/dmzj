import { AboutMe } from "../components/AboutMe";
import { ArticleList } from "../components/ArticleList";
import { Page } from "../components/layout/Page";

export default function Home() {
    return (
        <Page>
            <AboutMe />
            <ArticleList />
        </Page>
    );
}
