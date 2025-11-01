import React from "react";
import {useLoginMutation} from "../../../lib/api/authApi.ts";
import {useNavigate} from "react-router-dom";

export default function Auth() {
    const [login, setLogin] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [error, setError] = React.useState<string>("");
    const navigate = useNavigate()

    const [loginMutation, { isLoading }] = useLoginMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const data = await loginMutation({ login, password }).unwrap();
            localStorage.setItem("token", data.token);
            navigate('/admin')
        } catch (err: any) {
            setError(err?.data?.message || "Ошибка входа");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-sm"
            >
                <h1 className="text-2xl font-bold mb-6 text-center">Вход</h1>

                {error && <div className="mb-4 text-red-500 text-sm text-center">{error}</div>}

                <input
                    type="text"
                    placeholder="Логин"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    className="w-full border mb-4 px-3 py-2 rounded focus:outline-none"
                    required
                />

                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border mb-6 px-3 py-2 rounded focus:outline-none"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    disabled={isLoading}
                >
                    {isLoading ? "Вход..." : "Войти"}
                </button>
            </form>
        </div>
    );
}
