"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Ambil accessToken dari localStorage
    const token = localStorage.getItem("accessToken");

    if (!token) {
      // Jika tidak ada token, redirect ke halaman login
      router.push("/login");
      return;
    }

    try {
      // Decode token untuk mendapatkan informasi pengguna
      const decoded = jwtDecode(token);
      setUser(decoded);
    } catch (err) {
      setError("Failed to decode token");
    }
  }, [router]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white shadow-md rounded p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>
        <p className="text-gray-700">You are logged in as {user.email}</p>
      </div>
    </div>
  );
}
