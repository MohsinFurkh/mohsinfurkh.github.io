import Link from 'next/link';

export default function Research() {
  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Research
        </h1>

        {/* Featured Research */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-primary mb-6">
            PhD Thesis: Advances in Deep Learning for Medical Image Segmentation and Classification
          </h2>
          
          <div className="prose prose-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Overview</h3>
            <p className="text-lg mb-6">
              My doctoral research addressed critical challenges in medical image analysis through the development of innovative deep learning architectures and methodologies. The work focused on improving accuracy, computational efficiency, and generalization capabilities of AI models for medical diagnostics, with particular emphasis on breast ultrasound imaging and tumor detection.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Key Research Contributions</h3>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-primary mb-3">1. EfficientU-Net: Parameter-Optimized Medical Image Segmentation</h4>
                <p className="mb-3">
                  Developed a novel U-Net variant that integrates depthwise separable convolutions and atrous convolution blocks to address the limitations of standard convolutions in medical image segmentation.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li><span className="font-medium">100x reduction</span> in computational parameters compared to traditional U-Net</li>
                  <li>Enhanced boundary localization accuracy for tumor segmentation</li>
                  <li>Adaptive receptive field handling for varying tumor shapes and sizes</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-primary mb-3">2. UMA-Net with Adaptive Loss Functions</h4>
                <p className="mb-3">
                  Created an enhanced U-Net architecture featuring residual connections, attention mechanisms, and bottleneck atrous convolutions, coupled with a dynamic ensemble loss function.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Multi-scale contextual information capture without spatial resolution compromise</li>
                  <li>Adaptive loss weighting that dynamically balances region overlap and boundary accuracy</li>
                  <li>Superior generalization across five diverse breast ultrasound datasets (BUET, BUSI, Mendeley, OMI, UDIAT)</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-primary mb-3">3. Saliency-Guided AttentionNet (SGAN)</h4>
                <p className="mb-3">
                  Designed a dual-branch architecture leveraging Grad-CAM saliency maps for breast ultrasound classification.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li><span className="font-medium">90.51% accuracy</span>, 87.95% F1-score, and 94.08% AUC across five datasets</li>
                  <li>Explicit foreground-background decomposition for lesion and peritumoral analysis</li>
                  <li>Adaptive attention fusion maintaining transfer learning benefits with minimal parameter increase</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link 
                href="/phd-thesis" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Read Full Thesis Summary
                <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
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