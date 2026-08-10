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

const metrics = [
  { value: '9', label: 'Publications' },
  { value: '7', label: 'First author' },
  { value: '108+', label: 'Citations' },
  { value: '4', label: 'h-index' },
  { value: '4', label: 'Q1 SCIE papers' }
];

const cvData: Section[] = [
  {
    id: 'education',
    title: 'Education',
    content: [
      {
        title: 'Ph.D. in Computer Science',
        subtitle: 'University of Hyderabad',
        date: 'Nov 2020 - Jul 2026 · Degree awarded 28 July 2026',
        description: 'Thesis: Advances in Deep Learning for Medical Image Segmentation and Classification. Advisor: Dr. Avatharam Ganivada, School of Computer and Information Sciences. Funded by the UGC Junior Research Fellowship (All India Rank 53).'
      },
      {
        title: 'M.Phil. in Computer Science',
        subtitle: 'Mewar University',
        date: 'Sept 2017 - Mar 2019',
        description: 'Thesis: Performance Comparison of Face Detection and Recognition Algorithms'
      },
      {
        title: 'Master of Computer Applications (MCA)',
        subtitle: 'University of Kashmir',
        date: 'Mar 2013 - Jun 2016',
        description: 'Project: SMS Intimation System for Online Leave Management'
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
    title: 'Academic Appointments',
    content: [
      {
        title: 'Assistant Professor',
        subtitle: 'School of Computer Science, UPES, Dehradun',
        date: '2025 - Present',
        items: [
          'Shortlisted and appointed under the Research Faculty track in recognition of research output in deep learning for medical imaging',
          'Lead an independent research programme on interpretable deep learning for medical image analysis; author of two 2026 journal papers produced at UPES',
          'Teach core B.Tech. and M.Tech. Computer Science courses; design course material and assessments',
          'Supervise B.Tech. and M.Tech. capstone projects in machine learning and computer vision'
        ]
      },
      {
        title: 'Teaching Assistant',
        subtitle: 'School of Computer and Information Sciences, University of Hyderabad',
        date: 'Jan 2022 - Dec 2024',
        items: [
          'Delivered tutorial and laboratory sessions for graduate courses in deep learning and computer vision',
          'Designed and evaluated programming assignments; mentored students on course projects',
          'Mentored 10+ IMTech and M.Tech. students in deep learning and computer vision',
          'Guided two research assistants on fuzzy rough kernel-based extreme learning machines and mineral prospectivity classification'
        ]
      },
      {
        title: 'System Administrator, Artificial Intelligence Lab',
        subtitle: 'School of Computer and Information Sciences, University of Hyderabad',
        date: 'Jan 2021 - Dec 2022',
        items: [
          'Managed GPU workstations and server infrastructure supporting the AI research group',
          'Configured and optimised deep learning software environments for lab-wide research use',
          'Provided technical support for researchers and students'
        ]
      },
      {
        title: 'Assistant Professor',
        subtitle: 'Government Degree College Uri, Baramulla, J&K',
        date: '2019',
        items: [
          'Taught undergraduate Computer Science courses',
          'Developed course material for programming and data structures'
        ]
      }
    ]
  },
  {
    id: 'grants',
    title: 'Grants & Funding',
    content: [
      {
        title: 'ICMR ANVESHAN Small Extramural Grant — Principal Investigator',
        subtitle: 'Indian Council of Medical Research · Submitted, under review',
        date: '2026',
        description: 'AI-Assisted Automated Quantification of Umbilical Artery Doppler Ultrasound for Early Detection of Fetal Compromise. Requested budget ₹25,00,000 over 24 months.',
        items: [
          'Role: Principal Investigator, with Dr. Ufaque Muzaffar (Medical Officer, Department of Health & Family Welfare, J&K) as clinical Co-PI and Prof. Tanupriya Choudhury (UPES) as Co-Investigator',
          'Priority area: Reproductive, Maternal & Child Health — Antenatal Care'
        ]
      },
      {
        title: 'Institution of Eminence (IoE) International Travel Grant',
        subtitle: 'University of Hyderabad',
        date: '2024',
        description: '₹1,00,000 covering registration, international travel and per-diem, competitively awarded to present at ICCCNet-2024 in Manchester, United Kingdom.'
      }
    ]
  },
  {
    id: 'awards',
    title: 'Awards & Honors',
    content: [
      {
        title: 'IoE International Travel Grant',
        subtitle: 'University of Hyderabad',
        date: '2024',
        description: '₹1,00,000 for international conference presentation in Manchester, UK'
      },
      {
        title: 'UGC NET + JRF (Computer Science & Applications)',
        subtitle: 'National Testing Agency (NTA)',
        date: 'December 2019',
        description: 'Qualified with All India Rank 53'
      }
    ]
  },
  {
    id: 'service',
    title: 'Professional Service',
    content: [
      {
        title: 'Journal Reviewer',
        subtitle: 'Peer review for eight international journals',
        items: [
          'IEEE Transactions on Medical Imaging',
          'IEEE Journal of Biomedical and Health Informatics',
          'Information Fusion (Elsevier)',
          'Image and Vision Computing (Elsevier)',
          'Engineering Applications of Artificial Intelligence (Elsevier)',
          'Neural Computing and Applications (Springer)',
          'Multimedia Tools and Applications (Springer)',
          'Journal of Clinical Ultrasound (Wiley)'
        ]
      },
      {
        title: 'Editorial Board Member',
        subtitle: 'PriMera Scientific Engineering (ISSN 2834-2550)'
      }
    ]
  },
  {
    id: 'conferences',
    title: 'Presentations & Professional Development',
    content: [
      {
        title: 'Conference Presenter — ICCCNet-2024',
        subtitle: 'Manchester, United Kingdom',
        date: 'October 2024',
        description: 'Presented "Dynamic Weight-Adjusted Ensemble Loss for Enhanced Medical Image Segmentation", funded by the IoE International Travel Grant'
      },
      {
        title: 'Train-the-Trainer (T3): Cloud Application Development',
        subtitle: 'IBM · One-week programme',
        date: '2026'
      },
      {
        title: 'Train-the-Trainer (T3): Pattern Recognition',
        subtitle: 'IBM · One-week programme',
        date: '2025'
      },
      {
        title: 'Workshop: MRI and EEG Data Analysis',
        subtitle: 'IIIT Hyderabad',
        date: '2024'
      },
      {
        title: 'Workshop: Hands-On Natural Language Processing',
        subtitle: 'Machine Learning India (MLI)',
        date: '2021'
      }
    ]
  },
  {
    id: 'teaching',
    title: 'Teaching',
    content: [
      {
        title: 'Courses Taught',
        subtitle: 'Assistant Professor',
        items: [
          'Introduction to Programming using C',
          'Python Programming',
          'Data Structures and Algorithms',
          'Database Management Systems'
        ]
      },
      {
        title: 'Courses Assisted',
        subtitle: 'Teaching Assistant, University of Hyderabad',
        items: [
          'Deep Learning for Computer Vision',
          'Advanced Machine Learning',
          'Neural Networks and Applications',
          'Research Methodology'
        ]
      },
      {
        title: 'Courses Prepared to Teach',
        items: [
          'Undergraduate: Programming (C / Python), Data Structures and Algorithms, Database Management Systems, Operating Systems fundamentals, Introduction to Artificial Intelligence, Digital Image Processing',
          'Postgraduate: Machine Learning, Deep Learning, Computer Vision, Medical Image Analysis, Soft Computing and Fuzzy Systems, Explainable AI, Research Methodology'
        ]
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
          'Python, C, MATLAB, SQL',
          'TensorFlow, Keras, PyTorch',
          'Scikit-learn, NumPy, Pandas, SciPy, OpenCV',
          'Deep learning for segmentation and classification',
          'Fuzzy rough set theory and soft computing',
          'Explainable AI and multi-modal learning'
        ]
      },
      {
        title: 'Research & Academic',
        items: [
          'Technical writing and publication',
          'Grant proposal writing',
          'Curriculum development',
          'Student mentoring and project supervision',
          'Research methodology'
        ]
      },
      {
        title: 'Tools & Technologies',
        items: [
          'Linux system administration',
          'High-performance and GPU computing',
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
        <h1 className="text-4xl font-bold text-primary mb-4 text-center">
          Curriculum Vitae
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Assistant Professor (Research Faculty), School of Computer Science, UPES, Dehradun
        </p>

        {/* Research Profile */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Research Profile</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Computer scientist working at the intersection of{' '}
              <span className="font-semibold text-gray-900">deep learning, medical image analysis, and soft computing</span>.
              My research develops architectures and learning objectives for medical image segmentation and
              classification, with an emphasis on uncertainty-aware learning (fuzzy rough set losses), adaptive
              ensemble objectives, and interpretable attention mechanisms for breast ultrasound diagnosis.
            </p>
            <p>
              <span className="font-semibold text-gray-900">Independent research programme.</span>{' '}
              Since joining UPES I have established a line of work independent of my doctoral supervision:
              Principal Investigator on a ₹25 lakh ICMR ANVESHAN extramural proposal (under review) with a
              clinical Co-PI, and first and corresponding author on <em>MSCT-Trans</em> (Ultrasound in Medicine
              &amp; Biology, 2026) — conceived and executed at UPES with my own postgraduate student.
            </p>
            <p>
              <span className="font-semibold text-gray-900">Forward agenda.</span>{' '}
              Building clinically deployable, explainable AI for multimodal medical imaging — extending
              uncertainty-aware loss design and foundation-model adaptation from breast ultrasound to obstetric
              Doppler and other modalities, in partnership with clinical collaborators.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="border border-gray-200 border-t-2 border-t-primary rounded-md py-3 px-2 text-center"
              >
                <div className="text-2xl font-bold text-primary leading-none">{metric.value}</div>
                <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Citation metrics from Google Scholar, August 2026
          </p>
        </div>

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
