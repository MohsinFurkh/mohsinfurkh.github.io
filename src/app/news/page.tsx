export default function NewsPage() {
  const newsItems = [
    {
      date: "January 2026",
      title: "Shortlisted as Research Faculty",
      description: "Shortlisted as Research Faculty at UPES Dehradun.",
      type: "career"
    },
    {
      date: "January 2026",
      title: "Paper Accepted in Computerized Medical Imaging and Graphics",
      description: "Paper 'Fuzzy Rough Set Loss for Deep Learning-Based Precise Medical Image Segmentation' accepted in Computers in Medical Imaging and Graphics (SCI-indexed).",
      type: "publication"
    },
    {
      date: "July 2025",
      title: "Joined UPES Dehradun",
      description: "Joined as Assistant Professor, School of Computer Science, UPES Dehradun.",
      type: "career"
    },
    {
      date: "July 2025",
      title: "PhD Thesis Submitted",
      description: "PhD thesis 'Advances in Deep Learning for Medical Image Segmentation and Classification' submitted to University of Hyderabad.",
      type: "milestone"
    },
    {
      date: "2025",
      title: "Paper Published in Medical & Biological Engineering & Computing",
      description: "Paper 'Adaptive Ensemble Loss and Multi-Scale Attention in Breast Ultrasound Segmentation with UMA-Net' accepted in Medical & Biological Engineering & Computing (Springer, SCIE).",
      type: "publication"
    },
    {
      date: "2025",
      title: "Three Papers Under Review",
      description: "Three new papers submitted to Biomedical Signal Processing & Control and Ultrasound in Medicine & Biology — currently under review.",
      type: "publication"
    },
    {
      date: "2024",
      title: "Paper Published in Image and Vision Computing",
      description: "Paper on genetic algorithm-based feature selection published in Image and Vision Computing (Elsevier, SCIE).",
      type: "publication"
    }
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "publication":
        return "bg-green-100 text-green-800 border-green-200";
      case "career":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "milestone":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "publication":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case "career":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "milestone":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">News & Updates</h1>
            <p className="text-xl text-gray-600">
              Recent developments in research, publications, and career
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            {/* News Items */}
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      {/* Date */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 border ${getTypeStyles(item.type)}`}>
                        {getTypeIcon(item.type)}
                        <span>{item.date}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Last updated: April 2026</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              For the latest updates, follow me on 
              <a href="https://scholar.google.com/citations?user=DGm9l2wAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">Google Scholar</a> or 
              <a href="https://www.linkedin.com/in/mohsinfurkh/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">LinkedIn</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
