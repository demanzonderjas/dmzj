import Image from "next/image";

import { Red_Hat_Mono } from "next/font/google";
import { Menu } from "./Menu";
import { DataProvider } from "./DataProvider";

const font = Red_Hat_Mono({ subsets: ["latin"] });

export const Page: React.FC<{ children?: any }> = ({ children }) => {
    return (
        <DataProvider>
            <div className={`flex min-h-screen flex-col  ${font.className} max-w-screen-xl mx-auto`}>
                <header className="p-10 flex items-center justify-between gap-10">
                    <Image alt="logo demanzonderjas" src="/logo.jpeg" width={100} height={100} />
                    <Menu />
                </header>
                <main className="p-12 flex flex-wrap justify-start">{children}</main>
                <footer></footer>
            </div>
        </DataProvider>
    );
};
