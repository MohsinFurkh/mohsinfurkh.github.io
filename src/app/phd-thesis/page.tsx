import Link from 'next/link';

export default function PhdThesis() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Link 
            href="/research" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Research
          </Link>
          <h1 className="text-4xl font-bold text-primary mb-4">
            PhD Thesis Summary
          </h1>
          <h2 className="text-2xl text-gray-700">
            Advances in Deep Learning for Medical Image Segmentation and Classification
          </h2>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Overview</h2>
            <p className="mb-6">
              My doctoral research addressed critical challenges in medical image analysis through the development of innovative deep learning architectures and methodologies. The work focused on improving accuracy, computational efficiency, and generalization capabilities of AI models for medical diagnostics, with particular emphasis on breast ultrasound imaging and tumor detection.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Key Research Contributions</h2>
            
            <div className="space-y-10">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">1. EfficientU-Net: Parameter-Optimized Medical Image Segmentation</h3>
                <p className="mb-4">
                  Developed a novel U-Net variant that integrates depthwise separable convolutions and atrous convolution blocks to address the limitations of standard convolutions in medical image segmentation.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="font-medium">100x reduction</span> in computational parameters compared to traditional U-Net</li>
                    <li>Enhanced boundary localization accuracy for tumor segmentation</li>
                    <li>Adaptive receptive field handling for varying tumor shapes and sizes</li>
                    <li>Improved computational efficiency suitable for real-time clinical applications</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">2. UMA-Net with Adaptive Loss Functions</h3>
                <p className="mb-4">
                  Created an enhanced U-Net architecture featuring residual connections, attention mechanisms, and bottleneck atrous convolutions, coupled with a dynamic ensemble loss function.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Multi-scale contextual information capture without spatial resolution compromise</li>
                    <li>Adaptive loss weighting that dynamically balances region overlap and boundary accuracy</li>
                    <li>Superior generalization across five diverse breast ultrasound datasets (BUET, BUSI, Mendeley, OMI, UDIAT)</li>
                    <li>Robust performance in handling class imbalance and noise in medical images</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">3. Fuzzy Rough Set Loss for Boundary Precision</h3>
                <p className="mb-4">
                  Introduced a novel loss function based on fuzzy rough set theory to handle boundary uncertainties in medical images.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Innovations:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Enhanced sensitivity to uncertain predictions and ambiguous lesion boundaries</li>
                    <li>Reduced computational complexity while improving segmentation accuracy</li>
                    <li>Effective handling of irregular shapes and overlapping edges in medical imaging</li>
                    <li>Novel similarity functions for better uncertainty handling in boundary regions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">4. Saliency-Guided AttentionNet (SGAN)</h3>
                <p className="mb-4">
                  Designed a dual-branch architecture leveraging Grad-CAM saliency maps for breast ultrasound classification.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Performance Metrics:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><span className="font-medium">90.51% accuracy</span> on multi-center validation</li>
                    <li>87.95% F1-score and 94.08% AUC across five datasets</li>
                    <li>Explicit foreground-background decomposition for lesion and peritumoral analysis</li>
                    <li>Adaptive attention fusion maintaining transfer learning benefits with minimal parameter increase</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Impact and Validation</h2>
            <p className="mb-4">
              The research was comprehensively validated across multiple medical imaging modalities including ultrasound, MRI, CT scans, and various anatomical regions. Key achievements include:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><span className="font-medium">Cross-dataset validation</span> demonstrating robust generalization (78.46% accuracy across held-out datasets)</li>
              <li><span className="font-medium">Computational efficiency</span> suitable for clinical deployment and real-time processing</li>
              <li><span className="font-medium">State-of-the-art performance</span> with significant improvements over baseline methods</li>
              <li><span className="font-medium">Clinical applicability</span> addressing real-world challenges in resource-limited healthcare settings</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Broader Significance</h2>
            <p className="mb-4">
              This work bridges the gap between theoretical deep learning advances and practical medical applications, providing computationally efficient solutions that maintain high accuracy while being deployable in clinical environments. The research contributes to the democratization of advanced medical AI, particularly benefiting healthcare systems with limited access to expert radiological interpretation.
            </p>
            <p>
              The developed methodologies have been published in top-tier conferences and journals, with open-source implementations available to facilitate further research and clinical adoption.
            </p>
          </section>

          <div className="mt-12 pt-6 border-t border-gray-200 text-center">
            <Link 
              href="/research" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Research
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
