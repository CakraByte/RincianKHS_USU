'use client';

import FormInput from "@c/FormInput";

export default function Home() {

    return (
        <>
            <section
                className="minMaxWidth h-fit min-h-40 flex flex-col items-center justify-center p-4 text-cb-primary">
                <h1 className=" font-bold text-xl md:text-[1.65rem]">
                    Baca Rincian Nilai <strong>KHS</strong>-mu
                </h1>
                <p className="font-normal ">
                    Tempelkan <code className="hg-code">JSON</code> nilai mu pada kolom
                    dibawah ini agar kamu dapat melihat <b>Rincian nilai dalam KHS</b>-mu
                </p>
            </section>

            <FormInput/>

        </>
    );
}
