import { useRouter } from "next/router";
import { Page } from "../components/layout/Page";

export default function Page404() {
    const router = useRouter();
    return (
        <Page header="404">
            <p>Helaas, dit bestaat helaas niet meer!</p>
            <div className="w-full my-10">
                <button type="button" onClick={() => router.push("/")}>
                    Homepage
                </button>
            </div>
        </Page>
    );
}
