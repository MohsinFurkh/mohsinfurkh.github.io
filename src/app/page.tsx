import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-96 w-64 md:w-96 mx-auto">
              <Image
                src="/images/profile_pic.jpg"
                alt="Professional headshot of Dr. Mohsin Furkh Dar"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mohsin Furkh Dar
              </h1>
              <p className="text-xl mb-4">
                Assistant Professor of Computer Science
              </p>
              <p className="text-lg mb-4">
                Department of Computer Science, University of Hyderabad
              </p>
              <p className="text-lg mb-8">
                Research Focus: Deep Learning for Medical Image Analysis
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="mailto:mohsinfaurkh@gmail.com" className="btn bg-white text-primary hover:bg-gray-100">
                  Contact Me
                </a>
                <a href="/cv.pdf" className="btn border-2 border-white text-white hover:bg-white/10">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">About Me</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg mb-6">
                I am an Assistant Professor in the Department of Computer Science at University of Hyderabad, 
                specializing in Deep Learning and Medical Image Analysis. My research focuses on developing 
                innovative artificial intelligence solutions to improve healthcare outcomes through more 
                accurate diagnostic tools and personalized treatment strategies.
              </p>
              <p className="text-lg">
                With expertise in machine learning algorithms and deep understanding of medical imaging 
                challenges, I develop novel neural network architectures that can analyze complex medical 
                images with high precision. My research spans areas like fuzzy rough set theory, multi-modal learning,
                and innovative loss functions for medical image segmentation and classification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center">Research Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Advanced Neural Networks for Medical Imaging</h3>
              <p className="text-gray-600">
                Developing state-of-the-art deep learning architectures optimized for medical image analysis,
                with a focus on self-supervised learning and uncertainty quantification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Multi-modal Data Integration</h3>
              <p className="text-gray-600">
                Creating frameworks that combine medical imaging with clinical data and genomics
                for comprehensive disease characterization and personalized treatment planning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Translational AI Research</h3>
              <p className="text-gray-600">
                Bridging the gap between algorithm development and clinical deployment by designing
                interpretable AI systems that can be effectively integrated into healthcare workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="/research" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">Research</h3>
                <p className="text-gray-600">Explore my research work</p>
              </div>
            </a>
            <a href="/publications" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">Publications</h3>
                <p className="text-gray-600">View my academic papers</p>
              </div>
            </a>
            <a href="/projects" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">Projects</h3>
                <p className="text-gray-600">Check out my projects</p>
              </div>
            </a>
            <a href="/cv.pdf" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">CV</h3>
                <p className="text-gray-600">Download my CV</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 