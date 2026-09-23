import { scholarMetrics } from "@/data/scholar";
import { site } from "@/data/site";

const metrics = [
  { label: "Publications", value: scholarMetrics.publications },
  { label: "Citations", value: scholarMetrics.citations },
  { label: "h-index", value: scholarMetrics.h_index },
  { label: "i10-index", value: scholarMetrics.i10_index },
];

export default function CitationStrip() {
  const byYear = scholarMetrics.citationsByYear;
  const peak = Math.max(...byYear.map((y) => y.citations), 1);

  return (
    <div className="grid items-end gap-10 sm:grid-cols-[1fr_auto]">
      <dl className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-subtle">
              {metric.label}
            </dt>
            <dd className="mt-1 font-display text-3xl text-ink">{metric.value}</dd>
          </div>
        ))}
      </dl>

      <div>
        <p className="kicker mb-3">Citations per year</p>
        <div className="flex items-end gap-2" aria-hidden="true">
          {byYear.map((year) => (
            <div key={year.year} className="flex flex-col items-center gap-2">
              <span
                className="w-6 rounded-sm bg-accent/25"
                style={{ height: `${Math.max((year.citations / peak) * 56, 3)}px` }}
              />
              <span className="text-[11px] text-subtle">
                {String(year.year).slice(2)}
              </span>
            </div>
          ))}
        </div>
        <p className="sr-only">
          {byYear.map((y) => `${y.year}: ${y.citations} citations`).join(", ")}
        </p>
      </div>

      <p className="text-[13px] text-subtle sm:col-span-2">
        Source:{" "}
        <a
          href={site.scholar}
          target="_blank"
          rel="noopener noreferrer"
          className="prose-link"
        >
          Google Scholar
        </a>
        , updated weekly.
      </p>
    </div>
  );
}
