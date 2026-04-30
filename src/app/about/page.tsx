import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            About Me
          </h1>
          
          {/* Quick Info Card */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-primary">Dr. Mohsin Furkh Dar</h2>
                <p className="text-gray-700">Assistant Professor, School of Computer Science</p>
                <p className="text-gray-600 text-sm">UPES Dehradun | mohsin.dar@ddn.upes.ac.in</p>
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://www.upes.ac.in/faculty/school-of-computer-science/mohsin-furkh-dar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  UPES Faculty Profile
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Profile Summary</h2>
                <p className="text-lg mb-6">
                  Dr. Mohsin Furkh Dar is currently serving as an Assistant Professor in the School of Computer Science at UPES Dehradun. 
                  His academic and research work focuses on <strong>deep learning, medical image analysis</strong>, and the design of 
                  efficient and generalizable neural architectures. His doctoral contributions include 
                  <strong> EfficientU-Net, UMA-Net, fuzzy–rough set based loss functions</strong>, and 
                  <strong> SGAN</strong> frameworks for medical image segmentation and classification. 
                  He has published in <strong>SCIE-indexed journals</strong> and presented at international conferences. 
                  He also maintains an academic profile at <Link href="/" className="text-accent hover:underline">mohsinfurkh.github.io</Link>.
                </p>
                <p className="text-lg mb-6">
                  In addition to his research pursuits, Dr. Dar has significant <strong>teaching experience</strong> at both undergraduate 
                  and postgraduate levels, delivering courses in computer science, artificial intelligence, and data-driven technologies 
                  with a strong emphasis on hands-on learning. He combines theoretical model development with practical system 
                  implementation and has built AI-driven applications such as 
                  <a href="https://shifa-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline"> ShifaAI</a>. 
                  He also supervises student projects in computer vision, deep learning, and applied machine learning.
                </p>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Work Experience</h2>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-gray-900">Assistant Professor</h3>
                    <p className="text-gray-600">School of Computer Science, UPES Dehradun</p>
                    <p className="text-sm text-gray-500">July 2025 – Present</p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h3 className="font-semibold text-gray-900">Assistant Professor</h3>
                    <p className="text-gray-600">Government Degree College, Uri (Brief tenure)</p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h3 className="font-semibold text-gray-900">Teaching Assistant</h3>
                    <p className="text-gray-600">University of Hyderabad</p>
                    <p className="text-sm text-gray-500">Mentored MTech students in databases, algorithms, and AI-related projects</p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h3 className="font-semibold text-gray-900">System Administrator</h3>
                    <p className="text-gray-600">AI Lab, School of CSIS, University of Hyderabad</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Research Interests</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Deep Learning</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Computer Vision</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Medical Imaging</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Health Analytics</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Computer-Aided Diagnosis</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Medical Image Segmentation</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Medical Image Classification</span>
                </div>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Teaching Philosophy</h2>
                <p className="text-lg mb-4">
                  Dr. Dar follows a <strong>learner-centric teaching philosophy</strong> that blends strong theoretical foundations 
                  with hands-on, experiential learning. He actively incorporates collaborative learning techniques such as 
                  <strong> Think-Pair-Share, Jigsaw, structured problem-solving</strong>, and <strong>peer instruction</strong> to promote 
                  deeper understanding and student engagement.
                </p>
                <p className="text-lg mb-6">
                  His approach emphasizes conceptual clarity, reproducible experimentation, and real-world applications using 
                  authentic datasets. He integrates continuous feedback, incremental projects, and reflective learning practices 
                  to help students develop analytical thinking, practical engineering skills, and independent research capability.
                </p>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Courses Taught</h2>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">Discrete Mathematics</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">Data Structures and Algorithms</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">Database Systems</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">C Programming</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Education</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">PhD in Deep Learning for Medical Imaging</h3>
                    <p className="text-gray-600">[University of Hyderabad], [2020] - [2025]</p>
                    <p className="mt-1">Thesis: "Advances in Deep Learning for Medical Image Segmentation and Classification"</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">MPhill. [Computer Science]</h3>
                    <p className="text-gray-600">[Mewar University], [2018] - [2019]</p>
                    <p className="mt-1">Thesis: "Performance Comparision of Face Detection and Recognition Algorithms"</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">MCA [Computer Application]</h3>
                    <p className="text-gray-600">[University of Kashmir], [2013] - [2016]</p>
                    <p className="mt-1">Dissertation: "SMS Intimation System for Online Leave Management."</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">BSc [Information Technology with Mathematics and Physics]</h3>
                    <p className="text-gray-600">[University of Kashmir], [2010] - [2013]</p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Awards and Grants</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-gray-700">
                    <strong>UGC NET with Junior Research Fellowship (JRF)</strong> — December 2019, 
                    Computer Science and Applications, <strong>All India Rank 53</strong>
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Scholarly Activities</h2>
                <p className="text-lg mb-6">
                  Dr. Dar has contributed to peer-reviewed research in medical image analysis, deep learning, and 
                  fuzzy–rough set based learning methods. His work includes <strong>SCIE and Scopus-indexed</strong> journal 
                  publications on neural network architectures, ensemble-based classification, and evolutionary feature selection. 
                  He has presented his findings at international conferences, including <strong>ICCCNet</strong>, and has attended 
                  multiple specialized workshops on MRI, EEG, and NLP research. He has also mentored graduate and undergraduate 
                  research projects involving deep learning, image processing, and applied machine learning.
                </p>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Research IDs</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  <a href="https://scholar.google.com/citations?user=DGm9l2wAAAAJ" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <p className="text-xs text-gray-500">Google Scholar</p>
                    <p className="font-medium text-gray-800">DGm9l2wAAAAJ</p>
                  </a>
                  <a href="https://orcid.org/0000-0003-1756-9087" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <p className="text-xs text-gray-500">ORCID</p>
                    <p className="font-medium text-gray-800">0000-0003-1756-9087</p>
                  </a>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500">Vidwan ID</p>
                    <p className="font-medium text-gray-800">638631</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500">Scopus ID</p>
                    <p className="font-medium text-gray-800">58484416800</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500">Researcher ID</p>
                    <p className="font-medium text-gray-800">KIB-9833-2024</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">AI/ML & Research</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>Python, PyTorch, TensorFlow</li>
                      <li>Medical Imaging (DICOM, NIfTI)</li>
                      <li>Computer Vision & Deep Learning</li>
                      <li>Algorithm Development</li>
                      <li>Data Analysis & Visualization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tools & Platforms</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>Git, GitHub, GitLab</li>
                      <li>Docker, Kubernetes</li>
                      <li>AWS, GCP, Vercel</li>
                      <li>CI/CD Pipelines</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
                <img 
                  src="/images/Pic.jpg" 
                  alt="Profile Photo"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold">Contact Information</h3>
                  <p className="text-gray-600">mohsin.dar@ddn.upes.ac.in</p>
                  <p className="text-gray-600">Assistant Professor</p>
                  <p className="text-gray-600">School of Computer Science</p>
                  <p className="text-gray-600">UPES Dehradun, India</p>
                  <a 
                    href="https://www.upes.ac.in/faculty/school-of-computer-science/mohsin-furkh-dar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm hover:underline mt-2 inline-block"
                  >
                    View UPES Faculty Profile →
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold">Social Media</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://scholar.google.com/citations?user=DGm9l2wAAAAJ" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                      <span className="sr-only">Google Scholar</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/mohsinfurkh/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/mohsinfurkh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                      <span className="sr-only">GitHub</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://www.researchgate.net/profile/Mohsin-Furkh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                      <span className="sr-only">ResearchGate</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.586 0H4.414C1.973 0 0 1.973 0 4.414v15.172C0 22.027 1.973 24 4.414 24h15.172C22.027 24 24 22.027 24 19.586V4.414C24 1.973 22.027 0 19.586 0zM13.662 14.292v-3.586h1.253c.611 0 1.106.498 1.106 1.112v1.362c0 .613-.495 1.112-1.106 1.112h-1.253zm-7.246.448h3.586v-1.25h-1.245v-2.013h1.25V10.23h-1.25V8.217h1.245V6.966H6.416v7.774zm11.85-1.692c0 1.225-1.007 2.229-2.236 2.229h-2.961V10.23h1.248v3.586h1.713c.289 0 .53-.238.53-.53v-3.056h1.236v2.818h.47zm-8.428-5.997v4.99h1.255v-4.99h-1.255z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
