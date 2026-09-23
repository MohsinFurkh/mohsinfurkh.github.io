import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container py-32 text-center">
      <p className="kicker">404</p>
      <h1 className="mt-4 font-display text-4xl tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mx-auto mt-6 max-w-[30rem]">
        That page doesn&apos;t exist, or it moved during the site redesign.
      </p>
      <p className="mt-8">
        <Link href="/" className="pill pill-filled">
          Return home
        </Link>
      </p>
    </section>
  );
}
