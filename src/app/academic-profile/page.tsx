'use client';

interface Experience {
  id: string;
  title: string;
  institution: string;
  period: string;
  description?: string;
  responsibilities?: string[];
}

interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
}

interface Presentation {
  id: string;
  title: string;
  event: string;
  year: string;
  description?: string;
}

interface Journal {
  id: string;
  name: string;
  publisher: string;
}

// Teaching Experience
const teachingExperience: Experience[] = [
  {
    id: 'te1',
    title: 'Assistant Professor',
    institution: 'Government Degree College Uri, Baramulla, J&K',
    period: '2019',
    description: 'Teaching Computer Science courses to undergraduate students'
  },
  {
    id: 'te2',
    title: 'Teaching Assistant',
    institution: 'University of Hyderabad',
    period: '2022 - 2024',
    responsibilities: [
      'Mentored 10+ IMTech and MTech students in Deep Learning and Computer Vision',
      'Mentored two research assistants in projects on Fuzzy Rough Kernel-Based Extreme Learning Machine and Mineral Prospectivity Classification using Deep CNNs'
    ]
  },
  {
    id: 'te3',
    title: 'System Administrator',
    institution: 'Artificial Intelligence Lab, School of Computer and Information Sciences, University of Hyderabad',
    period: '2021 - 2022',
    description: 'Managed and maintained computational resources in the AI Lab'
  }
];

// Awards and Achievements
const achievements: Achievement[] = [
  {
    id: 'ach1',
    title: 'UGC NET+JRF (Computer Science & Application)',
    organization: 'NTA UGC NET Exam',
    year: '2019',
    description: 'Qualified with All India Rank 53'
  },
  {
    id: 'ach2',
    title: 'Programmer J&K',
    organization: 'Samagra Shiksha',
    year: '2017',
    description: 'Achieved District Rank 1st and State Rank 3rd'
  }
];

// Conference Presentations and Service
const presentations: Presentation[] = [
  {
    id: 'pres1',
    title: 'Dynamic Weight Adjusted Ensemble Loss for Enhanced Medical Image Segmentation',
    event: 'ICCCNet-2024 conference, Manchester, UK',
    year: '2024'
  },
  {
    id: 'pres2',
    title: 'Volunteer, Transport Committee In-charge',
    event: 'International Conference on BigData 2024, University of Hyderabad',
    year: '2024'
  }
];

// Journal Reviewer Experience
const journals: Journal[] = [
  {
    id: 'j1',
    name: 'IEEE Transactions on Medical Imaging',
    publisher: 'IEEE'
  },
  {
    id: 'j2',
    name: 'Information Fusion',
    publisher: 'Elsevier'
  },
  {
    id: 'j3',
    name: 'Journal of Clinical Ultrasound: Sonography and Other Imaging Techniques',
    publisher: 'Wiley'
  },
  {
    id: 'j4',
    name: 'Neural Computing and Applications',
    publisher: 'Springer'
  },
  {
    id: 'j5',
    name: 'Engineering Applications of Artificial Intelligence',
    publisher: 'Elsevier'
  },
  {
    id: 'j6',
    name: 'Journal of Biomedical and Health Informatics',
    publisher: 'IEEE'
  },
  {
    id: 'j7',
    name: 'Multimedia Tools and Applications',
    publisher: 'Springer'
  },
  {
    id: 'j8',
    name: 'Image and Vision Computing',
    publisher: 'Elsevier'
  }
];

export default function AcademicProfile() {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Academic Profile & Service
        </h1>
        
        {/* Teaching Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b">Teaching Experience</h2>
          <div className="space-y-8">
            {teachingExperience.map((experience) => (
              <div key={experience.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-medium text-primary">{experience.title}</h3>
                  <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {experience.period}
                  </span>
                </div>
                <p className="text-gray-700 font-medium mb-3">{experience.institution}</p>
                {experience.description && (
                  <p className="text-gray-600 mb-3">{experience.description}</p>
                )}
                {experience.responsibilities && (
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* Awards and Achievements */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b">Awards & Achievements</h2>
          <div className="space-y-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-medium text-primary">{achievement.title}</h3>
                  <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-700 font-medium mb-2">{achievement.organization}</p>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Conference Presentations and Service */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b">Conference Presentations & Service</h2>
          <div className="space-y-6">
            {presentations.map((presentation) => (
              <div key={presentation.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-medium text-primary">{presentation.title}</h3>
                  <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {presentation.year}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">{presentation.event}</p>
                {presentation.description && <p className="text-gray-600 mt-2">{presentation.description}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Journal Reviewer Experience */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b">Journal Reviewer Experience</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">I have served as a reviewer for the following peer-reviewed journals:</p>
            <ul className="space-y-3">
              {journals.map((journal) => (
                <li key={journal.id} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">
                    <span className="font-medium">{journal.name}</span>
                    <span className="text-gray-500 text-sm ml-2">({journal.publisher})</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

         {/* Academic Notes and Presentation Lectures */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b">Academic Notes & Presentation Lectures</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-md border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Educational Resources</h3>
                <p className="text-gray-600">Access my comprehensive collection of academic materials</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Explore my curated collection of academic notes, presentation slides, and educational materials 
              covering various topics in Computer Science, Machine Learning, and Deep Learning.
            </p>
            <a 
              href="https://mohsinfurkh.github.io/Presentations/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visit Academic Resources
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
