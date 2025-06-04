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
                <h4 className="text-xl font-semibold text-primary mb-3">EfficientU-Net: Parameter-Optimized Medical Image Segmentation</h4>
                <p className="mb-3">
                  Developed EfficientU-Net, a novel deep learning model integrating EfficientNet-B7 and atrous convolution into the U-Net architecture, optimizing breast tumor segmentation and classification in ultrasound images with reduced computational complexity and enhanced accuracy.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li><span className="font-medium">13x reduction</span> in parameters (1.31M vs. 17.27M in U-Net)</li>
                  <li>Superior segmentation of malignant tumors with irregular shapes</li>
                  <li>Enhanced boundary localization with adaptive receptive fields</li>
                  <li><span className="font-medium">97.905% accuracy</span> in tumor classification (benign, malignant, normal)</li>
                  <li>Validated on two public datasets using 5-fold cross-validation</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-primary mb-3">2. UMA-Net with Adaptive Loss Functions</h4>
                <p className="mb-3">
                  Developed UMA-Net, an advanced U-Net variant integrating residual connections, attention mechanisms, and atrous convolutions, enhanced by a dynamic ensemble loss function to optimize medical image segmentation across diverse datasets.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Residual connections and attention blocks enhance feature integration and focus on critical regions</li>
                  <li>Atrous convolutions enable multi-scale feature capture without compromising resolution</li>
                  <li>Dynamic ensemble loss (BCE, Dice, Hausdorff, Tversky) adapts weights for balanced optimization</li>
                  <li>Achieves superior generalization across five breast ultrasound datasets (BUET, BUSI, Mendeley, OMI, UDIAT)</li>
                </ul>
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
                <h3 className="text-xl font-semibold text-primary mb-3">4. Deep Learning and Genetic Algorithm-based Ensemble Model for Feature Selection and Classification</h3>
                <p className="mb-4">
                  Developed a unified approach integrating MobileNet for feature extraction, Genetic Algorithms (GA) for feature selection, and an ensemble model for classification, optimizing medical image analysis with enhanced accuracy and efficiency.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>MobileNet as an optimal feature extractor for medical images with minimal parameters</li>
                  <li>GA-based feature selection to navigate complex feature spaces effectively</li>
                  <li>Novel ensemble model with soft voting for robust classification decisions</li>
                  <li>Addresses overfitting in limited data scenarios, enhancing model generalizability</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">5. Saliency-Guided AttentionNet (SGAN)</h3>
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
