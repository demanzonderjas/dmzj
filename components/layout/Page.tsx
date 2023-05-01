import Image from "next/image";

import { Red_Hat_Mono } from "next/font/google";
import { Menu } from "./Menu";
import Head from "next/head";
const font = Red_Hat_Mono({ subsets: ["latin"] });

export const Page: React.FC<{ children?: any; header: string }> = ({ children, header }) => {
    return (
        <div className={`flex min-h-screen flex-col  ${font.className} max-w-screen-lg mx-auto`}>
            <Head>
                <title>{header}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header className="p-10 flex items-center justify-between gap-10">
                <Image alt="logo demanzonderjas" src="/logo.jpeg" width={100} height={100} />
                <Menu />
            </header>
            <main className="p-12 flex flex-wrap justify-start">{children}</main>
            <footer></footer>
        </div>
    );
};
