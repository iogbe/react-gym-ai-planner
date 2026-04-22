import { AuthView } from "@neondatabase/neon-js/auth/react";
import { useParams } from "react-router";
console.log("Auth.tsx at top level of file runs");
export default function Auth() {
    console.log("Auth.tsx in return statement runs");
    const { pathname } = useParams();
    console.log(`${pathname}`);
    return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex items-center justify-center">
        <div className="max-w-md w-full">
        <AuthView pathname={pathname}/>
        </div>
    </div>
    );
} 