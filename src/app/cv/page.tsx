'use client';

import { useState } from 'react';

interface Section {
  id: string;
  title: string;
  content: {
    title: string;
    subtitle?: string;
    date?: string;
    description?: string;
    items?: string[];
  }[];
}

const cvData: Section[] = [
  {
    id: 'education',
    title: 'Education',
    content: [
      {
        title: 'Ph.D. in Computer Science',
        subtitle: 'University of Hyderabad',
        date: 'Nov 2020 - Present',
        description: 'Thesis title: Advances in Deep Learning for Medical Image Segmentation and Classification'
      },
      {
        title: 'M.Phil. in Computer Science',
        subtitle: 'Mewar University',
        date: 'Sept 2017 - Mar 2019',
        description: 'Thesis title: Performance Comparison of Face Detection and Recognition Algorithms'
      },
      {
        title: 'Master of Computer Applications (MCA)',
        subtitle: 'University of Kashmir',
        date: 'Mar 2013 - Jun 2016',
        description: 'Project Thesis title: SMS Intimation System for Online Leave Management'
      },
      {
        title: 'B.Sc.',
        subtitle: 'University of Kashmir',
        date: 'Mar 2010 - Jan 2013',
        description: 'Majors: Mathematics, Physics, Information Technology'
      }
    ]
  },
  {
    id: 'experience',
    title: 'Experience',
    content: [
      {
        title: 'Full Stack Web Developer',
        subtitle: 'Freelance',
        date: '2022 - Present',
        description: 'Web Development Projects',
        items: [
          'Developed Shifa.AI - An AI-powered healthcare platform with symptom analysis and health assessments using Next.js, TypeScript, and Google Gemini AI',
          'Created UGC NET CS HUB - An e-learning platform for UGC NET CS aspirants with practice questions and performance tracking',
          'Built GoalTrackr - A personal goal management application with task tracking and progress visualization',
          'Implemented responsive UIs with modern frameworks like Tailwind CSS and Headless UI',
          'Integrated various APIs including Google Gemini AI, OpenAI, and custom backend services',
          'Set up CI/CD pipelines for automated testing and deployment using Vercel'
        ]
      },
      {
        title: 'Teaching Assistant',
        subtitle: 'University of Hyderabad',
        date: '2022 - 2024',
        description: 'School of Computer and Information Sciences',
        items: [
          'Mentored 10+ IMTech and MTech students in Deep Learning and Computer Vision',
          'Mentored two research assistants in projects on Fuzzy Rough Kernel-Based Extreme Learning Machine and Mineral Prospectivity Classification using Deep CNNs',
          'Conducted workshops on web development technologies including React, Next.js, and modern JavaScript/TypeScript'
        ]
      },
      {
        title: 'System Administrator',
        subtitle: 'Artificial Intelligence Lab, University of Hyderabad',
        date: '2021 - 2022',
        description: 'School of Computer and Information Sciences',
        items: [
          'Managed and maintained computational resources in the AI Lab',
          'Provided technical support for researchers and students',
          'Developed internal web tools for lab resource management using modern web technologies'
        ]
      },
      {
        title: 'Assistant Professor',
        subtitle: 'Government Degree College Uri, Baramulla, J&K',
        date: '2019',
        description: 'Department of Computer Science',
        items: [
          'Taught undergraduate computer science courses including Web Development and Programming',
          'Developed curriculum and assessment materials for web technologies',
          'Guided students in web development projects and applications'
        ]
      }
    ]
  },
  {
    id: 'awards',
    title: 'Awards & Honors',
    content: [
      {
        title: 'UGC NET+JRF (Computer Science & Application)',
        subtitle: 'National Testing Agency (NTA)',
        date: 'December 2019',
        description: 'Qualified with All India Rank 53'
      },
      {
        title: 'Programmer J&K',
        subtitle: 'Samagra Shiksha',
        date: '2017',
        description: 'Achieved District Rank 1st and State Rank 3rd'
      }
    ]
  },
  {
    id: 'conferences',
    title: 'Conference Presentations & Service',
    content: [
      {
        title: 'Paper Presentation',
        subtitle: 'ICCCNet-2024 Conference, Manchester, UK',
        date: '2024',
        description: 'Presented research on "Dynamic Weight Adjusted Ensemble Loss for Enhanced Medical Image Segmentation"'
      },
      {
        title: 'Volunteer, Transport Committee In-charge',
        subtitle: 'International Conference on BigData',
        date: '2024',
        description: 'University of Hyderabad'
      }
    ]
  },
  {
    id: 'skills',
    title: 'Skills',
    content: [
      {
        title: 'Programming & Deep Learning',
        items: [
          'Python, PyTorch, TensorFlow',
          'Medical image analysis',
          'Computer vision algorithms',
          'Deep learning for segmentation and classification',
          'Fuzzy rough set theory',
          'Multi-modal learning'
        ]
      },
      {
        title: 'Research & Academic',
        items: [
          'Technical writing and publication',
          'Curriculum development',
          'Student mentoring',
          'Lab administration',
          'Research methodology'
        ]
      },
      {
        title: 'Tools & Technologies',
        items: [
          'Linux system administration',
          'High-performance computing',
          'Version control (Git)',
          'Docker containerization',
          'DICOM medical image processing'
        ]
      }
    ]
  }
];

export default function CV() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['education', 'experience']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Curriculum Vitae
        </h1>

        {/* Download CV Button */}
        <div className="text-center mb-12">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Download Full CV (PDF)
          </a>
        </div>

        {/* CV Sections */}
        <div className="space-y-8">
          {cvData.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
              >
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    expandedSections.includes(section.id) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSections.includes(section.id) && (
                <div className="p-6">
                  {section.content.map((item, index) => (
                    <div key={index} className="mb-6 last:mb-0">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      {item.subtitle && (
                        <p className="text-gray-600">{item.subtitle}</p>
                      )}
                      {item.date && (
                        <p className="text-gray-500 text-sm">{item.date}</p>
                      )}
                      {item.description && (
                        <p className="text-gray-600 mt-2">{item.description}</p>
                      )}
                      {item.items && (
                        <ul className="list-disc list-inside mt-2 text-gray-600">
                          {item.items.map((listItem, itemIndex) => (
                            <li key={itemIndex}>{listItem}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 