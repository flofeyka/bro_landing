import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useVerifyMutation} from "../../../lib/api/authApi.ts";

interface IProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
}

function AdminContainer({ children, title, subtitle }: IProps) {
    const navigate = useNavigate();
    const [verify] = useVerifyMutation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log(token);
            navigate("/admin/login");
            return;
        }

        const checkToken = async () => {
            try {
                const result = await verify({ token }).unwrap();
                console.log(result);
                if (!result.valid) {
                    console.error(result)
                    localStorage.removeItem("token");
                    navigate("/admin/login");
                } else {
                    setLoading(false);
                }
            } catch(e) {
                console.error(e);
                localStorage.removeItem("token");
                navigate("/admin/login");
            }
        };

        checkToken();
    }, [navigate, verify]); // убрали loading


    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Проверка токена...</p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-5">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
            </header>

            <main>{children}</main>
        </div>
    );
}

export default AdminContainer;
