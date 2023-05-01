import Image from "next/image";

import { Red_Hat_Mono } from "next/font/google";
import { Menu } from "./Menu";
import Head from "next/head";
import { useRouter } from "next/router";
const font = Red_Hat_Mono({ subsets: ["latin"] });

export const Page: React.FC<{ children?: any; header: string }> = ({ children, header }) => {
    const router = useRouter();
    return (
        <div className={`flex min-h-screen flex-col  ${font.className} max-w-screen-lg mx-auto`}>
            <Head>
                <title>{header}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8" />
            </Head>
            <header className="p-10 flex items-center justify-between gap-10">
                <Image
                    alt="logo demanzonderjas"
                    src="/logo.jpeg"
                    width={100}
                    height={100}
                    priority
                    onClick={() => router.push("/")}
                />
                <Menu />
            </header>
            <main className="p-12 flex flex-wrap justify-start">
                {children}
                {router.pathname !== "/" && (
                    <div className="w-full my-4">
                        <button type="button" onClick={() => router.back()}>
                            {"<"} Terug{" "}
                        </button>
                    </div>
                )}
            </main>
            <footer></footer>
        </div>
    );
};
