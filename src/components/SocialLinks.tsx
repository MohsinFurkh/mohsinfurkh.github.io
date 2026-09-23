import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

const iconLinks = [
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
  { href: site.github, label: "GitHub", Icon: Github },
  { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
];

const profileLinks = [
  { href: site.scholar, label: "Google Scholar" },
  { href: site.orcid, label: "ORCID" },
  { href: site.researchgate, label: "ResearchGate" },
];

export default function SocialLinks({
  className,
  align = "center",
}: {
  className?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "items-center" : "items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className ?? ""}`}>
      <div className="flex items-center gap-5">
        {iconLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="text-subtle transition-colors hover:text-accent"
          >
            <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </a>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.14em] text-subtle">
        {profileLinks.map((link, index) => (
          <span key={link.label} className="flex items-center gap-3">
            {index > 0 && <span aria-hidden="true">·</span>}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}
