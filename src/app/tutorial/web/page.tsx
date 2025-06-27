'use client';

import WebExt from '@c/tutorial/WebExt'
import WebMan from '@c/tutorial/WebMan'
import {useSearchParams} from "next/navigation";
import {ChangeEvent, useState} from "react";

export default function Page() {
    const searchParams = useSearchParams();
    const [curType, setCurType] = useState(searchParams.get('type') || 'ext');

    const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurType(e.target.value);
        // Update the URL with the new type
        const url = new URL(window.location.href);
        url.searchParams.set('type', e.target.value);
        window.history.pushState({}, '', url.toString());
    };

    return (
        <>
            <section className="minMaxWidth min-h-10 mt-10 px-5">
                <div className="flex flex-col gap-4 items-center justify-center h-full">
                    <h1 className="text-2xl font-bold">Tutorial Penggunaan Web</h1>
                    <section className="max-w-full w-fit px-2 min-h-10 py-0.5 bg-cb-primary gap-2 flex justify-center items-center border border-cb-primary rounded-md">
                        <label htmlFor="" className="font-medium text-sm md:text-base text-cb-bg">
                            Tutorial penggunaan web dari:
                        </label>
                        <select id="whatfor" className="border border-cb-text rounded-md px-2 py-1 text-sm outline-none bg-cb-bg text-cb-primary font-medium cursor-pointer hover:scale-x-99 active:scale-96" onChange={handleTypeChange} value={curType === 'ext' ? 'ext' : 'manual'}>
                            <option value={curType === 'ext' ? 'manual' : 'ext'}>{curType === 'ext' ? 'Manual' : 'Ekstensi'}</option>
                            <option value={curType !== 'ext' ? 'manual' : 'ext'}>{curType !== 'ext' ? 'Manual' : 'Ekstensi'}</option>
                        </select>
                    </section>

                    { curType === 'ext' ? (
                        <WebExt />
                    ) : (
                        <WebMan />
                    )}
                </div>
            </section>
        </>
    );
};