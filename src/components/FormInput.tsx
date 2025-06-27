import {useState} from "react";
import StudyCard from "@t/studycard.interface";
import {jetbrainsMono} from "@/fonts";
import DetailNilai from "@c/DetailNilai";


export default function FormInput() {
    const [studyCard, setStudyCard] = useState<StudyCard | undefined>(undefined);
    const [studyCardData, setStudyCardData] = useState<string>('{}');
    const [isCardValid, setIsCardValid] = useState<boolean>(false);

    const handleJsonInput = () => {
        const jsonInput = studyCardData || '{}';
        try {
            const parsedData: StudyCard = JSON.parse(jsonInput);

            // Cek validitas dengan variabel lokal
            const isValid = parsedData.data.course_classes.some(item => item.final_score !== null);

            setIsCardValid(isValid);

            if (!isValid) {
                alert("Kemungkinan nilai belum di-input dosen atau format JSON tidak sesuai.");
                return;
            }

            setStudyCard(parsedData);
        } catch (error) {
            console.warn("Invalid JSON input:", error);
            alert("Input JSON tidak valid. Pastikan formatnya benar.");
        }
    }

    return (
        <>
            <section className="minMaxWidth h-fit min-h-40 flex flex-col justify-center items-center px-2">
                <div
                    className="flex flex-col items-center justify-center px-3 md:px-10 py-2.5 bg-cb-primary/90 rounded-md min-w-full !max-w-2xl">
                    <label
                        htmlFor="jsonInput"
                        className="text-lg font-semibold mb-2 text-cb-secondary"
                    >
                        Masukkan JSON KHS:
                    </label>
                    <textarea
                        id="jsonInput"
                        className={`w-full  h-40 p-2 ${jetbrainsMono.className} text-nowrap overflow-auto text-sm custom-scrollbar border border-gray-300 rounded-md not-placeholder-shown:rounded-r-none resize-none bg-cb-bg/95 text-cb-text focus:outline-none focus:ring-2 focus:ring-cb-primary transition-colors`}
                        placeholder={`Contoh JSON: {\n\t"status": "success",\n\t"name": "Mahasiswa USU"\n\t...\n}`}
                        onChange={(e) => {
                            setStudyCardData(e.target.value);
                        }}
                    ></textarea>
                    <button
                        onClick={handleJsonInput}
                        className="mt-4 px-6 py-2 bg-cb-secondary text-cb-primary font-semibold rounded-md hover:bg-cb-primary-dark transition-colors cursor-pointer">
                        Proses Nilai
                    </button>
                </div>
            </section>

            <DetailNilai studyCard={studyCard} isCardValid={isCardValid}/>
        </>
    );
};