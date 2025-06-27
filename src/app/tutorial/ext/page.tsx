import Image from "next/image";

export default function Page() {

    return (
        <>
            <section className="minMaxWidth min-h-10 mt-10 px-5">
                <div className="flex flex-col gap-4 items-center justify-center h-full">
                    <h1 className="text-2xl font-bold text-center">Tutorial Penggunaan Extension</h1>
                    <a href="https://github.com/CakraByte/khs_usu_ext?tab=readme-ov-file#penginstallan--pemasangan" target="_blank" className="text-sm max-w-full w-fit px-2 hover:scale-99 active:scale-95 min-h-9 shadow-sm shadow-cb-text bg-cb-primary text-white  flex justify-center items-center border border-cb-primary rounded-md">
                        Download Extension
                    </a>
                </div>
                <div className="minMaxWidth mt-8">

                    <h2 className="text-lg font-medium mb-2">Berikut adalah cara penggunaan extension <strong className="font-semibold italic text-[1.1rem]">'Pembaca Nilai Angka KHS USU'</strong>.</h2>

                    <ol className="list-decimal list-inside text-base  space-y-4 ">
                        <li>
                            <p className="inline">
                                Pastikan kamu sudah menginstall extension <a href="https://github.com/CakraByte/khs_usu_ext?tab=readme-ov-file#penginstallan--pemasangan" target="_blank" className="font-semibold italic text-cb-primary hover:underline">'Pembaca Nilai Angka KHS USU'</a> di browser kamu.
                            </p>
                            <Image className="w-full block rounded-md" src={'/tutor/ext_1.png'} alt="mantap" width={1000} height={1000} />
                        </li>

                        <li>
                            <p className="inline">
                                Masuk dan Login ke <a href="https://https//satu.usu.ac.id/mahasiswa">Satu Mahasiswa</a> USU. Kemudian masuk ke Menu <strong className="font-medium text-cb-primary">Informasi KHS</strong>
                            </p>
                            <Image className="w-full block rounded-md" src={'/tutor/webext_1.png'} alt="mantap" width={1000} height={1000} />
                        </li>

                        <li>
                            <p className="inline">
                                Tekan tombol <i>berbentuk puzzle</i> di pojok kanan atas, lalu pilih opsi <strong className="font-medium text-cb-primary">Pembaca Nilai Angka KHS USU</strong> (seperti pada gambar langkah-1). Maka nilai-mu akan langsung ditampilkan.
                            </p>
                            <Image className="w-full block rounded-md" src={'/tutor/ext_2.png'} alt="mantap" width={1000} height={1000} />
                        </li>

                        <li>
                            <p className="inline">
                                Jika tidak, coba reload halaman itu dan coba lagi langkah ke-3.
                            </p>
                        </li>

                        <li>
                            <p className="inline">
                                Jika masih gagal, remove extension ini dari Chrome kamu dan coba install ulang.
                            </p>
                            <Image className="w-full block rounded-md" src={'/tutor/ext_3.png'} alt="mantap" width={1000} height={1000} />
                        </li>

                    </ol>
                </div>
            </section>
        </>
    );
};