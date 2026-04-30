import Link from 'next/link';

export default function LabPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Lab Header */}
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Biomedical Imaging & AI Laboratory</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
              MedVIS Lab
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Medical Vision & Intelligence Systems
            </p>
          </div>

          {/* Recruiting Banner */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 mb-12 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 rounded-full p-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">We are recruiting!</h2>
                  <p className="text-green-100">Looking for motivated B.Tech students to join as research interns</p>
                </div>
              </div>
              <a 
                href="#join" 
                className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors whitespace-nowrap"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Mission Statement */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Mission</h2>
            <div className="bg-blue-50 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                The MedVIS Lab at UPES Dehradun develops data-efficient and interpretable deep learning systems 
                for clinical medical image analysis. Our work spans novel segmentation architectures, adaptive 
                loss function design, and explainable classification for breast ultrasound, gastrointestinal, and 
                brain imaging modalities. We prioritise methods that generalise across devices and institutions, 
                making high-accuracy AI diagnostics viable in low-resource clinical environments.
              </p>
            </div>
          </section>

          {/* Research Themes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Research Themes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Theme 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Efficient Architectures</h3>
                <p className="text-gray-600 mb-4">
                  Lightweight encoder-decoder networks for real-time clinical deployment
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Papers:</span> EfficientU-Net, MSCT-Trans, FAB-Net
                </div>
              </div>

              {/* Theme 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Loss Function Innovation</h3>
                <p className="text-gray-600 mb-4">
                  Adaptive and uncertainty-aware training objectives for class-imbalanced medical data
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Papers:</span> UMA-Net, DyWAEn, FRS Loss
                </div>
              </div>

              {/* Theme 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Interpretable Classification</h3>
                <p className="text-gray-600 mb-4">
                  Explainability-first models that generalise across imaging domains
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Papers:</span> SGAN, GA-Ensemble, MSCT-Trans
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Team</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Role</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Research Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Dr. Mohsin Furkh Dar</td>
                    <td className="px-6 py-4 text-gray-600">Lab Director, Assistant Professor</td>
                    <td className="px-6 py-4 text-gray-600">Medical image segmentation, loss function design, interpretable AI</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-6 py-4 font-medium text-gray-500 italic">[MTech Student Name]</td>
                    <td className="px-6 py-4 text-gray-500 italic">MTech Research Scholar (Co-supervised)</td>
                    <td className="px-6 py-4 text-gray-500 italic">[Her research area]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Join the Lab */}
          <section id="join" className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Open Positions — Recruiting B.Tech Students</h2>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg text-gray-700 mb-8">
                We are looking for motivated B.Tech students (CSE, IT, or related) to join as research interns. 
                No prior research experience is required — curiosity, consistency, and willingness to learn are 
                what matter most.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* What you will gain */}
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    What you will gain
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      Hands-on experience with published deep learning research
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      Opportunity to co-author a paper (for strong contributors)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      Letter of recommendation for higher studies or placements
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      Mentorship in academic research methods and scientific writing
                    </li>
                  </ul>
                </div>

                {/* What we expect */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    What we expect
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      Basic Python programming (even introductory level is fine)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      6–8 hours per week commitment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      Attend weekly lab meetings
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      Willingness to read one research paper per week
                    </li>
                  </ul>
                </div>
              </div>

              {/* Entry-level tasks */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Entry-level tasks available</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-700">Dataset annotation and preprocessing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-700">Literature review and summarisation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-700">Code reproduction of baseline papers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-700">Experiment logging and result tracking</span>
                  </div>
                </div>
              </div>

              {/* Application Instructions */}
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-3">How to Apply</h3>
                <p className="text-gray-700 mb-4">
                  Email <a href="mailto:mohsin.dar@ddn.upes.ac.in" className="text-accent font-semibold hover:underline">mohsin.dar@ddn.upes.ac.in</a> with subject <strong>"Lab Internship Application"</strong>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Attach:</span> A brief paragraph about why you want to do research, and your latest transcript.
                </p>
              </div>
            </div>
          </section>

          {/* Research Translation - ShifaAI */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Research Translation</h2>
            <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-500">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-700 mb-3">ShifaAI</h3>
                  <p className="text-gray-700 mb-4">
                    Translating lab research into real-world clinical diagnostic tools. ShifaAI is an AI-powered 
                    healthcare platform providing automated medical image analysis and intelligent clinical 
                    decision support.
                  </p>
                  <a 
                    href="https://shifa-ai.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Explore ShifaAI
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
