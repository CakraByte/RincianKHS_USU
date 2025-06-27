'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";

export default function Header() {
    const curPathname = usePathname();

    return (
        <header className="flex items-center justify-center h-14 text-cb-bg bg-cb-primary">
            <h1 className="cursor-pointer">
                {curPathname === '/' ? (
                    <b className="font-bold text-xl" onClick={() => window.location.href = "/"}> Pembaca Nilai KHS USU</b>
                ) : (
                    <Link className="font-bold text-xl" href="/">Pembaca Nilai KHS USU</Link>
                )}
            </h1>
        </header>
    );
}
