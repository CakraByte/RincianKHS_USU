import Link from "next/link";
import Image from "next/image";


export default function Page() {

    return (
        <section className="minMaxWidth md:px-10">
            <h1 className="text-base font-medium text-justify">Berikut adalah langkah - langkah mengggunakan Website ini dengan bantuan <strong className="font-medium italic text-[.95rem]">Extension Google Chrome</strong>.</h1>

            <ol className="minMaxWidth list-decimal list-inside text-sm mt-5 md:mt-3 space-y-5 marker:font-semibold text-left">

                <li className="text-base font-normal">
                    <p className="inline">
                        Buka dan Login ke <a className="text-cb-primary hover:underline italic font-medium" href="https://satu.usu.ac.id/mahasiswa" target="_blank">Satu Mahasiswa</a> USU, lalu pilih menu <strong className="font-medium italic text-[.95rem]">Informasi KHS</strong>.
                    </p>
                    <Image className="w-full block rounded-md border border-cb-primary" src={'/tutor/webext_1.png'} alt="mantap" width={1000} height={1000} />
                </li>

                <li className="text-base font-normal ">
                    <p className="inline">
                        Buka <a className="text-cb-primary hover:underline font-medium" href="https://github.com/CakraByte/khs_usu_ext" target="_blank">Extension <i className="text-[.95rem]">'Pembaca Nilai Angka KHS USU'</i>.</a>
                    </p>
                    <Image className="w-full block rounded-md border border-cb-primary" src={'/tutor/webext_2.png'} alt="mantap" width={1000} height={1000} />
                </li>

                <li className="text-base font-normal">
                    <p className="inline">
                        Klik tombol <strong className="font-medium text-cb-primary italic">'Copy JSON'</strong> pada <i>Popup Extension</i> tersebut.
                    </p>
                    <Image className="w-full block rounded-md border border-cb-primary" src={'/tutor/webext_3.png'} alt="mantap" width={1000} height={1000} />
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