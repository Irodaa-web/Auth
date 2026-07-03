"use client";

import Link from "next/link";
import { useState } from "react";
import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      alert("Ro'yxatdan o'tish muvaffaqiyatli!");

     router.push("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center px-5">
      <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full">

        {/* Left */}
        <div className="hidden md:flex flex-col justify-center bg-green-600 text-white p-10">
          <h1 className="text-5xl font-bold">
            Create Account 🚀
          </h1>

          <p className="mt-5 text-green-100">
            Yangi hisob yarating va Dashboard'dan foydalanishni boshlang.
          </p>

          <div className="mt-10 space-y-4">
            <div className="bg-white/20 p-4 rounded-lg">
              👤 Create Profile
            </div>

            <div className="bg-white/20 p-4 rounded-lg">
              🔒 Secure Authentication
            </div>

            <div className="bg-white/20 p-4 rounded-lg">
              ⚡ Firebase Powered
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="p-10">

          <h2 className="text-4xl font-bold text-gray-800">
            Register
          </h2>

          <p className="text-gray-500 mt-2">
            Yangi akkaunt yarating
          </p>

          <form onSubmit={handleRegister} className="space-y-5 mt-8">

            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                placeholder="Iroda"
                className="mt-2 w-full rounded-lg border p-3 outline-none focus:border-green-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="mt-2 w-full rounded-lg border p-3 outline-none focus:border-green-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                placeholder="********"
                className="mt-2 w-full rounded-lg border p-3 outline-none focus:border-green-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="w-full rounded-lg bg-green-600 py-3 text-white font-semibold hover:bg-green-700 transition">
              Register
            </button>

          </form>

          <p className="mt-6 text-center text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-green-600 font-semibold"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}