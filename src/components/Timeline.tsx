export type TimelineEntry = {
  date?: string;
  title: string;
  subtitle?: string;
  description?: string;
  items?: string[];
};

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="space-y-8">
      {entries.map((entry) => (
        <div
          key={entry.title + (entry.date ?? "")}
          className="grid gap-2 sm:grid-cols-[7.5rem_1fr] sm:gap-6"
        >
          <p className="pt-0.5 text-sm font-medium text-subtle">{entry.date}</p>
          <div className="border-l border-line pl-5">
            <h3 className="font-sans text-base font-semibold text-ink">
              {entry.title}
            </h3>
            {entry.subtitle && (
              <p className="mt-0.5 text-[15px]">{entry.subtitle}</p>
            )}
            {entry.description && (
              <p className="mt-2 text-[15px]">{entry.description}</p>
            )}
            {entry.items && (
              <ul className="mt-2 space-y-1.5 text-[15px]">
                {entry.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-subtle" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
