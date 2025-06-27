import StudyCard from "@t/studycard.interface";


export default function DetailNilai({studyCard, isCardValid}: { studyCard?: StudyCard, isCardValid?: boolean }) {
    const data = studyCard?.data;
    const listKelas = data?.course_classes;
    return (
        <section className="minMaxWidth flex flex-col justify-center p-3 pb-20 mt-10">
            {!isCardValid ? (
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-2xl font-bold text-center mb-4">Detail Nilai Tidak Valid</h1>
                    <p className="text-center">
                        Kartu Hasil Studi (KHS) Anda tidak valid atau belum tersedia.
                        Silakan periksa kembali data yang dimasukkan.
                    </p>
                    <small className="text-center mb-6 md:px-10 text-yellow-700">
                        Note: Kemungkinan terbesarnya karena belum ada dosen yang menginput nilai. Atau kamu belum mengisi survei pada <a className="text-blue-700" href="https://satu.usu.ac.id/mahasiswa">Satu Mahasiswa - USU</a>
                    </small>
                </div>
            ) : (studyCard !== undefined ? (
                    <>
                        <h1 className="text-2xl font-bold text-center mb-4">Detail Nilai</h1>
                        <p className="text-center mb-6">
                            Halaman ini akan menampilkan detail nilai dari Kartu Hasil Studi (KHS)
                            Anda.
                        </p>
                        <div
                            className="bg-white/50 shadow-md rounded-lg p-3 minMaxWidth overflow-clip md:p-4 lg:px-5 xl:px-7">
                            <h2 className="text-xl font-semibold  text-cb-primary text-center">
                                Informasi Nilai
                            </h2>
                            <div className="flex flex-col text-xs mb-3">
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold">NIM:</span>
                                    <span>{data?.nim}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold">Nama:</span>
                                    <span>{data?.name}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold">Program Studi:</span>
                                    <span>{data?.major_name}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold">Semester:</span>
                                    <span>{data?.semester_name.replace(/semester ?/i, '')}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold">IPS:</span>
                                    <span>{data?.gpa}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold">IPK:</span>
                                    <span>{data?.cgpa || "N/A"}</span>
                                </div>
                            </div>
                            <div className="w-full bg-white/80 rounded-md border-[.5px] border-cb-primary/30">
                                <div className="overflow-x-auto no-scrollbar rounded-md text-base">
                                    <div className="min-w-100 no-scrollbar">
                                        <section id="header"
                                                 className="flex gap-5 items-center sticky top-0 z-10 px-4 py-2.5 bg-white border-b border-cb-primary/30">
                                            <strong className="w-50">Mata Kuliah</strong>
                                            <strong className="w-25 text-center">Nilai</strong>
                                            <strong className="w-16 text-center">SKS</strong>
                                        </section>

                                        <section id="content"
                                                 className="divide-y divide-cb-primary/30 max-h-[70vh] overflow-y-auto no-scrollbar">
                                            {listKelas?.map((kelas, index) => (
                                                <div key={index}
                                                     className="px-4 pb-2 hover:bg-neutral-50/50 no-scrollbar text-sm">
                                                    <div className="flex gap-5 items-center py-2">
                                                        <span
                                                            className="w-50 truncate font-semibold">{kelas.course_name}</span>
                                                        <span
                                                            className="w-25 text-center">{kelas.final_score || "N/A"} [{kelas.grade_code}]</span>
                                                        <span className="w-16 text-center">{kelas.credits}</span>
                                                    </div>
                                                    <div className="text-xs border-t border-cb-primary/20 pt-2">
                                                        <span className="font-semibold block mb-1">Rincian Nilai:</span>
                                                        <ul className="list-disc space-y-1 ml-5">
                                                            <li className="marker:text-cb-primary/70">
                                                                <div className="inline-flex items-baseline min-w-0">
                                                                    <strong
                                                                        className="shrink-0 w-30 font-medium">Dosen</strong>
                                                                    <span
                                                                        className="shrink-0 text-neutral-700 mx-1">:</span>
                                                                    <span
                                                                        className="truncate">{kelas.lecturers[0].full_name}</span>
                                                                </div>
                                                            </li>
                                                            <li className="marker:text-cb-primary/70">
                                                                <div className="inline-flex items-baseline min-w-0">
                                                                    <strong className="shrink-0 w-30 font-medium">Kode
                                                                        Kelas</strong>
                                                                    <span
                                                                        className="shrink-0 text-neutral-700 mx-1">:</span>
                                                                    <span className="truncate">{kelas.course_code}</span>
                                                                </div>
                                                            </li>
                                                            <li className="marker:text-cb-primary/70">
                                                                <div className="inline-flex items-baseline min-w-0">
                                                                    <strong className="shrink-0 w-30 font-medium">Nilai
                                                                        Projek</strong>
                                                                    <span
                                                                        className="shrink-0 text-neutral-700 mx-1">:</span>
                                                                    <span
                                                                        className="truncate">{kelas.grade_detail?.[0]?.value ?? 'N/A'} ({kelas.grade_detail?.[0]?.percent ?? 'N/A'}%)</span>
                                                                </div>
                                                            </li>
                                                            <li className="marker:text-cb-primary/70">
                                                                <div className="inline-flex items-baseline min-w-0">
                                                                    <strong className="shrink-0 w-30 font-medium">Nilai Case
                                                                        Method</strong>
                                                                    <span
                                                                        className="shrink-0 text-neutral-700 mx-1">:</span>
                                                                    <span
                                                                        className="truncate">{kelas.grade_detail?.[1]?.value ?? 'N/A'} ({kelas.grade_detail?.[1]?.percent ?? 'N/A'}%)</span>
                                                                </div>
                                                            </li>
                                                            <li className="marker:text-cb-primary/70">
                                                                <div className="inline-flex items-baseline min-w-0">
                                                                    <strong className="shrink-0 w-30 font-medium">Nilai
                                                                        Tugas</strong>
                                                                    <span
                                                                        className="shrink-0 text-neutral-700 mx-1">:</span>
                                                                    <span
                                                                        className="truncate">{kelas.grade_detail?.[2]?.value ?? 'N/A'} ({kelas.grade_detail?.[2]?.percent ?? 'N/A'}%)</span>
                                                                </div>
                                                            </li>
                                                            <li className="marker:text-cb-primary/70">
                                                                <div className="inline-flex items-baseline min-w-0">
                                                                    <strong className="shrink-0 w-30 font-medium">Nilai
                                                                        Quiz</strong>
                                                                    <span
                                                                        className="shrink-0 text-neutral-700 mx-1">:</span>
                                                                    <span
                                                                        className="truncate">{kelas.grade_detail?.[3]?.value ?? 'N/A'} ({kelas.grade_detail?.[3]?.percent ?? 'N/A'}%)</span>
                                                                </div>
                                                            </li>
                                                            <li className="marker:text-cb-primary/70">
                                                                <div className="inline-flex items-baseline min-w-0">
                                                                    <strong className="shrink-0 w-30 font-medium">Nilai
                                                                        UTS</strong>
                                                                    <span
                                                                        className="shrink-0 text-neutral-700 mx-1">:</span>
                                                                    <span
                                                                        className="truncate">{kelas.grade_detail?.[4]?.value ?? 'N/A'} ({kelas.grade_detail?.[4]?.percent ?? 'N/A'}%)</span>
                                                                </div>
                                                            </li>
                                                            <li className="marker:text-cb-primary/70">
                                                                <div className="inline-flex items-baseline min-w-0">
                                                                    <strong className="shrink-0 w-30 font-medium">Nilai
                                                                        UAS</strong>
                                                                    <span
                                                                        className="shrink-0 text-neutral-700 mx-1">:</span>
                                                                    <span
                                                                        className="truncate">{kelas.grade_detail?.[5]?.value ?? 'N/A'} ({kelas.grade_detail?.[5]?.percent ?? 'N/A'}%)</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}


                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) :
                (
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-2xl font-bold text-center mb-4">Detail Nilai Tidak Tersedia</h1>
                        <p className="text-center mb-6">
                            Kartu Hasil Studi (KHS) Anda tidak ditemukan atau belum tersedia.
                        </p>
                    </div>
                ))
            }

        </section>
    )
        ;
}
