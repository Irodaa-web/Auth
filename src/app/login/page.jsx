"use client";

import Link from "next/link";
import { useState } from "react";
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Tizimga muvaffaqiyatli kirdingiz!");

      router.push("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center px-5">
      <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full">

        {/* Left */}
        <div className="hidden md:flex flex-col justify-center bg-blue-600 text-white p-10">
          <h1 className="text-5xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-5 text-blue-100">
            Login qilib Dashboard sahifasiga o'ting.
          </p>

          <div className="mt-10 space-y-4">

            <div className="bg-white/20 p-4 rounded-lg">
              🔐 Secure Authentication
            </div>

            <div className="bg-white/20 p-4 rounded-lg">
              ⚡ Firebase Authentication
            </div>

            <div className="bg-white/20 p-4 rounded-lg">
              📱 Responsive Design
            </div>

          </div>
        </div>

        {/* Right */}
        <div className="p-10">

          <h2 className="text-4xl font-bold text-gray-800">
            Login
          </h2>

          <p className="text-gray-500 mt-2">
            Accountingizga kiring
          </p>

          <form
            onSubmit={handleLogin}
            className="space-y-5 mt-8"
          >

            <div>
              <label className="font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="example@gmail.com"
                className="mt-2 w-full rounded-lg border p-3 focus:border-blue-600 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="********"
                className="mt-2 w-full rounded-lg border p-3 focus:border-blue-600 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition">
              Login
            </button>

          </form>

          <p className="mt-6 text-center text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-blue-600 font-semibold"
            >
              Register
            </Link>
          </p>

        </div>

      </div>
    </main>
  );
}