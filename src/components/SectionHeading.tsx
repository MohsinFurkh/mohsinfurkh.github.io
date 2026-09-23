export default function SectionHeading({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className="mb-12 flex items-center gap-5">
      <span className="h-px flex-1 bg-line" />
      <h2 className="text-center font-display text-xl uppercase tracking-[0.18em] text-ink sm:text-2xl">
        {children}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
