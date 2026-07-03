import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-300">
          Next.js + Firebase Authentication
        </span>

        <h1 className="mt-6 text-5xl font-bold md:text-7xl">
          Authentication
          <span className="text-blue-400"> Dashboard</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Secure Login, Register va Dashboard tizimi.
          Firebase Authentication yordamida yaratilgan demo loyiha.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-black"
          >
            Register
          </Link>
        </div>

        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
            <div className="text-4xl">🔐</div>
            <h2 className="mt-4 text-xl font-bold">Secure Auth</h2>
            <p className="mt-2 text-gray-300">
              Firebase Authentication yordamida xavfsiz tizim.
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
            <div className="text-4xl">⚡</div>
            <h2 className="mt-4 text-xl font-bold">Fast</h2>
            <p className="mt-2 text-gray-300">
              Next.js App Router bilan tezkor ishlash.
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
            <div className="text-4xl">📱</div>
            <h2 className="mt-4 text-xl font-bold">Responsive</h2>
            <p className="mt-2 text-gray-300">
              Telefon, planshet va kompyuter uchun mos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}