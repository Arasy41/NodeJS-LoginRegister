"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Cek status login dari localStorage atau cookie
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between">
        <a href="/" className="text-xl font-bold">
          MyApp
        </a>
        <div>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <>
              <a
                href="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Login
              </a>
              <a
                href="/register"
                className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
