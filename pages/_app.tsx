import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { DataProvider } from "../components/layout/DataProvider";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <DataProvider>
            <Component {...pageProps} />
        </DataProvider>
    );
}
