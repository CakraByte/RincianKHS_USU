
interface Lecturer {
    user_id: string;
    full_name: string;
    nip: string;
    nidn: string;
    evaluation_status?: number; // Assuming evaluation_status is a number
}

interface CourseClass {
    id: string;
    max_capacity: number | null;
    study_card_id: string;
    nim: string;
    name: string;
    major_code: string;
    major_name: string;
    education_level: string;
    faculty_id: string;
    faculty_name: string;
    elearning_class_id: string | null;
    class_id_ref: string | null;
    class_id: string;
    old_class_id: string | null;
    class_name: string;
    course_id: string;
    course_code: string;
    course_name: string;
    course_name_english: string | null;
    credits: number;
    class_type: string;
    course_type: string;
    course_trait: string | null;
    curriculum_id: string | null;
    curriculum_name: string | null;
    semester: string | null;
    semester_id: string;
    lecturers:Lecturer[];
    room_code?: string | null; // Room code is optional
    room_name?: string | null; // Room name is optional
    day?: string | null; // Day is optional
    start_time?: string | null; // Start time is optional
    end_time?: string | null; // End time is optional
    finalization?: unknown; // Finalization can be any type
    grade_detail?: {
        grade_id: string;
        name: string;
        percent: number | null;
        value?: number | null; // Value can be a number or null
    }[];
    final_score?: number | null; // Final score can be a number or null
    grade_code?: string | null; // Grade code can be a string or null
    grade_index?: number | null; // Grade index can be a number or null
    graded_at?: string | null; // Graded at can be a string or null
    graded_by?: string | null; // Graded by can be a user ID or null
    attempt?: number; // Attempt is always a number
    transcript?: unknown; // Transcript can be any type
    course_class_type?: unknown; // Course class type can be any type
    created_at?: string;
    updated_at?: string;
    created_by?: string;
    updated_by?: string;
    sync?: unknown; // Sync can be any type
    sync_at?: string | null; // Sync at can be a string or null
    deleted: boolean; // Deleted is always a boolean
    pddikti_details?: unknown; // PDDIKTI details can be any type
}

export default interface StudyCard {
    status: string;
    error: boolean;
    message: string;
    data: {
        id: string;
        nim: string;
        name: string;
        major_code: string;
        major_name: string;
        education_level: string;
        faculty_id: string;
        faculty_name: string;
        schedule_id: string | null;
        period_taken: string;
        semester_id: string;
        semester_name: string;
        course_classes: CourseClass[];
        academic_supervisor: Lecturer;
        status: string | null;
        cgpa: number;
        gpa: number;
        last_gpa: number | null;
        max_total_credits: number;
        total_credits_taken: number;
        pkrs: unknown; // PKRS can be any type
        study_card_processes: {
            nim: string;
            status_code: number;
            value: boolean;
            note: string | null;
            approved: boolean | null;
            study_card_id: string;
            created_at: string;
            updated_at: string;
        }[];
        process_logs: {
            id: string | null;
            nim: string;
            status_code: number;
            value: boolean;
            note: string | null;
            approved: boolean | null;
            approved_by: string | null;
            study_card_id: string | null;
            created_at: string;
            updated_at: string;
            created_by: string;
            updated_by: string;
            approved_by_name: string | null;
            approved_by_nip: string | null;
        }[];
        process: {
            id: string | null;
            nim: string;
            status_code: number;
            value: boolean;
            note: string | null;
            approved: boolean | null;
            approved_by: string | null;
            study_card_id: string | null;
            created_at: string;
            updated_at: string;
            created_by: string;
            updated_by: string;
            approved_by_name: string | null;
            approved_by_nip: string | null;
        };
        outbound_logs: unknown; // Outbound logs can be any type
        outbound_current: unknown; // Outbound current can be any type
        transfer: unknown; // Transfer can be any type
        past_transcript: unknown; // Past transcript can be any type
        achievement_ids: unknown; // Achievement IDs can be any type
        already_recognition: unknown; // Already recognition can be any type
        total_recognition: number;
        created_at: string;
        updated_at: string;
        created_by: string;
        updated_by: string;
        cgpa_sync_at: number[]; // CGPA sync at is an array of numbers
        deleted: boolean;
    }
}
