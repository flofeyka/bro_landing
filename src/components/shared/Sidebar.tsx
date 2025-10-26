import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Sidebar() {
  const [isCollapse, setIsCollapse] = useState(false);

  const handleLogout = () => {
    // Ваш код для выхода из системы
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Боковое меню */}
      <div
        className={`bg-gray-800 text-white transition-all duration-300 ${
          isCollapse ? "w-20" : "w-64"
        }`}
      >
        {/* Заголовок */}
        <div className="p-4 flex items-center justify-between">
          <h1
            className={`font-bold text-xl transition-opacity duration-300 ${
              isCollapse ? "opacity-0" : "opacity-100"
            }`}
          >
            BRO
          </h1>
          {!isCollapse && (
            <button
              onClick={() => setIsCollapse(!isCollapse)}
              className="text-white p-1 rounded hover:bg-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Элементы навигации */}
        <div className="mt-5">
          <Link
            to="/admin/text"
            // exact="true"
            className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span
              className={`ml-3 transition-opacity duration-300 ${
                isCollapse ? "opacity-0" : "opacity-100"
              }`}
            >
              Управление текстом
            </span>
          </Link>
        </div>

        <div
          onClick={handleLogout}
          className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer mt-8 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span
            className={`ml-3 transition-opacity duration-300 ${
              isCollapse ? "opacity-0" : "opacity-100"
            }`}
          >
            Выход
          </span>
        </div>
      </div>

      {/* Floating expand button (shown when sidebar is collapsed) */}
      {isCollapse && (
        <div className="fixed top-6 left-6 z-50">
          <button
            onClick={() => setIsCollapse(false)}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Основной контент */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Верхняя панель */}
        <header className="bg-white shadow">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Админ-панель BRO-Company
            </h2>
          </div>
        </header>

        {/* Основной контент страницы */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
