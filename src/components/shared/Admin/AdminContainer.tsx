import React from "react";

interface IProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
}

function AdminContainer({children, title, subtitle}: IProps) {
    return <div className={"p-6 max-w-7xl mx-auto space-y-5"}>
        <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="text-lg text-gray-600">
                {subtitle}
            </p>
        </header>

        <main>
            {children}
        </main>
    </div>
}

export default AdminContainer;