import React from 'react';

export default function BlogPostContent() {
  return (
    <div className="space-y-6">
      <section id="threat" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Coming Cryptographic Break</h2>
        <p className="text-gray-700 mb-6">
          This section explains the core problem: how quantum computers, with algorithms like Shor's and Grover's, will undermine the very foundation of our current digital security. The threat isn't just in the future; the "harvest now, decrypt later" strategy means data stolen today can be broken by quantum machines tomorrow, making immediate action critical for long-term data like medical records.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold mb-3 text-red-600">Current Encryption</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Relies on RSA, ECC, and AES</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Vulnerable to quantum attacks</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Medical data at risk</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-200">
            <h3 className="text-lg font-semibold mb-3 text-green-600">Post-Quantum Solution</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Quantum-resistant algorithms</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Secure against quantum attacks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Future-proof medical data</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pqc" className="scroll-mt-20 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Exploring Post-Quantum Cryptography</h2>
        <p className="text-gray-700 mb-6">
          This section introduces the solution: Post-Quantum Cryptography (PQC). These are new algorithms, standardized by bodies like NIST, that are designed to be secure against both classical and quantum computers. Here, you can interactively explore the main "families" of PQC, each based on different hard mathematical problems, and compare their performance characteristics.
        </p>
        
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md font-medium text-sm hover:bg-blue-200 transition-colors">
              Lattice-based
            </button>
            <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-md font-medium text-sm hover:bg-blue-100 transition-colors">
              Hash-based
            </button>
            <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-md font-medium text-sm hover:bg-blue-100 transition-colors">
              Code-based
            </button>
            <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-md font-medium text-sm hover:bg-blue-100 transition-colors">
              Multivariate
            </button>
          </div>
          
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
            Performance comparison chart will be displayed here
          </div>
        </div>
      </section>

      <section id="applications" className="scroll-mt-20 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Applying PQC to Medical Images</h2>
        <p className="text-gray-700 mb-6">
          How do these new algorithms actually protect medical data? This section explores the primary techniques. PQC isn't typically used to encrypt every pixel of an image directly due to performance overhead. Instead, it secures the systems around the data and enables new privacy-preserving workflows.
        </p>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button className="px-4 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-500">
                Infrastructure Security
              </button>
              <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300">
                Privacy-Preserving Analysis
              </button>
              <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300">
                Hybrid Approach
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Securing the Pipes, Not Just the Data</h3>
            <p className="text-gray-700 mb-4">
              The primary role of NIST's PQC standards is to secure the foundational infrastructure. This means protecting the communication channels (like TLS) used to transmit images and verifying the authenticity of devices and users. Think of it as building quantum-proof armor around the entire healthcare network.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-medium text-blue-800 mb-2">Example Workflow:</h4>
              <ol className="list-decimal list-inside space-y-2 text-blue-700">
                <li>Medical image is captured at the source</li>
                <li>PQC secures the transmission to the server</li>
                <li>Encrypted storage with quantum-safe algorithms</li>
                <li>Secure access control for authorized personnel</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="recommendations" className="scroll-mt-20 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Road Ahead: Challenges & Recommendations</h2>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                The transition to post-quantum cryptography presents several challenges that healthcare organizations must address.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Challenges</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700">Performance overhead of PQC algorithms</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700">Legacy system compatibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-700">Standardization and implementation complexity</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommendations</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span className="text-gray-700">Start with a cryptographic inventory</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span className="text-gray-700">Adopt hybrid cryptography during transition</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span className="text-gray-700">Train staff on quantum security risks</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Action Plan</h3>
          <ol className="space-y-2">
            <li className="flex items-start">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">1</span>
              <span className="text-gray-700">Assess current cryptographic systems</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">2</span>
              <span className="text-gray-700">Prioritize systems for PQC migration</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">3</span>
              <span className="text-gray-700">Implement hybrid solutions</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">4</span>
              <span className="text-gray-700">Monitor NIST standards and update accordingly</span>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
