"use client";

import { auth } from "@/firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/login");
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  async function handleLogout() {
    await signOut(auth);
    router.push("/login");
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <nav className="bg-white shadow px-8 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </nav>

      <div className="max-w-7xl mx-auto p-8">

        {/* Welcome */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white p-8">

          <h2 className="text-4xl font-bold">
            Welcome 👋
          </h2>

          <p className="mt-3 text-lg">
            {user.displayName || "User"}
          </p>

          <p>
            {user.email}
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
            <h3 className="text-gray-500">Projects</h3>
            <p className="text-4xl font-bold mt-4">12</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
            <h3 className="text-gray-500">Messages</h3>
            <p className="text-4xl font-bold mt-4">28</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
            <h3 className="text-gray-500">Tasks</h3>
            <p className="text-4xl font-bold mt-4">7</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
            <h3 className="text-gray-500">Status</h3>
            <p className="text-2xl font-bold mt-4 text-green-600">
              Active
            </p>
          </div>

        </div>

        {/* Profile */}
        <div className="bg-white rounded-xl shadow p-8 mt-10">

          <h2 className="text-2xl font-bold mb-6">
            Account Information
          </h2>

          <div className="space-y-3">

            <p>
              <span className="font-semibold">
                Name:
              </span>{" "}
              {user.displayName}
            </p>

            <p>
              <span className="font-semibold">
                Email:
              </span>{" "}
              {user.email}
            </p>

            <p>
              <span className="font-semibold">
                UID:
              </span>{" "}
              {user.uid}
            </p>

            <p>
              <span className="font-semibold">
                Email Verified:
              </span>{" "}
              {user.emailVerified ? "Yes ✅" : "No ❌"}
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}