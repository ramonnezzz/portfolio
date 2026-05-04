import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-5 text-center text-white">
      <div>
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-mint">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold">Página não encontrada</h1>
        <Link
          className="mt-8 inline-flex border border-cyan px-4 py-2.5 text-sm font-semibold text-cyan transition hover:bg-cyan hover:text-ink focus:outline-none focus:ring-2 focus:ring-cyan"
          href="/"
        >
          Voltar para home
        </Link>
      </div>
    </main>
  );
}
