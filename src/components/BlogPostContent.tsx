import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LogarithmicScale } from 'chart.js';
import { Bar } from 'recharts';

ChartJS.register(CategoryScale, LinearScale, LogarithmicScale, BarElement, Title, Tooltip, Legend);

interface PQCFamily {
  name: string;
  icon: string;
  description: string;
  pros: string;
  cons: string;
  algorithms: string;
}

interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

const PQCHealthcareApp: React.FC = () => {
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);
  const [chartType, setChartType] = useState<'kem' | 'signature'>('kem');
  const [activeTab, setActiveTab] = useState<string>('infrastructure');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const chartRef = useRef<any>(null);

  const pqcData: Record<string, PQCFamily> = {
    lattice: {
      name: 'Lattice-Based',
      icon: '🌐',
      description: "Based on the difficulty of solving problems on high-dimensional grids (lattices). This is one of the most promising and versatile PQC families, forming the basis for NIST's primary selected algorithms. It supports encryption, signatures, and even Homomorphic Encryption.",
      pros: 'Versatile, relatively efficient, strong security assumptions.',
      cons: 'Can have larger keys/ciphertexts than classical crypto; math is complex.',
      algorithms: 'CRYSTALS-Kyber, CRYSTALS-Dilithium'
    },
    code: {
      name: 'Code-Based',
      icon: '💻',
      description: "Derives security from the difficulty of decoding a general linear error-correcting code. One of the oldest PQC approaches, its core principles have resisted cryptanalysis for decades.",
      pros: 'Long history of study, believed to be very secure against quantum attacks.',
      cons: 'Historically very large public key sizes, though modern variants have improved this.',
      algorithms: 'Classic McEliece, HQC'
    },
    hash: {
      name: 'Hash-Based',
      icon: '⛓️',
      description: 'Relies only on the security of cryptographic hash functions (like SHA-256). These are not based on number theory problems vulnerable to Shor\'s algorithm.',
      pros: 'Security is well-understood and relies on minimal assumptions.',
      cons: 'Signatures can be large and slow to generate. Most are "stateful," though stateless versions like SPHINCS+ exist.',
      algorithms: 'SPHINCS+, LMS/HSS'
    },
    multivariate: {
      name: 'Multivariate',
      icon: '📈',
      description: 'Security comes from the difficulty of solving systems of multivariate polynomial equations over a finite field. This problem is known to be NP-complete.',
      pros: 'Can produce some of the shortest PQC signatures.',
      cons: 'Some early schemes have been broken; requires careful parameter selection.',
      algorithms: 'Rainbow (broken but influential), UOV'
    },
    isogeny: {
      name: 'Isogeny-Based',
      icon: '🔄',
      description: 'Uses the complex problem of finding a path (an isogeny) between two supersingular elliptic curves. A newer area of PQC research.',
      pros: 'Can have very small key sizes, making it attractive for constrained environments.',
      cons: 'Computationally intensive. A leading candidate (SIKE) was recently broken, highlighting the need for more research.',
      algorithms: 'CSIDH'
    }
  };

  const chartData: Record<'kem' | 'signature', ChartData> = {
    kem: {
      labels: ['CRYSTALS-Kyber', 'Classic McEliece', 'HQC'],
      datasets: [
        {
          label: 'Public Key Size (Bytes)',
          data: [1184, 524192, 4522],
          backgroundColor: 'rgba(59, 130, 246, 0.7)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1
        },
        {
          label: 'Ciphertext Size (Bytes)',
          data: [1088, 208, 9044],
          backgroundColor: 'rgba(34, 197, 94, 0.7)',
          borderColor: 'rgba(34, 197, 94, 1)',
          borderWidth: 1
        }
      ]
    },
    signature: {
      labels: ['CRYSTALS-Dilithium', 'SPHINCS+', 'Falcon'],
      datasets: [
        {
          label: 'Public Key Size (Bytes)',
          data: [1952, 64, 1793],
          backgroundColor: 'rgba(239, 68, 68, 0.7)',
          borderColor: 'rgba(239, 68, 68, 1)',
          borderWidth: 1
        },
        {
          label: 'Signature Size (Bytes)',
          data: [3293, 17088, 1280],
          backgroundColor: 'rgba(249, 115, 22, 0.7)',
          borderColor: 'rgba(249, 115, 22, 1)',
          borderWidth: 1
        }
      ]
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Custom Chart Component using Canvas API
  const PQCChart: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentData = chartData[chartType];
      const { labels, datasets } = currentData;

      // Chart dimensions
      const padding = 60;
      const chartWidth = canvas.width - 2 * padding;
      const chartHeight = canvas.height - 2 * padding;

      // Find max value for scaling (logarithmic)
      const maxValue = Math.max(...datasets.flatMap(d => d.data));
      const logMax = Math.log10(maxValue);

      // Draw bars
      const barWidth = chartWidth / (labels.length * datasets.length + labels.length);
      const barSpacing = barWidth * 0.2;

      labels.forEach((label, labelIndex) => {
        datasets.forEach((dataset, datasetIndex) => {
          const value = dataset.data[labelIndex];
          const logValue = Math.log10(Math.max(value, 1));
          const barHeight = (logValue / logMax) * chartHeight;

          const x = padding + labelIndex * (barWidth * datasets.length + barSpacing * 2) + datasetIndex * barWidth;
          const y = canvas.height - padding - barHeight;

          // Draw bar
          ctx.fillStyle = dataset.backgroundColor;
          ctx.fillRect(x, y, barWidth, barHeight);

          // Draw value on top of bar
          ctx.fillStyle = '#000';
          ctx.font = '12px Inter';
          ctx.textAlign = 'center';
          ctx.fillText(value.toLocaleString(), x + barWidth / 2, y - 5);
        });

        // Draw label
        ctx.fillStyle = '#000';
        ctx.font = '14px Inter';
        ctx.textAlign = 'center';
        const labelX = padding + labelIndex * (barWidth * datasets.length + barSpacing * 2) + (barWidth * datasets.length) / 2;
        ctx.fillText(label, labelX, canvas.height - padding + 20);
      });

      // Draw legend
      datasets.forEach((dataset, index) => {
        const legendY = 20 + index * 25;
        ctx.fillStyle = dataset.backgroundColor;
        ctx.fillRect(20, legendY, 15, 15);
        ctx.fillStyle = '#000';
        ctx.font = '14px Inter';
        ctx.textAlign = 'start';
        ctx.fillText(dataset.label, 45, legendY + 12);
      });

    }, [chartType]);

    return (
      <canvas ref={canvasRef} width={800} height={450} className="w-full h-full" />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                PQC for Healthcare
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: 'threat', label: 'The Quantum Threat' },
                  { id: 'pqc', label: 'Explore PQC' },
                  { id: 'applications', label: 'Applications' },
                  { id: 'recommendations', label: 'Recommendations' }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="relative text-gray-700 hover:text-cyan-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {[
                { id: 'threat', label: 'The Quantum Threat' },
                { id: 'pqc', label: 'Explore PQC' },
                { id: 'applications', label: 'Applications' },
                { id: 'recommendations', label: 'Recommendations' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block text-gray-700 hover:text-cyan-700 px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section id="hero" className="text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              The Quantum Countdown
            </span>
            <span className="block text-gray-800">Securing Tomorrow's Health Data, Today.</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            The digital security that protects sensitive medical images is facing an unprecedented threat from quantum computers. This interactive report explores the challenge and details the next generation of encryption—Post-Quantum Cryptography (PQC)—required to safeguard patient privacy in the new computational era.
          </p>
        </section>

        {/* Quantum Threat Section */}
        <section id="threat" className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-2">The Coming Cryptographic Break</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            This section explains the core problem: how quantum computers, with algorithms like Shor's and Grover's, will undermine the very foundation of our current digital security. The threat isn't just in the future; the "harvest now, decrypt later" strategy means data stolen today can be broken by quantum machines tomorrow, making immediate action critical for long-term data like medical records.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-center">Current Encryption Landscape</h3>
              <p className="text-gray-600 mb-6">
                Today's security relies on problems that are too hard for classical computers to solve in a reasonable time. This protects everything from online banking to patient data.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700">Asymmetric Crypto (RSA, ECC)</span>
                    <span className="text-sm font-medium text-blue-700">Secure</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Based on factoring large numbers.</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-green-700">Symmetric Crypto (AES)</span>
                    <span className="text-sm font-medium text-green-700">Secure</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-green-600 h-4 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Relies on key secrecy.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-xl border-2 border-red-400">
              <h3 className="text-xl font-semibold mb-4 text-center text-red-600">The Quantum Impact</h3>
              <p className="text-gray-600 mb-6">
                Quantum algorithms will solve these "hard" problems with astonishing speed, effectively shattering our current cryptographic protections.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-red-700">Shor's Algorithm vs. RSA/ECC</span>
                    <span className="text-sm font-medium text-red-700">Broken</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-red-600 h-4 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Exponential speedup makes factoring trivial.</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-orange-700">Grover's Algorithm vs. AES</span>
                    <span className="text-sm font-medium text-orange-700">Weakened</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-orange-500 h-4 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Quadratic speedup halves effective key strength.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PQC Exploration Section */}
        <section id="pqc" className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-2">Exploring Post-Quantum Cryptography</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-8">
            This section introduces the solution: Post-Quantum Cryptography (PQC). These are new algorithms, standardized by bodies like NIST, that are designed to be secure against both classical and quantum computers. Here, you can interactively explore the main "families" of PQC, each based on different hard mathematical problems, and compare their performance characteristics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-1 space-y-4">
              {Object.entries(pqcData).map(([key, family]) => (
                <div
                  key={key}
                  onClick={() => setSelectedFamily(key)}
                  className="bg-white/60 backdrop-blur-sm border border-white/20 p-4 rounded-lg cursor-pointer transition transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{family.icon}</span>
                    <div>
                      <h4 className="font-semibold text-lg">{family.name}</h4>
                      <p className="text-sm text-gray-600">{family.algorithms}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md min-h-[200px] flex items-center justify-center">
            {selectedFamily ? (
              <div className="text-left">
                <h3 className="font-bold text-xl mb-2">{pqcData[selectedFamily].name} Cryptography</h3>
                <p className="text-gray-700 mb-4">{pqcData[selectedFamily].description}</p>
                <div className="text-sm space-y-2">
                  <p><strong className="font-semibold text-green-600">Pros:</strong> {pqcData[selectedFamily].pros}</p>
                  <p><strong className="font-semibold text-red-600">Cons:</strong> {pqcData[selectedFamily].cons}</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Select a PQC family to see details.</p>
            )}
          </div>

          <div className="mt-12 bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-6">Performance Comparison of PQC Finalists</h3>
            <div className="flex justify-center space-x-4 mb-6">
              <button
                onClick={() => setChartType('kem')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  chartType === 'kem' 
                    ? 'bg-cyan-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Key Establishment (KEMs)
              </button>
              <button
                onClick={() => setChartType('signature')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  chartType === 'signature' 
                    ? 'bg-cyan-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Digital Signatures
              </button>
            </div>
            <div className="w-full max-w-4xl mx-auto h-96">
              <PQCChart />
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section id="applications" className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-2">Applying PQC to Medical Images</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            How do these new algorithms actually protect medical data? This section explores the primary techniques. PQC isn't typically used to encrypt every pixel of an image directly due to performance overhead. Instead, it secures the systems around the data and enables new privacy-preserving workflows.
          </p>

          <div className="w-full">
            <div className="mb-4 flex flex-wrap justify-center border-b border-gray-200">
              {[
                { id: 'infrastructure', label: 'Infrastructure Security' },
                { id: 'he', label: 'Privacy-Preserving Analysis' },
                { id: 'hybrid', label: 'Hybrid Approach' },
                { id: 'other', label: 'Other Innovations' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex-grow sm:flex-grow-0 text-center px-4 py-3 border-b-2 font-medium text-sm transition ${
                    activeTab === id
                      ? 'border-cyan-600 bg-white text-cyan-600'
                      : 'border-transparent text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md">
              {activeTab === 'infrastructure' && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Securing the Pipes, Not Just the Data</h3>
                  <p className="text-gray-600 mb-4">
                    The primary role of NIST's PQC standards is to secure the foundational infrastructure. This means protecting the communication channels (like TLS) used to transmit images and verifying the authenticity of devices and users. Think of it as building quantum-proof armor around the entire healthcare network.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg flex flex-col md:flex-row items-center justify-around gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-4xl mb-2">🏥</span>
                      <p className="font-semibold">Hospital</p>
                    </div>
                    <div className="w-full md:w-auto">
                      <p className="font-mono text-cyan-600 mb-1">CRYSTALS-Kyber (KEM)</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">🔑</div>
                        <div className="flex-grow h-1 bg-gray-300 relative">
                          <div className="absolute top-0 left-0 h-1 bg-blue-500 animate-pulse w-full"></div>
                        </div>
                        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">🔑</div>
                      </div>
                      <p className="text-xs text-gray-500">Secure Key Exchange</p>
                      
                      <p className="font-mono text-cyan-600 mt-4 mb-1">CRYSTALS-Dilithium (Signature)</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">🛡️</div>
                        <div className="flex-grow h-1 bg-gray-300"></div>
                        <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">✔️</div>
                      </div>
                      <p className="text-xs text-gray-500">Data & Device Authentication</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-4xl mb-2">☁️</span>
                      <p className="font-semibold">Cloud Storage / PACS</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'he' && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Homomorphic Encryption (HE): The Future of Privacy</h3>
                  <p className="text-gray-600 mb-4">
                    HE is a revolutionary technique, often built on PQC-secure lattice cryptography, that allows for computation directly on encrypted data. A hospital can send an encrypted medical image to a cloud AI for analysis, and the cloud provider can perform diagnostics without ever seeing the actual image, preserving patient privacy completely.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                      <div className="p-4 bg-white rounded-lg shadow">
                        <p>1. Encrypt Image</p>
                        <span className="text-4xl">🖼️ ➔ 🔒</span>
                        <p className="text-xs text-gray-500">At Hospital</p>
                      </div>
                      <div className="text-2xl font-bold text-gray-400">→</div>
                      <div className="p-4 bg-white rounded-lg shadow">
                        <p>2. Process Encrypted Data</p>
                        <span className="text-4xl">☁️ + 🧠</span>
                        <p className="text-xs text-gray-500">In Cloud AI</p>
                      </div>
                      <div className="text-2xl font-bold text-gray-400">→</div>
                      <div className="p-4 bg-white rounded-lg shadow">
                        <p>3. Return Encrypted Result</p>
                        <span className="text-4xl">📄🔒</span>
                        <p className="text-xs text-gray-500">Back to Hospital</p>
                      </div>
                      <div className="text-2xl font-bold text-gray-400">→</div>
                      <div className="p-4 bg-white rounded-lg shadow">
                        <p>4. Decrypt Result</p>
                        <span className="text-4xl">🔓 ➔ 📄</span>
                        <p className="text-xs text-gray-500">Only by Hospital</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'hybrid' && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Hybrid Approach: Best of Both Worlds</h3>
                  <p className="text-gray-600 mb-4">
                    During the transition period, a hybrid or "dual-stack" approach offers a pragmatic path forward. It combines a traditional, well-understood algorithm (like ECC) with a new PQC algorithm (like Kyber) to establish a key. The system remains secure as long as at least one of the algorithms is not broken.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg flex justify-center">
                    <div className="text-center">
                      <p className="font-semibold mb-2">Session Key Generation</p>
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 border border-blue-300 rounded-lg">
                          <p className="font-mono text-sm">ECC Key</p>
                        </div>
                        <span className="text-2xl font-bold text-gray-600">+</span>
                        <div className="p-3 bg-cyan-100 border border-cyan-300 rounded-lg">
                          <p className="font-mono text-sm">PQC Key (Kyber)</p>
                        </div>
                        <span className="text-2xl font-bold text-gray-600">=</span>
                        <div className="p-3 bg-green-100 border border-green-300 rounded-lg">
                          <p className="font-mono text-sm">Secure Shared Secret</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">
                  This combined secret is then used with an efficient symmetric cipher like AES to encrypt the bulk data (the medical image itself).
                  </p>
                </div>
              )}

              {activeTab === 'other' && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Other Quantum-Resistant Innovations</h3>
                  <p className="text-gray-600 mb-4">
                    Research is exploring other novel methods to secure medical images in the quantum era, often focusing on the unique properties of image data.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold">Chaos-Based & Deep Learning Encryption</h4>
                      <p className="text-sm text-gray-600">These techniques use unpredictable chaotic maps or AI models (like GANs) to scramble pixel data in complex ways, making the image unintelligible without the correct key or model.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold">Hash-Based Integrity on Blockchain</h4>
                      <p className="text-sm text-gray-600">Quantum-resistant hash functions (like those in SPHINCS+) can create a unique "fingerprint" of a medical image. Storing this hash on a blockchain provides an immutable, verifiable record to prove the image has not been tampered with.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section id="recommendations" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-2">The Road Ahead: Challenges & Recommendations</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            The transition to PQC is a significant undertaking with challenges in performance, cost, and interoperability with legacy systems. However, inaction is not an option. This final section outlines a strategic checklist for healthcare organizations to begin their journey towards a quantum-secure future.
          </p>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Actionable Checklist for Healthcare Organizations</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center mr-4">✓</span>
                <p><strong className="font-semibold">Conduct a Crypto Inventory:</strong> Identify all systems using vulnerable cryptography (RSA, ECC). Prioritize those protecting data with a long shelf-life, like medical records.</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center mr-4">✓</span>
                <p><strong className="font-semibold">Embrace Cryptographic Agility:</strong> Design systems that can easily swap out cryptographic algorithms. This ensures you can adapt as standards evolve or if vulnerabilities are found.</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center mr-4">✓</span>
                <p><strong className="font-semibold">Adopt Hybrid Approaches:</strong> Implement hybrid schemes as a transitional measure to ensure backward compatibility and add a layer of security.</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center mr-4">✓</span>
                <p><strong className="font-semibold">Invest in PQC Key Management:</strong> Develop robust protocols for the entire lifecycle of quantum-resistant keys: generation, storage, distribution, and rotation.</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center mr-4">✓</span>
                <p><strong className="font-semibold">Explore Privacy-Enhancing Tech (PETs):</strong> Pilot technologies like Homomorphic Encryption for use cases involving third-party data analysis and AI model training.</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center mr-4">✓</span>
                <p><strong className="font-semibold">Foster Collaboration & Stay Informed:</strong> Engage with industry partners, follow NIST updates, and prepare for evolving regulatory requirements from bodies like HIPAA and GDPR.</p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PQCHealthcareApp;
