import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            About Me
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  I am a PhD researcher specializing in Deep Learning for Medical Imaging, with a passion for developing innovative AI solutions that bridge the gap between cutting-edge research and clinical applications. My work focuses on medical image segmentation, classification, and analysis, with a particular emphasis on improving diagnostic accuracy and efficiency in healthcare.
                </p>
                
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Research Focus</h2>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Deep learning architectures for medical image analysis</li>
                  <li>Efficient neural network design for resource-constrained environments</li>
                  <li>Interpretable AI for clinical decision support</li>
                  <li>Multi-modal medical image fusion and analysis</li>
                </ul>
                
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
                
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Web Development</h3>
                    <ul className="space-y-1">
                      <li>Next.js, React, TypeScript</li>
                      <li>Node.js, Express, MongoDB</li>
                      <li>Tailwind CSS, Headless UI</li>
                      <li>Authentication (NextAuth, JWT)</li>
                      <li>RESTful APIs, GraphQL</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">AI/ML & Research</h3>
                    <ul className="space-y-1">
                      <li>Python, PyTorch, TensorFlow</li>
                      <li>Medical Imaging (DICOM, NIfTI)</li>
                      <li>Computer Vision & Deep Learning</li>
                      <li>Algorithm Development</li>
                      <li>Data Analysis & Visualization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tools & Platforms</h3>
                    <ul className="space-y-1">
                      <li>Git, GitHub, GitLab</li>
                      <li>Docker, Kubernetes</li>
                      <li>AWS, GCP, Vercel</li>
                      <li>CI/CD Pipelines</li>
                      <li>Agile/Scrum Methodologies</li>
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
                  <p className="text-gray-600">mohsinfurkh@gmail.com</p>
                  <p className="text-gray-600">University of Hyderabad</p>
                  <p className="text-gray-600">Hyderabad, India</p>
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
