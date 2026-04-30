import Link from 'next/link';

export default function TeachingPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Teaching</h1>
            <p className="text-xl text-gray-600">
              Assistant Professor, School of Computer Science, UPES Dehradun
            </p>
          </div>

          {/* Teaching Philosophy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Teaching Philosophy</h2>
            <div className="bg-blue-50 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                My teaching approach is learner-centric, designed to foster active engagement and deep understanding. 
                I employ evidence-based pedagogical techniques including Think-Pair-Share discussions, Jigsaw collaborative 
                learning, and peer instruction to create an inclusive and dynamic classroom environment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I believe in connecting theoretical concepts to real-world applications, particularly in demonstrating 
                how fundamental computer science principles underpin cutting-edge AI and machine learning systems. 
                This approach helps students appreciate the relevance of foundational subjects like Discrete Mathematics, 
                Data Structures, and Algorithms to modern technological innovations.
              </p>
            </div>
          </section>

          {/* Current Courses */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Current Courses (2025–present)</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Course</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Level</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Institution</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Discrete Mathematics</td>
                    <td className="px-6 py-4 text-gray-600">BSc CS Year 2</td>
                    <td className="px-6 py-4 text-gray-600">Government Degree College Uri, Baramulla</td>
                    <td className="px-6 py-4 text-gray-600">2020</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-6 py-4 font-medium text-gray-900">Data Structures & Algorithms</td>
                    <td className="px-6 py-4 text-gray-600">BSc CS Year 2</td>
                    <td className="px-6 py-4 text-gray-600">Government Degree College Uri, Baramulla</td>
                    <td className="px-6 py-4 text-gray-600">2020</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Database Systems</td>
                    <td className="px-6 py-4 text-gray-600">M.Tech Year 1</td>
                    <td className="px-6 py-4 text-gray-600">UPES Dehradun</td>
                    <td className="px-6 py-4 text-gray-600">2025</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-6 py-4 font-medium text-gray-900">C Programming</td>
                    <td className="px-6 py-4 text-gray-600">B.Tech Year 1</td>
                    <td className="px-6 py-4 text-gray-600">UPES Dehradun</td>
                    <td className="px-6 py-4 text-gray-600">2025</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-6 py-4 font-medium text-gray-900">Python Programming</td>
                    <td className="px-6 py-4 text-gray-600">B.Tech Year 1</td>
                    <td className="px-6 py-4 text-gray-600">UPES Dehradun</td>
                    <td className="px-6 py-4 text-gray-600">2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Student Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Student Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Academic Portal</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Access lecture slides, notes, assignments, and additional learning materials for all courses.
                </p>
                <a 
                  href="https://mohsinfurkh.github.io/academic-portal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 font-semibold hover:underline"
                >
                  Visit Academic Portal
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Research Opportunities</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Interested in research? Learn about internship opportunities in the MedVIS Lab.
                </p>
                <Link 
                  href="/lab#join" 
                  className="inline-flex items-center text-blue-600 font-semibold hover:underline"
                >
                  Join the Lab
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Mentorship */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Mentorship</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                I actively supervise undergraduate and postgraduate project work in areas related to deep learning, 
                computer vision, and medical image analysis. Students interested in pursuing research projects or 
                seeking guidance for higher studies are welcome to reach out.
              </p>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>For consultations: </span>
                <a href="mailto:mohsin.dar@ddn.upes.ac.in" className="text-accent font-semibold hover:underline">
                  mohsin.dar@ddn.upes.ac.in
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
