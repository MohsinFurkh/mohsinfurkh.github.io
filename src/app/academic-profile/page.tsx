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
      </div>
    </div>
  );
}