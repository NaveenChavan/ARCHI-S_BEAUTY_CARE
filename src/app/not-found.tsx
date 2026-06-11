import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5 text-center">
      <h1 className="font-heading text-6xl font-bold text-gold md:text-8xl">
        404
      </h1>
      <p className="mt-4 text-sm text-text/60 md:text-base">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
      >
        Go Home
      </Link>
    </div>
  );
}
