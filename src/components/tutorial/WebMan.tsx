import Link from "next/link";
import Image from "next/image";


export default function Page() {

    return (
        <section className="minMaxWidth md:px-10">
            <h1 className="text-base font-medium text-justify">Berikut adalah langkah - langkah mengggunakan Website ini dengan menyalin secara langsung data (JSON) nilai KHS dari Satu Mahasiswa USU.</h1>

            <ol className="minMaxWidth list-decimal list-inside text-sm mt-5 md:mt-3 space-y-5 marker:font-semibold text-left">

                <li className="text-base font-normal">
                    <p className="inline">
                        Buka dan Login ke <a className="text-cb-primary hover:underline italic font-medium" href="https://satu.usu.ac.id/mahasiswa" target="_blank">Satu Mahasiswa</a> USU, lalu pilih menu <strong className="font-medium italic text-[.95rem]">Informasi KHS</strong>.
                    </p>
                    <Image className="w-full block rounded-md border border-cb-primary" src={'/tutor/webext_1.png'} alt="mantap" width={1000} height={1000} />
                </li>

                <li className="text-base font-normal ">
                    <span className="inline">
                        Buka <strong className="font-medium italic text-[.95rem]">Developer Tools</strong> dengan cara:
                        <ul className="list-disc list-inside ml-5">
                            <li className="text-sm">Tekan tombol <strong className="font-medium italic">F12</strong> pada keyboard.</li>
                            <li className="text-sm">Atau klik kanan pada halaman, lalu pilih <strong className="font-medium italic">Inspect</strong>.</li>
                        </ul>
                    </span>
                    <Image className="w-full block rounded-md border border-cb-primary" src={'/tutor/webman_2.png'} alt="mantap" width={1000} height={1000} />
                </li>

                <li className="text-base font-normal">
                    <p className="inline">
                        Lalu, pilih tab <strong className="font-medium italic text-[.95rem]">Network</strong> pada <i>Developer Tools</i> tersebut dan pilih opsi <strong className="font-medium italic text-[.9rem]">'Fetch/XHR'</strong>.
                    </p>
                    <Image className="w-full block `rounded-md border border-cb-primary" src={'/tutor/webman_3.png'} alt="mantap" width={1000} height={1000} />
                </li>

                <li className="text-base font-normal">
                    <p className="inline">
                        Cari dan klik pada request yang diawali kata <strong className="font-medium italic text-[.95rem]">'result?blabla'</strong> pada daftar request yang muncul, lalu pilih tab <strong className="font-medium italic text-[.95rem]">Response</strong>.
                    </p>
                    <Image className="w-full block rounded-md border border-cb-primary" src={'/tutor/webman_4.png'} alt="mantap" width={1000} height={1000} />
                </li>

                <li className="text-base font-normal">
                    <p className="inline">
                        Klik kanan pada area <strong className="font-medium italic text-[.95rem]">Response</strong> tersebut, lalu pilih opsi <strong className="font-medium italic text-[.95rem]">Copy &gt; Copy response</strong> untuk menyalin data JSON nilai KHS anda.
                    </p>
                    <Image className="w-full block rounded-md border border-cb-primary" src={'/tutor/webman_5.png'} alt="mantap" width={1000} height={1000} />
                </li>

                <li className="text-base font-normal">
                    <p className="inline">
                        Kembali ke <Link className="font-medium text-cb-primary hover:underline" href="/" >Halaman utama</Link> website ini, lalu tempelkan JSON yang telah disalin pada kolom yang tersedia, kemudian klik tombol <strong className="font-medium text-cb-primary italic">'Proses Nilai'</strong>.
                    </p>
                    <Image className="w-full block rounded-md border border-cb-primary" src={'/tutor/webext_4.png'} alt="mantap" width={1000} height={1000} />
                </li>

                <li className="text-base font-normal">
                    <p className="inline">
                        Setelah itu, Anda akan melihat detail rincian Nilai anda dengan lebih lengkap.
                    </p>
                    <Image className="w-full block rounded-md border border-cb-primary" src={'/tutor/webext_5.png'} alt="mantap" width={1000} height={1000} />
                </li>

            </ol>

        </section>
    );
};