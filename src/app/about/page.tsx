import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
import Timeline from "@/components/Timeline";
import { scholarMetrics } from "@/data/scholar";
import { site } from "@/data/site";
import {
  appointments,
  awards,
  courses,
  coursesAssisted,
  education,
  grants,
  presentations,
  researchIds,
  reviewerFor,
  skills,
} from "@/data/cv";

export const metadata: Metadata = {
  title: "About & CV",
  description:
    "Biography, academic appointments, education, teaching, grants, awards and service of Mohsin Furkh Dar.",
};

const profileMetrics = [
  { label: "Publications", value: scholarMetrics.publications },
  { label: "Citations", value: scholarMetrics.citations },
  { label: "h-index", value: scholarMetrics.h_index },
  { label: "i10-index", value: scholarMetrics.i10_index },
];

export default function About() {
  return (
    <>
      <section className="container animate-rise pt-20 pb-16 text-center sm:pt-24">
        <Image
          src="/images/profile_pic.jpg"
          alt={site.name}
          width={220}
          height={280}
          priority
          className="mx-auto mb-10 h-[280px] w-[220px] rounded-sm object-cover"
        />
        <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
          {site.name}
        </h1>
        <p className="kicker mt-4">{site.kicker}</p>

        <div className="mx-auto mt-8 max-w-[38rem] space-y-5 text-left">
          <p>
            I am an Assistant Professor in the School of Computer Science at{" "}
            <a
              href={site.facultyProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="prose-link"
            >
              UPES Dehradun
            </a>
            , on the Research Faculty track. I develop deep learning methods for
            ultrasound image analysis that treat ambiguity — at lesion
            boundaries and across datasets — as a signal rather than noise, so
            that models stay reliable on the small, heterogeneous datasets
            typical of point-of-care imaging.
          </p>
          <p>
            My doctoral work at the University of Hyderabad introduced a fuzzy
            rough set loss (<em>Computerized Medical Imaging and Graphics</em>,
            2026) and an adaptive ensemble loss (<em>Med. Biol. Eng.
            Comput.</em>, 2025) for segmentation, and efficient, interpretable
            classifiers for breast ultrasound (<em>Neural Processing
            Letters</em>, 2023; <em>Image and Vision Computing</em>, 2024;{" "}
            <em>BSPC</em>, 2026). At UPES I extended this work to breast,
            thyroid and fetal ultrasound as first and corresponding author of{" "}
            <em>MSCT-Trans</em> (<em>Ultrasound in Medicine &amp; Biology</em>,
            2026), written without my doctoral advisor.
          </p>
          <p>
            Next, I plan to extend uncertainty-aware learning to maternal–fetal
            ultrasound. I teach B.Tech. and M.Tech. courses and supervise student projects in
            computer vision and applied machine learning.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="/cv.pdf" className="pill pill-filled">
            Download CV (PDF)
          </a>
          <a
            href={site.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="pill"
          >
            Google Scholar
          </a>
        </div>

        <dl className="mx-auto mt-14 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
          {profileMetrics.map((metric) => (
            <div key={metric.label}>
              <dt className="kicker">{metric.label}</dt>
              <dd className="mt-1 font-display text-3xl text-ink">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container py-16">
        <SectionHeading id="education">Education</SectionHeading>
        <Timeline entries={education} />
      </section>

      <section className="container py-16">
        <SectionHeading id="experience">Experience</SectionHeading>
        <Timeline entries={appointments} />
      </section>

      <section className="container py-16">
        <SectionHeading id="teaching">Teaching</SectionHeading>
        <div className="space-y-6">
          <p>
            My teaching is learner-centric: Think-Pair-Share discussion, Jigsaw
            collaborative learning and peer instruction, built around conceptual
            clarity, reproducible experimentation and real datasets. I try to
            show students how foundational subjects — discrete mathematics, data
            structures, algorithms — underpin the AI systems they read about.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[15px]">
              <thead>
                <tr className="border-b border-line">
                  <th className="kicker py-3 pr-4 font-semibold">Course</th>
                  <th className="kicker py-3 pr-4 font-semibold">Level</th>
                  <th className="kicker py-3 pr-4 font-semibold">Institution</th>
                  <th className="kicker py-3 font-semibold">Year</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.course + course.period} className="border-b border-line/60">
                    <td className="py-3 pr-4 font-medium text-ink">
                      {course.course}
                    </td>
                    <td className="py-3 pr-4">{course.level}</td>
                    <td className="py-3 pr-4">{course.institution}</td>
                    <td className="py-3 text-subtle">{course.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[15px]">
            <span className="font-semibold text-ink">Courses assisted</span> at
            the University of Hyderabad: {coursesAssisted.join(", ")}.
          </p>

          <p className="text-[15px]">
            Lecture slides, notes and assignments live on the{" "}
            <a
              href="https://mohsinfurkh.github.io/academic-portal/"
              target="_blank"
              rel="noopener noreferrer"
              className="prose-link"
            >
              Academic Portal
            </a>
            ; talks, MCQs and research presentations are collected{" "}
            <a
              href="https://mohsinfurkh.github.io/Presentations/"
              target="_blank"
              rel="noopener noreferrer"
              className="prose-link"
            >
              here
            </a>
            . Students interested in project supervision or research work are
            welcome to{" "}
            <a href={`mailto:${site.email}`} className="prose-link">
              get in touch
            </a>
            .
          </p>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading id="grants">Grants &amp; Funding</SectionHeading>
        <Timeline entries={grants} />
      </section>

      <section className="container py-16">
        <SectionHeading id="awards">Awards &amp; Honours</SectionHeading>
        <Timeline entries={awards} />
      </section>

      <section className="container py-16">
        <SectionHeading id="service">Service</SectionHeading>
        <div className="space-y-8">
          <div>
            <h3 className="font-sans text-base font-semibold text-ink">
              Journal reviewer
            </h3>
            <ul className="mt-3 grid gap-x-8 gap-y-2 text-[15px] sm:grid-cols-2">
              {reviewerFor.map((journal) => (
                <li key={journal} className="flex gap-2.5">
                  <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-subtle" />
                  <span>{journal}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-base font-semibold text-ink">
              Open science
            </h3>
            <p className="mt-1 text-[15px]">
              Code for six publications is public on{" "}
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="prose-link"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading id="presentations">
          Presentations &amp; Training
        </SectionHeading>
        <Timeline entries={presentations} />
      </section>

      <section className="container py-16">
        <SectionHeading id="skills">Skills</SectionHeading>
        <div className="grid gap-10 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="kicker">{group.group}</h3>
              <ul className="mt-4 space-y-2 text-[15px]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading id="contact">Contact</SectionHeading>
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="space-y-1 text-[15px]">
            <p className="font-semibold text-ink">{site.name}</p>
            <p>{site.role}</p>
            <p>{site.institution}</p>
            <p>
              <a href={`mailto:${site.email}`} className="prose-link">
                {site.email}
              </a>
            </p>
            <p>
              <a
                href={site.facultyProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="prose-link"
              >
                UPES faculty profile{" "}
                <ArrowUpRight className="inline h-3.5 w-3.5" />
              </a>
            </p>
            <SocialLinks className="pt-4" />
          </div>

          <dl className="space-y-3 text-[15px]">
            <p className="kicker">Research IDs</p>
            {researchIds.map((id) => (
              <div key={id.label} className="flex justify-between gap-4 border-b border-line/60 pb-2">
                <dt className="text-subtle">{id.label}</dt>
                <dd className="text-right">
                  {id.href ? (
                    <a
                      href={id.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="prose-link"
                    >
                      {id.value}
                    </a>
                  ) : (
                    id.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
