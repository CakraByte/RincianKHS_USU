import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
import {poppins} from "@/fonts";
import React, {Suspense} from "react";
import Footer from "@c/Footer";
import FootNote from "@c/FootNote";


export const metadata: Metadata = {
    title: "Pembaca Nilai KHS USU",
    description: "Ini adalah website untuk membaca nilai angka dari KHS Universitas Sumatera Utara",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="id">
        <body
            className={`${poppins.variable} ${poppins.className} selection:bg-cb-secondary/70 --font-poppins antialiased bg-cb-bg text-cb-text max-w-full min-w-full w-full min-h-screen overflow-x-hidden flex flex-col`}
            cz-shortcut-listen="true"
        >
        <Header/>
        <Suspense>
            <main
                className="min-h-screen relative bg-cb-bg text-cb-text max-w-full min-w-full w-full overflow-x-hidden xs:px-10 sm:px-15 md:px-30 lg:px-48 xl:px-60 2xl:px-75">
                {children}
            </main>
        </Suspense>

        <FootNote/>
        <Footer/>
        </body>
        </html>
    );
}
