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
                <h4 className="text-xl font-semibold text-primary mb-3">3. Deep Learning and Genetic Algorithm-based Ensemble Model for Feature Selection and Classification</h4>
                <p className="mb-3">
                  Developed a unified approach integrating MobileNet for feature extraction, Genetic Algorithms (GA) for feature selection, and an ensemble model for classification, optimizing medical image analysis with enhanced accuracy and efficiency.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>MobileNet as an optimal feature extractor for medical images with minimal parameters</li>
                  <li>GA-based feature selection to navigate complex feature spaces effectively</li>
                  <li>Novel ensemble model with soft voting for robust classification decisions</li>
                  <li>Addresses overfitting in limited data scenarios, enhancing model generalizability</li>
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
              <h3 className="text-2xl font-semibold mb-4">Domain-Aware Optimization for Medical Image Segmentation</h3>
              <p className="text-gray-600 mb-4">
                Addressing the unique challenges of medical image segmentation through domain-aware optimization 
                approaches that integrate anatomical priors, imaging physics, and clinical workflow requirements 
                into automated machine learning pipelines.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Research Focus:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Develop optimization frameworks that incorporate domain-specific constraints and anatomical priors</li>
                  <li>Create efficient strategies for limited medical imaging data scenarios</li>
                  <li>Design multi-objective optimization balancing accuracy, uncertainty quantification, and computational efficiency</li>
                  <li>Ensure compliance with clinical requirements and regulatory standards</li>
                  <li>Validate across diverse medical imaging modalities and clinical applications</li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Saliency-Guided AttentionNet for Breast Ultrasound Classification</h3>
              <p className="text-gray-600 mb-4">
                A novel dual-branch deep learning architecture that addresses the challenges of breast ultrasound classification 
                by explicitly modeling both lesion-specific and peritumoral tissue features through saliency-guided attention mechanisms.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Key Innovations:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Dual-branch architecture with shared MobileNet backbone for efficient feature extraction</li>
                  <li>Grad-CAM based saliency guidance for explicit foreground-background decomposition</li>
                  <li>Adaptive channel-wise attention for dynamic feature fusion</li>
                  <li>Validated on 1,551 images across 5 public datasets with 90.51% accuracy</li>
                  <li>Robust cross-dataset validation with 78.46% accuracy on held-out sets</li>
                </ul>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Fuzzy Similarity-Driven Loss for Medical Image Segmentation</h3>
              <p className="text-gray-600 mb-4">
                A novel Fuzzy Rough Set (FRS) loss function that enhances boundary delineation in medical images by effectively handling 
                uncertainty and ambiguity in lesion boundaries through fuzzy similarity measures and rough set approximations.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Key Contributions:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Novel FRS loss function based on fuzzy rough set theory for precise boundary delineation</li>
                  <li>Enhanced sensitivity to uncertain predictions through new fuzzy similarity function</li>
                  <li>Effective handling of boundary ambiguities using lower and upper approximations</li>
                  <li>Validated across multiple modalities (ultrasound, MRI, CT) and clinical applications</li>
                  <li>Reduced computational complexity compared to conventional loss functions</li>
                </ul>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Uncertainty-Aware Explainable Deep Learning for Medical Image Segmentation</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive framework integrating pixel-level uncertainty estimation with multi-modal explainability techniques 
                to enhance clinical trustworthiness and safety in AI-assisted medical image analysis.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Monte Carlo dropout and Bayesian layers for robust uncertainty estimation</li>
                  <li>Multi-modal explainability (Grad-CAM, attention mechanisms, saliency maps)</li>
                  <li>Mean Dice coefficient of 0.89±0.03 across multiple datasets</li>
                  <li>92% segmentation failure detection with only 15% manual review rate</li>
                </ul>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
} 
