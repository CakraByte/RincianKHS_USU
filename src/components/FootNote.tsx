'use client';
import Link from "next/link";
import {usePathname} from "next/navigation";


export default function Page() {
    const curPath = usePathname();
    return (
        <section className="minMaxWidth h-fit mt-10 min-h-20 px-4 flex flex-col gap-3 justify-center items-center">
                <span className="text-cb-primary minMaxWidth  flex items-baseline justify-center">
                        <strong className="mr-1">Catatan:</strong> Tidak ada data yang disimpan pada aplikasi ini.
                </span>
            {curPath !== "/tutorial/web" && (
                <Link className="max-w-full w-fit bg-cb-primary hover:scale-99 active:scale-95 text-cb-bg px-3 py-2 rounded-md text-center text-sm" href="/tutorial/web">Baca tutorial penggunaan website disini</Link>
            )}
            {curPath !== "/tutorial/ext" && (
                <Link className="max-w-full w-fit bg-cb-primary hover:scale-99 active:scale-95 text-cb-bg px-3 py-2 rounded-md text-center text-sm" href="/tutorial/ext">Baca tutorial penggunaan extension disini</Link>
            )}
        </section>
    );
};