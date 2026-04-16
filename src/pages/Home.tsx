import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
    const { user, isLoading } = useAuth();

    if (user && !isLoading) {
        return <Navigate to="/dashboard" replace />;
    }
    return <div>Home Page</div>;
}