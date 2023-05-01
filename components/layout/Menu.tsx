import Link from "next/link";

export const Menu: React.FC = () => {
    return (
        <nav>
            <ul className="flex gap-12 items-center">
                <li className="hover:font-bold cursor-pointer">
                    <Link href="/schrijfsels">schrijfsels</Link>
                </li>
                <li className="hover:font-bold cursor-pointer">
                    <Link href="/projecten">projecten</Link>
                </li>
            </ul>
        </nav>
    );
};
