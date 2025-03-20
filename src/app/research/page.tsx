export default function Research() {
  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Research
        </h1>

        {/* Research Overview */}
        <section className="mb-16">
          <h2 className="section-title">Research Overview</h2>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              My research focuses on developing and applying deep learning techniques to medical image analysis,
              with the goal of improving healthcare outcomes through more accurate and efficient diagnosis.
            </p>
            <p className="text-lg">
              I work on various aspects of medical image analysis, including segmentation, classification,
              and feature extraction, with a particular emphasis on developing robust and interpretable
              AI systems that can be effectively integrated into clinical workflows.
            </p>
          </div>
        </section>

        {/* Current Research Projects */}
        <section className="mb-16">
          <h2 className="section-title">Current Research Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Advanced Medical Image Segmentation</h3>
              <p className="text-gray-600 mb-4">
                Developing novel deep learning architectures for precise anatomical structure
                segmentation in medical images, with a focus on improving accuracy and
                computational efficiency.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Multi-scale feature extraction</li>
                  <li>Attention mechanisms</li>
                  <li>Uncertainty quantification</li>
                  <li>Real-time processing capabilities</li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Disease Classification and Diagnosis</h3>
              <p className="text-gray-600 mb-4">
                Creating robust classification systems for early disease detection and
                diagnosis using medical imaging data, with emphasis on interpretability
                and clinical utility.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Multi-modal data integration</li>
                  <li>Explainable AI approaches</li>
                  <li>Transfer learning techniques</li>
                  <li>Clinical validation studies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-16">
          <h2 className="section-title">Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Data Collection</h3>
              <p className="text-gray-600">
                Collaborating with medical institutions to collect and curate high-quality
                medical imaging datasets for training and validation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Model Development</h3>
              <p className="text-gray-600">
                Designing and implementing deep learning architectures optimized for
                medical image analysis tasks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Clinical Validation</h3>
              <p className="text-gray-600">
                Conducting rigorous clinical studies to validate the effectiveness and
                reliability of developed solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Clinical Applications */}
        <section>
          <h2 className="section-title">Clinical Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Diagnostic Assistance</h3>
              <p className="text-gray-600">
                Developing AI-powered tools to assist healthcare professionals in making
                more accurate and timely diagnoses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Treatment Planning</h3>
              <p className="text-gray-600">
                Creating systems to help in treatment planning and monitoring patient
                progress over time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 