export interface User {
    id: string;
    email: string;
    createdAt: string;
}

export interface UserProfile {
    userId: string;
    goal: "bulk" | "cut" | "maintain";
    experience: "beginner" | "intermediate" | "advanced";
    daysPerWeek: number;
    sessionLength: number;
    equipment: "full_gym" | "home" | "dumbbells";
    injuries?: string;
    preferredSplit: "full_body" | "upper_lower" | "ppl" | "custom";
    updatedAt: string;
}